var ArrayInitLexer = require("../gramatica/gen/ArrayInitLexer").ArrayInitLexer;
var ArrayInitParser = require("../gramatica/gen/ArrayInitParser")
  .ArrayInitParser;
var ArrayInitListener = require("../gramatica/gen/ArrayInitListener")
  .ArrayInitListener;
var antlr4 = require("antlr4");
var fs = require("fs");
var input = fs.readFileSync("./archivos_entrada/input.txt").toString();

var KeyPrinter = function () {
  ArrayInitListener.call(this);
  return this;
};

KeyPrinter.prototype = Object.create(ArrayInitListener.prototype);
KeyPrinter.prototype.constructor = KeyPrinter;

KeyPrinter.prototype.exitInit = function (ctx) {};

function main(inputText) {
  var chars = new antlr4.InputStream(inputText);
  var lexer = new ArrayInitLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new ArrayInitParser(tokens);
  parser.buildParseTrees = true;
  var tree = parser.init();
  var printer = new KeyPrinter();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
}

main(input);
