var ArrayInitLexer = require("../gramatica/gen/ArrayInitLexer").ArrayInitLexer;
var ArrayInitParser = require("../gramatica/gen/ArrayInitParser")
  .ArrayInitParser;
var antlr4 = require("antlr4");
var fs = require("fs");
var input = fs.readFileSync("./archivos_entrada/input.txt").toString();

function main(inputText) {
  var chars = new antlr4.InputStream(inputText);
  var lexer = new ArrayInitLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new ArrayInitParser(tokens);
  var tree = parser.init();
}

main(input);
