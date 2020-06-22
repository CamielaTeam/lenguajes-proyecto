var ReactLexer = require("../gramatica/.antlr/ReactLexer")
  .ReactLexer;
var ReactParser = require("../gramatica/.antlr/ReactParser")
  .ReactParser;
var ReactListener = require("../gramatica/.antlr/ReactListener")
  .ReactListener;
var antlr4 = require("antlr4");
var fs = require("fs");
var path = require('path');


const ruta_entradas = path.join(__dirname, '/../archivos_entrada');



var KeyPrinter = function () {
  ReactListener.call(this);
  return this;
};

//  Variables globales del proyecto
var orderComponents = [];


//  Variables locales del listener
var listOfImports = [];
var currentComponent = "";
var currentComponentCalls = [];
var currentPropTypesComponent = "";

var insideImport = false;
var listOfComponentsInFile = [];

KeyPrinter.prototype = Object.create(ReactListener.prototype);
KeyPrinter.prototype.constructor = KeyPrinter;


KeyPrinter.prototype.enterFunctionR = function(ctx) {
  currentComponent = ctx.ID().toString();
};

KeyPrinter.prototype.exitFunctionR = function(ctx) {
  currentComponent = "";
};

KeyPrinter.prototype.enterHtml_elements = function(ctx){
  if(listOfComponentsInFile.filter((component) => 
  { return component.name === currentComponent}
  ).length === 0){
    listOfComponentsInFile.push({name: currentComponent, componentsInside: {}});
  }
  if(listOfImports.includes(ctx.ID()[0].toString())){
    
    index_of_component = -1;

    for(var i = 0; i < listOfComponentsInFile.length; i++){
      if(listOfComponentsInFile[i].name === currentComponent){
        index_of_component = i;
        break;
      }
    }

    listOfComponentsInFile[index_of_component].componentsInside[ctx.ID()[0].toString()] = {};
  }

}

KeyPrinter.prototype.enterNo_id_import = function(ctx){
  insideImport = true;
}
KeyPrinter.prototype.exitNo_id_import = function(ctx){
  insideImport = false;
}

KeyPrinter.prototype.enterId_import = function(ctx){
  insideImport = true;
  listOfImports.push(ctx.ID().toString());
}
KeyPrinter.prototype.exitId_import = function(ctx){
  insideImport = false;
}

KeyPrinter.prototype.enterId_list = function(ctx){
  if(insideImport === true){
    listOfImports.push(ctx.ID().toString());
  }
}

KeyPrinter.prototype.enterMore_id = function(ctx){
  if(insideImport === true){
    listOfImports.push(ctx.ID().toString());
  }
}

KeyPrinter.prototype.enterAdding_proptypes = function(ctx){
}

KeyPrinter.prototype.exitProgram = function (ctx) {
  console.log();
  console.log("-------SALIDA-------");
  console.log();
  console.log("LISTA DE IMPORTS");
  console.log(listOfImports);
  console.log();
  console.log("LISTA DE COMPONENTES LLAMADOS");
  console.log(currentComponentCalls);
};

function main(inputText) {
  var chars = new antlr4.InputStream(inputText);
  var lexer = new ReactLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new ReactParser(tokens);
  parser.buildParseTrees = true;
  var tree = parser.program();
  var printer = new KeyPrinter();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
}


fs.readdir(ruta_entradas, function (err, files) {
  if (err) {
      return console.log('Unable to scan directory: ' + err);
  } 
  files.forEach(function (file) {
      // Do whatever you want to do with the file
      console.log(file); 
      var input = fs.readFileSync(`./archivos_entrada/${file}`).toString();
      main(input);
  });
  console.log();
  console.log(listOfComponentsInFile);
});




