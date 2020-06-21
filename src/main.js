var ReactLexer = require("../gramatica/.antlr/ReactLexer")
  .ReactLexer;
var ReactParser = require("../gramatica/.antlr/ReactParser")
  .ReactParser;
var ReactListener = require("../gramatica/.antlr/ReactListener")
  .ReactListener;
var antlr4 = require("antlr4");
var fs = require("fs");
var input = fs.readFileSync("./archivos_entrada/input.txt").toString();

var KeyPrinter = function () {
  ReactListener.call(this);
  return this;
};


var currentComponent = "";
var currentPropTypesComponent = "";
var matrixToRender = [];
var listOfImports = [];
var currentComponentCalls = [];
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
  if(!listOfComponentsInFile.includes(currentComponent)){
    listOfComponentsInFile.push(currentComponent);
  }
  var tagId = ctx.ID()[0].toString();
  if(listOfImports.includes(tagId) && !currentComponentCalls.includes(tagId)){
    currentComponentCalls.push(tagId);
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
  console.log(ctx.ID().toString());
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

main(input);
