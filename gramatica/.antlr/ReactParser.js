// Generated from React.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ReactListener = require('./ReactListener').ReactListener;
var grammarFileName = "React.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003%\u00e6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002\u0007",
    "\u0002(\n\u0002\f\u0002\u000e\u0002+\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u00032\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004<\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004E\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004K\n\u0004",
    "\u0005\u0004M\n\u0004\u0003\u0005\u0003\u0005\u0007\u0005Q\n\u0005\f",
    "\u0005\u000e\u0005T\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0007\u0006Y\n\u0006\f\u0006\u000e\u0006\\\u000b\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007e\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007i\n\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007n\n\u0007\u0003\b\u0003\b",
    "\u0003\b\u0005\bs\n\b\u0003\b\u0003\b\u0005\bw\n\b\u0003\b\u0005\bz",
    "\n\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0005\t\u0082\n",
    "\t\u0003\t\u0003\t\u0005\t\u0086\n\t\u0003\t\u0005\t\u0089\n\t\u0003",
    "\t\u0005\t\u008c\n\t\u0003\t\u0003\t\u0007\t\u0090\n\t\f\t\u000e\t\u0093",
    "\u000b\t\u0003\t\u0005\t\u0096\n\t\u0003\t\u0005\t\u0099\n\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00a0\n\t\u0003\n\u0003\n\u0003",
    "\n\u0005\n\u00a5\n\n\u0003\n\u0003\n\u0003\n\u0005\n\u00aa\n\n\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u00ae\n\u000b\u0003\u000b\u0005\u000b",
    "\u00b1\n\u000b\u0003\f\u0003\f\u0005\f\u00b5\n\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0005\r\u00bc\n\r\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00c5\n",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u00cd\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u00d3\n\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u00df\n\u0012\u0003\u0012\u0005\u0012",
    "\u00e2\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0002\u0002\u0014",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"$\u0002\u0004\u0004\u0002\u0015\u0017$%\u0003\u0002\u001c\"",
    "\u0002\u00f7\u0002)\u0003\u0002\u0002\u0002\u00041\u0003\u0002\u0002",
    "\u0002\u0006L\u0003\u0002\u0002\u0002\bN\u0003\u0002\u0002\u0002\nU",
    "\u0003\u0002\u0002\u0002\f]\u0003\u0002\u0002\u0002\u000eo\u0003\u0002",
    "\u0002\u0002\u0010~\u0003\u0002\u0002\u0002\u0012\u00a1\u0003\u0002",
    "\u0002\u0002\u0014\u00ab\u0003\u0002\u0002\u0002\u0016\u00b2\u0003\u0002",
    "\u0002\u0002\u0018\u00b6\u0003\u0002\u0002\u0002\u001a\u00bd\u0003\u0002",
    "\u0002\u0002\u001c\u00c4\u0003\u0002\u0002\u0002\u001e\u00c6\u0003\u0002",
    "\u0002\u0002 \u00d4\u0003\u0002\u0002\u0002\"\u00d6\u0003\u0002\u0002",
    "\u0002$\u00e3\u0003\u0002\u0002\u0002&(\u0005\u0004\u0003\u0002\'&\u0003",
    "\u0002\u0002\u0002(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002",
    ")*\u0003\u0002\u0002\u0002*,\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002",
    "\u0002,-\u0007\u0002\u0002\u0003-\u0003\u0003\u0002\u0002\u0002.2\u0005",
    "\u0006\u0004\u0002/2\u0005\f\u0007\u000202\u0005\u001e\u0010\u00021",
    ".\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000210\u0003\u0002\u0002",
    "\u00022\u0005\u0003\u0002\u0002\u000234\u0007\u0006\u0002\u000245\u0007",
    "\u0007\u0002\u000256\u0005\b\u0005\u000267\u0007\b\u0002\u000278\u0007",
    "\t\u0002\u000289\u0007$\u0002\u00029;\u0007\n\u0002\u0002:<\u0007\u000b",
    "\u0002\u0002;:\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<M\u0003",
    "\u0002\u0002\u0002=>\u0007\u0006\u0002\u0002>D\u0007#\u0002\u0002?@",
    "\u0007\u0003\u0002\u0002@A\u0007\u0007\u0002\u0002AB\u0005\b\u0005\u0002",
    "BC\u0007\b\u0002\u0002CE\u0003\u0002\u0002\u0002D?\u0003\u0002\u0002",
    "\u0002DE\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FG\u0007\t",
    "\u0002\u0002GH\u0007$\u0002\u0002HJ\u0007\n\u0002\u0002IK\u0007\u000b",
    "\u0002\u0002JI\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KM\u0003",
    "\u0002\u0002\u0002L3\u0003\u0002\u0002\u0002L=\u0003\u0002\u0002\u0002",
    "M\u0007\u0003\u0002\u0002\u0002NR\u0007#\u0002\u0002OQ\u0005\n\u0006",
    "\u0002PO\u0003\u0002\u0002\u0002QT\u0003\u0002\u0002\u0002RP\u0003\u0002",
    "\u0002\u0002RS\u0003\u0002\u0002\u0002S\t\u0003\u0002\u0002\u0002TR",
    "\u0003\u0002\u0002\u0002UV\u0007\u0003\u0002\u0002VZ\u0007#\u0002\u0002",
    "WY\u0005\n\u0006\u0002XW\u0003\u0002\u0002\u0002Y\\\u0003\u0002\u0002",
    "\u0002ZX\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[\u000b\u0003",
    "\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002]^\u0007\f\u0002\u0002",
    "^_\u0007#\u0002\u0002_`\u0007\r\u0002\u0002`a\u0005\b\u0005\u0002ab",
    "\u0007\u000e\u0002\u0002bd\u0007\u0007\u0002\u0002ce\u0007\u000b\u0002",
    "\u0002dc\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002ef\u0003\u0002",
    "\u0002\u0002fh\u0005\u000e\b\u0002gi\u0007\u000b\u0002\u0002hg\u0003",
    "\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002",
    "jk\u0007\b\u0002\u0002km\u0007\n\u0002\u0002ln\u0007\u000b\u0002\u0002",
    "ml\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002n\r\u0003\u0002",
    "\u0002\u0002op\u0007\u000f\u0002\u0002pr\u0007\r\u0002\u0002qs\u0007",
    "\u000b\u0002\u0002rq\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002",
    "sv\u0003\u0002\u0002\u0002tw\u0005\u0010\t\u0002uw\u0005\u0012\n\u0002",
    "vt\u0003\u0002\u0002\u0002vu\u0003\u0002\u0002\u0002wy\u0003\u0002\u0002",
    "\u0002xz\u0007\u000b\u0002\u0002yx\u0003\u0002\u0002\u0002yz\u0003\u0002",
    "\u0002\u0002z{\u0003\u0002\u0002\u0002{|\u0007\u000e\u0002\u0002|}\u0007",
    "\n\u0002\u0002}\u000f\u0003\u0002\u0002\u0002~\u007f\u0007\u0010\u0002",
    "\u0002\u007f\u0081\u0007#\u0002\u0002\u0080\u0082\u0005\u0014\u000b",
    "\u0002\u0081\u0080\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002",
    "\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0085\u0007\u0011\u0002",
    "\u0002\u0084\u0086\u0007\u000b\u0002\u0002\u0085\u0084\u0003\u0002\u0002",
    "\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0088\u0003\u0002\u0002",
    "\u0002\u0087\u0089\u0005\u001c\u000f\u0002\u0088\u0087\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008b\u0003\u0002\u0002",
    "\u0002\u008a\u008c\u0007\u000b\u0002\u0002\u008b\u008a\u0003\u0002\u0002",
    "\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u0091\u0003\u0002\u0002",
    "\u0002\u008d\u0090\u0005\u0010\t\u0002\u008e\u0090\u0005\u0012\n\u0002",
    "\u008f\u008d\u0003\u0002\u0002\u0002\u008f\u008e\u0003\u0002\u0002\u0002",
    "\u0090\u0093\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002",
    "\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0095\u0003\u0002\u0002\u0002",
    "\u0093\u0091\u0003\u0002\u0002\u0002\u0094\u0096\u0005\u001c\u000f\u0002",
    "\u0095\u0094\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002",
    "\u0096\u0098\u0003\u0002\u0002\u0002\u0097\u0099\u0007\u000b\u0002\u0002",
    "\u0098\u0097\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002",
    "\u0099\u009a\u0003\u0002\u0002\u0002\u009a\u009b\u0007\u0010\u0002\u0002",
    "\u009b\u009c\u0007\u0012\u0002\u0002\u009c\u009d\u0007#\u0002\u0002",
    "\u009d\u009f\u0007\u0011\u0002\u0002\u009e\u00a0\u0007\u000b\u0002\u0002",
    "\u009f\u009e\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002",
    "\u00a0\u0011\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007\u0010\u0002\u0002",
    "\u00a2\u00a4\u0007#\u0002\u0002\u00a3\u00a5\u0005\u0014\u000b\u0002",
    "\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002",
    "\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007\u0012\u0002\u0002",
    "\u00a7\u00a9\u0007\u0011\u0002\u0002\u00a8\u00aa\u0007\u000b\u0002\u0002",
    "\u00a9\u00a8\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002",
    "\u00aa\u0013\u0003\u0002\u0002\u0002\u00ab\u00ad\u0007#\u0002\u0002",
    "\u00ac\u00ae\u0005\u0018\r\u0002\u00ad\u00ac\u0003\u0002\u0002\u0002",
    "\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00b0\u0003\u0002\u0002\u0002",
    "\u00af\u00b1\u0005\u0016\f\u0002\u00b0\u00af\u0003\u0002\u0002\u0002",
    "\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u0015\u0003\u0002\u0002\u0002",
    "\u00b2\u00b4\u0007#\u0002\u0002\u00b3\u00b5\u0005\u0018\r\u0002\u00b4",
    "\u00b3\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5",
    "\u0017\u0003\u0002\u0002\u0002\u00b6\u00bb\u0007\u0014\u0002\u0002\u00b7",
    "\u00b8\u0007\u0007\u0002\u0002\u00b8\u00b9\u0007#\u0002\u0002\u00b9",
    "\u00bc\u0007\b\u0002\u0002\u00ba\u00bc\u0005\u001a\u000e\u0002\u00bb",
    "\u00b7\u0003\u0002\u0002\u0002\u00bb\u00ba\u0003\u0002\u0002\u0002\u00bc",
    "\u0019\u0003\u0002\u0002\u0002\u00bd\u00be\t\u0002\u0002\u0002\u00be",
    "\u001b\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007\u0007\u0002\u0002\u00c0",
    "\u00c1\u0005 \u0011\u0002\u00c1\u00c2\u0007\b\u0002\u0002\u00c2\u00c5",
    "\u0003\u0002\u0002\u0002\u00c3\u00c5\u0007$\u0002\u0002\u00c4\u00bf",
    "\u0003\u0002\u0002\u0002\u00c4\u00c3\u0003\u0002\u0002\u0002\u00c5\u001d",
    "\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007#\u0002\u0002\u00c7\u00c8",
    "\u0007\u0018\u0002\u0002\u00c8\u00c9\u0007\u0019\u0002\u0002\u00c9\u00ca",
    "\u0007\u0014\u0002\u0002\u00ca\u00cc\u0007\u0007\u0002\u0002\u00cb\u00cd",
    "\u0007\u000b\u0002\u0002\u00cc\u00cb\u0003\u0002\u0002\u0002\u00cc\u00cd",
    "\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00cf",
    "\u0005\"\u0012\u0002\u00cf\u00d0\u0007\b\u0002\u0002\u00d0\u00d2\u0007",
    "\n\u0002\u0002\u00d1\u00d3\u0007\u000b\u0002\u0002\u00d2\u00d1\u0003",
    "\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3\u001f\u0003",
    "\u0002\u0002\u0002\u00d4\u00d5\u0007$\u0002\u0002\u00d5!\u0003\u0002",
    "\u0002\u0002\u00d6\u00d7\u0007#\u0002\u0002\u00d7\u00d8\u0007\u001b",
    "\u0002\u0002\u00d8\u00d9\u0007\u001a\u0002\u0002\u00d9\u00da\u0007\u0018",
    "\u0002\u0002\u00da\u00e1\u0005$\u0013\u0002\u00db\u00e2\u0007\u000b",
    "\u0002\u0002\u00dc\u00de\u0007\u0003\u0002\u0002\u00dd\u00df\u0007\u000b",
    "\u0002\u0002\u00de\u00dd\u0003\u0002\u0002\u0002\u00de\u00df\u0003\u0002",
    "\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e2\u0005\"",
    "\u0012\u0002\u00e1\u00db\u0003\u0002\u0002\u0002\u00e1\u00dc\u0003\u0002",
    "\u0002\u0002\u00e1\u00e2\u0003\u0002\u0002\u0002\u00e2#\u0003\u0002",
    "\u0002\u0002\u00e3\u00e4\t\u0003\u0002\u0002\u00e4%\u0003\u0002\u0002",
    "\u0002$)1;DJLRZdhmrvy\u0081\u0085\u0088\u008b\u008f\u0091\u0095\u0098",
    "\u009f\u00a4\u00a9\u00ad\u00b0\u00b4\u00bb\u00c4\u00cc\u00d2\u00de\u00e1"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "'''", "'\"'", "'import'", "'{'", "'}'", 
                     "'from'", "';'", "'\n'", "'function'", "'('", "')'", 
                     "'return'", "'<'", "'>'", "'/'", "'export'", "'='", 
                     "'null'", "'true'", "'false'", "'.'", "'propTypes'", 
                     "'PropTypes'", "':'", "'array'", "'bool'", "'func'", 
                     "'number'", "'object'", "'string'", "'symbol'" ];

var symbolicNames = [ null, "COMA", "COMILLA1", "COMILLA2", "IMPORT", "CORCHETE_IZQ", 
                      "CORCHETE_DER", "FROM", "PUNTO_COMA", "SALTO", "FUNCTION", 
                      "PAR_IZQ", "PAR_DER", "RETURN", "OPEN_TAG", "CLOSE_TAG", 
                      "SLASH", "EXPORT", "IGUAL", "NULL", "TRUE", "FALSE", 
                      "PUNTO", "PROPTYPES", "PROPTYPESCLASS", "DOS_PUNTOS", 
                      "ARRAY", "BOOL", "FUNC", "NUMBER", "OBJECT", "STRING_TYPE", 
                      "SYMBOL", "ID", "STRING", "INTEGER" ];

var ruleNames =  [ "program", "program_body", "import_statement", "id_list", 
                   "more_id", "functionR", "func_body", "html_elements", 
                   "html_short_element", "props", "more_props", "possible_assign", 
                   "literal", "value_html_tag", "adding_proptypes", "expr", 
                   "prop_types_body", "types_of_proptypes" ];

function ReactParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ReactParser.prototype = Object.create(antlr4.Parser.prototype);
ReactParser.prototype.constructor = ReactParser;

Object.defineProperty(ReactParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ReactParser.EOF = antlr4.Token.EOF;
ReactParser.COMA = 1;
ReactParser.COMILLA1 = 2;
ReactParser.COMILLA2 = 3;
ReactParser.IMPORT = 4;
ReactParser.CORCHETE_IZQ = 5;
ReactParser.CORCHETE_DER = 6;
ReactParser.FROM = 7;
ReactParser.PUNTO_COMA = 8;
ReactParser.SALTO = 9;
ReactParser.FUNCTION = 10;
ReactParser.PAR_IZQ = 11;
ReactParser.PAR_DER = 12;
ReactParser.RETURN = 13;
ReactParser.OPEN_TAG = 14;
ReactParser.CLOSE_TAG = 15;
ReactParser.SLASH = 16;
ReactParser.EXPORT = 17;
ReactParser.IGUAL = 18;
ReactParser.NULL = 19;
ReactParser.TRUE = 20;
ReactParser.FALSE = 21;
ReactParser.PUNTO = 22;
ReactParser.PROPTYPES = 23;
ReactParser.PROPTYPESCLASS = 24;
ReactParser.DOS_PUNTOS = 25;
ReactParser.ARRAY = 26;
ReactParser.BOOL = 27;
ReactParser.FUNC = 28;
ReactParser.NUMBER = 29;
ReactParser.OBJECT = 30;
ReactParser.STRING_TYPE = 31;
ReactParser.SYMBOL = 32;
ReactParser.ID = 33;
ReactParser.STRING = 34;
ReactParser.INTEGER = 35;

ReactParser.RULE_program = 0;
ReactParser.RULE_program_body = 1;
ReactParser.RULE_import_statement = 2;
ReactParser.RULE_id_list = 3;
ReactParser.RULE_more_id = 4;
ReactParser.RULE_functionR = 5;
ReactParser.RULE_func_body = 6;
ReactParser.RULE_html_elements = 7;
ReactParser.RULE_html_short_element = 8;
ReactParser.RULE_props = 9;
ReactParser.RULE_more_props = 10;
ReactParser.RULE_possible_assign = 11;
ReactParser.RULE_literal = 12;
ReactParser.RULE_value_html_tag = 13;
ReactParser.RULE_adding_proptypes = 14;
ReactParser.RULE_expr = 15;
ReactParser.RULE_prop_types_body = 16;
ReactParser.RULE_types_of_proptypes = 17;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(ReactParser.EOF, 0);
};

ProgramContext.prototype.program_body = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Program_bodyContext);
    } else {
        return this.getTypedRuleContext(Program_bodyContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitProgram(this);
	}
};




ReactParser.ProgramContext = ProgramContext;

ReactParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ReactParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (ReactParser.IMPORT - 4)) | (1 << (ReactParser.FUNCTION - 4)) | (1 << (ReactParser.ID - 4)))) !== 0)) {
            this.state = 36;
            this.program_body();
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 42;
        this.match(ReactParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Program_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_program_body;
    return this;
}

Program_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Program_bodyContext.prototype.constructor = Program_bodyContext;

Program_bodyContext.prototype.import_statement = function() {
    return this.getTypedRuleContext(Import_statementContext,0);
};

Program_bodyContext.prototype.functionR = function() {
    return this.getTypedRuleContext(FunctionRContext,0);
};

Program_bodyContext.prototype.adding_proptypes = function() {
    return this.getTypedRuleContext(Adding_proptypesContext,0);
};

Program_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterProgram_body(this);
	}
};

Program_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitProgram_body(this);
	}
};




ReactParser.Program_bodyContext = Program_bodyContext;

ReactParser.prototype.program_body = function() {

    var localctx = new Program_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ReactParser.RULE_program_body);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactParser.IMPORT:
            this.state = 44;
            this.import_statement();
            break;
        case ReactParser.FUNCTION:
            this.state = 45;
            this.functionR();
            break;
        case ReactParser.ID:
            this.state = 46;
            this.adding_proptypes();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Import_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_import_statement;
    return this;
}

Import_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Import_statementContext.prototype.constructor = Import_statementContext;


 
Import_statementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function Id_importContext(parser, ctx) {
	Import_statementContext.call(this, parser);
    Import_statementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Id_importContext.prototype = Object.create(Import_statementContext.prototype);
Id_importContext.prototype.constructor = Id_importContext;

ReactParser.Id_importContext = Id_importContext;

Id_importContext.prototype.IMPORT = function() {
    return this.getToken(ReactParser.IMPORT, 0);
};

Id_importContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

Id_importContext.prototype.FROM = function() {
    return this.getToken(ReactParser.FROM, 0);
};

Id_importContext.prototype.STRING = function() {
    return this.getToken(ReactParser.STRING, 0);
};

Id_importContext.prototype.PUNTO_COMA = function() {
    return this.getToken(ReactParser.PUNTO_COMA, 0);
};

Id_importContext.prototype.COMA = function() {
    return this.getToken(ReactParser.COMA, 0);
};

Id_importContext.prototype.CORCHETE_IZQ = function() {
    return this.getToken(ReactParser.CORCHETE_IZQ, 0);
};

Id_importContext.prototype.id_list = function() {
    return this.getTypedRuleContext(Id_listContext,0);
};

Id_importContext.prototype.CORCHETE_DER = function() {
    return this.getToken(ReactParser.CORCHETE_DER, 0);
};

Id_importContext.prototype.SALTO = function() {
    return this.getToken(ReactParser.SALTO, 0);
};
Id_importContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterId_import(this);
	}
};

Id_importContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitId_import(this);
	}
};


function No_id_importContext(parser, ctx) {
	Import_statementContext.call(this, parser);
    Import_statementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

No_id_importContext.prototype = Object.create(Import_statementContext.prototype);
No_id_importContext.prototype.constructor = No_id_importContext;

ReactParser.No_id_importContext = No_id_importContext;

No_id_importContext.prototype.IMPORT = function() {
    return this.getToken(ReactParser.IMPORT, 0);
};

No_id_importContext.prototype.CORCHETE_IZQ = function() {
    return this.getToken(ReactParser.CORCHETE_IZQ, 0);
};

No_id_importContext.prototype.id_list = function() {
    return this.getTypedRuleContext(Id_listContext,0);
};

No_id_importContext.prototype.CORCHETE_DER = function() {
    return this.getToken(ReactParser.CORCHETE_DER, 0);
};

No_id_importContext.prototype.FROM = function() {
    return this.getToken(ReactParser.FROM, 0);
};

No_id_importContext.prototype.STRING = function() {
    return this.getToken(ReactParser.STRING, 0);
};

No_id_importContext.prototype.PUNTO_COMA = function() {
    return this.getToken(ReactParser.PUNTO_COMA, 0);
};

No_id_importContext.prototype.SALTO = function() {
    return this.getToken(ReactParser.SALTO, 0);
};
No_id_importContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterNo_id_import(this);
	}
};

No_id_importContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitNo_id_import(this);
	}
};



ReactParser.Import_statementContext = Import_statementContext;

ReactParser.prototype.import_statement = function() {

    var localctx = new Import_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ReactParser.RULE_import_statement);
    var _la = 0; // Token type
    try {
        this.state = 74;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            localctx = new No_id_importContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 49;
            this.match(ReactParser.IMPORT);
            this.state = 50;
            this.match(ReactParser.CORCHETE_IZQ);
            this.state = 51;
            this.id_list();
            this.state = 52;
            this.match(ReactParser.CORCHETE_DER);
            this.state = 53;
            this.match(ReactParser.FROM);
            this.state = 54;
            this.match(ReactParser.STRING);
            this.state = 55;
            this.match(ReactParser.PUNTO_COMA);
            this.state = 57;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.SALTO) {
                this.state = 56;
                this.match(ReactParser.SALTO);
            }

            break;

        case 2:
            localctx = new Id_importContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 59;
            this.match(ReactParser.IMPORT);
            this.state = 60;
            this.match(ReactParser.ID);
            this.state = 66;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.COMA) {
                this.state = 61;
                this.match(ReactParser.COMA);
                this.state = 62;
                this.match(ReactParser.CORCHETE_IZQ);
                this.state = 63;
                this.id_list();
                this.state = 64;
                this.match(ReactParser.CORCHETE_DER);
            }

            this.state = 68;
            this.match(ReactParser.FROM);
            this.state = 69;
            this.match(ReactParser.STRING);
            this.state = 70;
            this.match(ReactParser.PUNTO_COMA);
            this.state = 72;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ReactParser.SALTO) {
                this.state = 71;
                this.match(ReactParser.SALTO);
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Id_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_id_list;
    return this;
}

Id_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Id_listContext.prototype.constructor = Id_listContext;

Id_listContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

Id_listContext.prototype.more_id = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(More_idContext);
    } else {
        return this.getTypedRuleContext(More_idContext,i);
    }
};

Id_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterId_list(this);
	}
};

Id_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitId_list(this);
	}
};




ReactParser.Id_listContext = Id_listContext;

ReactParser.prototype.id_list = function() {

    var localctx = new Id_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ReactParser.RULE_id_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.match(ReactParser.ID);
        this.state = 80;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ReactParser.COMA) {
            this.state = 77;
            this.more_id();
            this.state = 82;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function More_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_more_id;
    return this;
}

More_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
More_idContext.prototype.constructor = More_idContext;

More_idContext.prototype.COMA = function() {
    return this.getToken(ReactParser.COMA, 0);
};

More_idContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

More_idContext.prototype.more_id = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(More_idContext);
    } else {
        return this.getTypedRuleContext(More_idContext,i);
    }
};

More_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterMore_id(this);
	}
};

More_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitMore_id(this);
	}
};




ReactParser.More_idContext = More_idContext;

ReactParser.prototype.more_id = function() {

    var localctx = new More_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ReactParser.RULE_more_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.match(ReactParser.COMA);
        this.state = 84;
        this.match(ReactParser.ID);
        this.state = 88;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 85;
                this.more_id(); 
            }
            this.state = 90;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunctionRContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_functionR;
    return this;
}

FunctionRContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionRContext.prototype.constructor = FunctionRContext;

FunctionRContext.prototype.FUNCTION = function() {
    return this.getToken(ReactParser.FUNCTION, 0);
};

FunctionRContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

FunctionRContext.prototype.PAR_IZQ = function() {
    return this.getToken(ReactParser.PAR_IZQ, 0);
};

FunctionRContext.prototype.id_list = function() {
    return this.getTypedRuleContext(Id_listContext,0);
};

FunctionRContext.prototype.PAR_DER = function() {
    return this.getToken(ReactParser.PAR_DER, 0);
};

FunctionRContext.prototype.CORCHETE_IZQ = function() {
    return this.getToken(ReactParser.CORCHETE_IZQ, 0);
};

FunctionRContext.prototype.func_body = function() {
    return this.getTypedRuleContext(Func_bodyContext,0);
};

FunctionRContext.prototype.CORCHETE_DER = function() {
    return this.getToken(ReactParser.CORCHETE_DER, 0);
};

FunctionRContext.prototype.PUNTO_COMA = function() {
    return this.getToken(ReactParser.PUNTO_COMA, 0);
};

FunctionRContext.prototype.SALTO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.SALTO);
    } else {
        return this.getToken(ReactParser.SALTO, i);
    }
};


FunctionRContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterFunctionR(this);
	}
};

FunctionRContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitFunctionR(this);
	}
};




ReactParser.FunctionRContext = FunctionRContext;

ReactParser.prototype.functionR = function() {

    var localctx = new FunctionRContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ReactParser.RULE_functionR);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.match(ReactParser.FUNCTION);
        this.state = 92;
        this.match(ReactParser.ID);
        this.state = 93;
        this.match(ReactParser.PAR_IZQ);
        this.state = 94;
        this.id_list();
        this.state = 95;
        this.match(ReactParser.PAR_DER);
        this.state = 96;
        this.match(ReactParser.CORCHETE_IZQ);
        this.state = 98;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 97;
            this.match(ReactParser.SALTO);
        }

        this.state = 100;
        this.func_body();
        this.state = 102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 101;
            this.match(ReactParser.SALTO);
        }

        this.state = 104;
        this.match(ReactParser.CORCHETE_DER);
        this.state = 105;
        this.match(ReactParser.PUNTO_COMA);
        this.state = 107;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 106;
            this.match(ReactParser.SALTO);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Func_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_func_body;
    return this;
}

Func_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_bodyContext.prototype.constructor = Func_bodyContext;

Func_bodyContext.prototype.RETURN = function() {
    return this.getToken(ReactParser.RETURN, 0);
};

Func_bodyContext.prototype.PAR_IZQ = function() {
    return this.getToken(ReactParser.PAR_IZQ, 0);
};

Func_bodyContext.prototype.PAR_DER = function() {
    return this.getToken(ReactParser.PAR_DER, 0);
};

Func_bodyContext.prototype.PUNTO_COMA = function() {
    return this.getToken(ReactParser.PUNTO_COMA, 0);
};

Func_bodyContext.prototype.html_elements = function() {
    return this.getTypedRuleContext(Html_elementsContext,0);
};

Func_bodyContext.prototype.html_short_element = function() {
    return this.getTypedRuleContext(Html_short_elementContext,0);
};

Func_bodyContext.prototype.SALTO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.SALTO);
    } else {
        return this.getToken(ReactParser.SALTO, i);
    }
};


Func_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterFunc_body(this);
	}
};

Func_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitFunc_body(this);
	}
};




ReactParser.Func_bodyContext = Func_bodyContext;

ReactParser.prototype.func_body = function() {

    var localctx = new Func_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ReactParser.RULE_func_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.match(ReactParser.RETURN);
        this.state = 110;
        this.match(ReactParser.PAR_IZQ);
        this.state = 112;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 111;
            this.match(ReactParser.SALTO);
        }

        this.state = 116;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.state = 114;
            this.html_elements();
            break;

        case 2:
            this.state = 115;
            this.html_short_element();
            break;

        }
        this.state = 119;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 118;
            this.match(ReactParser.SALTO);
        }

        this.state = 121;
        this.match(ReactParser.PAR_DER);
        this.state = 122;
        this.match(ReactParser.PUNTO_COMA);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Html_elementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_html_elements;
    return this;
}

Html_elementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Html_elementsContext.prototype.constructor = Html_elementsContext;

Html_elementsContext.prototype.OPEN_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.OPEN_TAG);
    } else {
        return this.getToken(ReactParser.OPEN_TAG, i);
    }
};


Html_elementsContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.ID);
    } else {
        return this.getToken(ReactParser.ID, i);
    }
};


Html_elementsContext.prototype.CLOSE_TAG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.CLOSE_TAG);
    } else {
        return this.getToken(ReactParser.CLOSE_TAG, i);
    }
};


Html_elementsContext.prototype.SLASH = function() {
    return this.getToken(ReactParser.SLASH, 0);
};

Html_elementsContext.prototype.props = function() {
    return this.getTypedRuleContext(PropsContext,0);
};

Html_elementsContext.prototype.SALTO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.SALTO);
    } else {
        return this.getToken(ReactParser.SALTO, i);
    }
};


Html_elementsContext.prototype.value_html_tag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Value_html_tagContext);
    } else {
        return this.getTypedRuleContext(Value_html_tagContext,i);
    }
};

Html_elementsContext.prototype.html_elements = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Html_elementsContext);
    } else {
        return this.getTypedRuleContext(Html_elementsContext,i);
    }
};

Html_elementsContext.prototype.html_short_element = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Html_short_elementContext);
    } else {
        return this.getTypedRuleContext(Html_short_elementContext,i);
    }
};

Html_elementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterHtml_elements(this);
	}
};

Html_elementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitHtml_elements(this);
	}
};




ReactParser.Html_elementsContext = Html_elementsContext;

ReactParser.prototype.html_elements = function() {

    var localctx = new Html_elementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ReactParser.RULE_html_elements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.match(ReactParser.OPEN_TAG);
        this.state = 125;
        this.match(ReactParser.ID);
        this.state = 127;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.ID) {
            this.state = 126;
            this.props();
        }

        this.state = 129;
        this.match(ReactParser.CLOSE_TAG);
        this.state = 131;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 130;
            this.match(ReactParser.SALTO);

        }
        this.state = 134;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 133;
            this.value_html_tag();

        }
        this.state = 137;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        if(la_===1) {
            this.state = 136;
            this.match(ReactParser.SALTO);

        }
        this.state = 143;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 141;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 139;
                    this.html_elements();
                    break;

                case 2:
                    this.state = 140;
                    this.html_short_element();
                    break;

                } 
            }
            this.state = 145;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
        }

        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.CORCHETE_IZQ || _la===ReactParser.STRING) {
            this.state = 146;
            this.value_html_tag();
        }

        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 149;
            this.match(ReactParser.SALTO);
        }

        this.state = 152;
        this.match(ReactParser.OPEN_TAG);
        this.state = 153;
        this.match(ReactParser.SLASH);
        this.state = 154;
        this.match(ReactParser.ID);
        this.state = 155;
        this.match(ReactParser.CLOSE_TAG);
        this.state = 157;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        if(la_===1) {
            this.state = 156;
            this.match(ReactParser.SALTO);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Html_short_elementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_html_short_element;
    return this;
}

Html_short_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Html_short_elementContext.prototype.constructor = Html_short_elementContext;

Html_short_elementContext.prototype.OPEN_TAG = function() {
    return this.getToken(ReactParser.OPEN_TAG, 0);
};

Html_short_elementContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

Html_short_elementContext.prototype.SLASH = function() {
    return this.getToken(ReactParser.SLASH, 0);
};

Html_short_elementContext.prototype.CLOSE_TAG = function() {
    return this.getToken(ReactParser.CLOSE_TAG, 0);
};

Html_short_elementContext.prototype.props = function() {
    return this.getTypedRuleContext(PropsContext,0);
};

Html_short_elementContext.prototype.SALTO = function() {
    return this.getToken(ReactParser.SALTO, 0);
};

Html_short_elementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterHtml_short_element(this);
	}
};

Html_short_elementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitHtml_short_element(this);
	}
};




ReactParser.Html_short_elementContext = Html_short_elementContext;

ReactParser.prototype.html_short_element = function() {

    var localctx = new Html_short_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ReactParser.RULE_html_short_element);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(ReactParser.OPEN_TAG);
        this.state = 160;
        this.match(ReactParser.ID);
        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.ID) {
            this.state = 161;
            this.props();
        }

        this.state = 164;
        this.match(ReactParser.SLASH);
        this.state = 165;
        this.match(ReactParser.CLOSE_TAG);
        this.state = 167;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        if(la_===1) {
            this.state = 166;
            this.match(ReactParser.SALTO);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PropsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_props;
    return this;
}

PropsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropsContext.prototype.constructor = PropsContext;

PropsContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

PropsContext.prototype.possible_assign = function() {
    return this.getTypedRuleContext(Possible_assignContext,0);
};

PropsContext.prototype.more_props = function() {
    return this.getTypedRuleContext(More_propsContext,0);
};

PropsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterProps(this);
	}
};

PropsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitProps(this);
	}
};




ReactParser.PropsContext = PropsContext;

ReactParser.prototype.props = function() {

    var localctx = new PropsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ReactParser.RULE_props);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.match(ReactParser.ID);
        this.state = 171;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.IGUAL) {
            this.state = 170;
            this.possible_assign();
        }

        this.state = 174;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.ID) {
            this.state = 173;
            this.more_props();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function More_propsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_more_props;
    return this;
}

More_propsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
More_propsContext.prototype.constructor = More_propsContext;

More_propsContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

More_propsContext.prototype.possible_assign = function() {
    return this.getTypedRuleContext(Possible_assignContext,0);
};

More_propsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterMore_props(this);
	}
};

More_propsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitMore_props(this);
	}
};




ReactParser.More_propsContext = More_propsContext;

ReactParser.prototype.more_props = function() {

    var localctx = new More_propsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ReactParser.RULE_more_props);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.match(ReactParser.ID);
        this.state = 178;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.IGUAL) {
            this.state = 177;
            this.possible_assign();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Possible_assignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_possible_assign;
    return this;
}

Possible_assignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Possible_assignContext.prototype.constructor = Possible_assignContext;

Possible_assignContext.prototype.IGUAL = function() {
    return this.getToken(ReactParser.IGUAL, 0);
};

Possible_assignContext.prototype.CORCHETE_IZQ = function() {
    return this.getToken(ReactParser.CORCHETE_IZQ, 0);
};

Possible_assignContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

Possible_assignContext.prototype.CORCHETE_DER = function() {
    return this.getToken(ReactParser.CORCHETE_DER, 0);
};

Possible_assignContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

Possible_assignContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterPossible_assign(this);
	}
};

Possible_assignContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitPossible_assign(this);
	}
};




ReactParser.Possible_assignContext = Possible_assignContext;

ReactParser.prototype.possible_assign = function() {

    var localctx = new Possible_assignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ReactParser.RULE_possible_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this.match(ReactParser.IGUAL);
        this.state = 185;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactParser.CORCHETE_IZQ:
            this.state = 181;
            this.match(ReactParser.CORCHETE_IZQ);
            this.state = 182;
            this.match(ReactParser.ID);
            this.state = 183;
            this.match(ReactParser.CORCHETE_DER);
            break;
        case ReactParser.NULL:
        case ReactParser.TRUE:
        case ReactParser.FALSE:
        case ReactParser.STRING:
        case ReactParser.INTEGER:
            this.state = 184;
            this.literal();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.STRING = function() {
    return this.getToken(ReactParser.STRING, 0);
};

LiteralContext.prototype.NULL = function() {
    return this.getToken(ReactParser.NULL, 0);
};

LiteralContext.prototype.TRUE = function() {
    return this.getToken(ReactParser.TRUE, 0);
};

LiteralContext.prototype.FALSE = function() {
    return this.getToken(ReactParser.FALSE, 0);
};

LiteralContext.prototype.INTEGER = function() {
    return this.getToken(ReactParser.INTEGER, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitLiteral(this);
	}
};




ReactParser.LiteralContext = LiteralContext;

ReactParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ReactParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        _la = this._input.LA(1);
        if(!(((((_la - 19)) & ~0x1f) == 0 && ((1 << (_la - 19)) & ((1 << (ReactParser.NULL - 19)) | (1 << (ReactParser.TRUE - 19)) | (1 << (ReactParser.FALSE - 19)) | (1 << (ReactParser.STRING - 19)) | (1 << (ReactParser.INTEGER - 19)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Value_html_tagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_value_html_tag;
    return this;
}

Value_html_tagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Value_html_tagContext.prototype.constructor = Value_html_tagContext;

Value_html_tagContext.prototype.CORCHETE_IZQ = function() {
    return this.getToken(ReactParser.CORCHETE_IZQ, 0);
};

Value_html_tagContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Value_html_tagContext.prototype.CORCHETE_DER = function() {
    return this.getToken(ReactParser.CORCHETE_DER, 0);
};

Value_html_tagContext.prototype.STRING = function() {
    return this.getToken(ReactParser.STRING, 0);
};

Value_html_tagContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterValue_html_tag(this);
	}
};

Value_html_tagContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitValue_html_tag(this);
	}
};




ReactParser.Value_html_tagContext = Value_html_tagContext;

ReactParser.prototype.value_html_tag = function() {

    var localctx = new Value_html_tagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ReactParser.RULE_value_html_tag);
    try {
        this.state = 194;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ReactParser.CORCHETE_IZQ:
            this.enterOuterAlt(localctx, 1);
            this.state = 189;
            this.match(ReactParser.CORCHETE_IZQ);
            this.state = 190;
            this.expr();
            this.state = 191;
            this.match(ReactParser.CORCHETE_DER);
            break;
        case ReactParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 193;
            this.match(ReactParser.STRING);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Adding_proptypesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_adding_proptypes;
    return this;
}

Adding_proptypesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Adding_proptypesContext.prototype.constructor = Adding_proptypesContext;

Adding_proptypesContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

Adding_proptypesContext.prototype.PUNTO = function() {
    return this.getToken(ReactParser.PUNTO, 0);
};

Adding_proptypesContext.prototype.PROPTYPES = function() {
    return this.getToken(ReactParser.PROPTYPES, 0);
};

Adding_proptypesContext.prototype.IGUAL = function() {
    return this.getToken(ReactParser.IGUAL, 0);
};

Adding_proptypesContext.prototype.CORCHETE_IZQ = function() {
    return this.getToken(ReactParser.CORCHETE_IZQ, 0);
};

Adding_proptypesContext.prototype.prop_types_body = function() {
    return this.getTypedRuleContext(Prop_types_bodyContext,0);
};

Adding_proptypesContext.prototype.CORCHETE_DER = function() {
    return this.getToken(ReactParser.CORCHETE_DER, 0);
};

Adding_proptypesContext.prototype.PUNTO_COMA = function() {
    return this.getToken(ReactParser.PUNTO_COMA, 0);
};

Adding_proptypesContext.prototype.SALTO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ReactParser.SALTO);
    } else {
        return this.getToken(ReactParser.SALTO, i);
    }
};


Adding_proptypesContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterAdding_proptypes(this);
	}
};

Adding_proptypesContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitAdding_proptypes(this);
	}
};




ReactParser.Adding_proptypesContext = Adding_proptypesContext;

ReactParser.prototype.adding_proptypes = function() {

    var localctx = new Adding_proptypesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ReactParser.RULE_adding_proptypes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this.match(ReactParser.ID);
        this.state = 197;
        this.match(ReactParser.PUNTO);
        this.state = 198;
        this.match(ReactParser.PROPTYPES);
        this.state = 199;
        this.match(ReactParser.IGUAL);
        this.state = 200;
        this.match(ReactParser.CORCHETE_IZQ);
        this.state = 202;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 201;
            this.match(ReactParser.SALTO);
        }

        this.state = 204;
        this.prop_types_body();
        this.state = 205;
        this.match(ReactParser.CORCHETE_DER);
        this.state = 206;
        this.match(ReactParser.PUNTO_COMA);
        this.state = 208;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ReactParser.SALTO) {
            this.state = 207;
            this.match(ReactParser.SALTO);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.STRING = function() {
    return this.getToken(ReactParser.STRING, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitExpr(this);
	}
};




ReactParser.ExprContext = ExprContext;

ReactParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ReactParser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.match(ReactParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Prop_types_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_prop_types_body;
    return this;
}

Prop_types_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Prop_types_bodyContext.prototype.constructor = Prop_types_bodyContext;

Prop_types_bodyContext.prototype.ID = function() {
    return this.getToken(ReactParser.ID, 0);
};

Prop_types_bodyContext.prototype.DOS_PUNTOS = function() {
    return this.getToken(ReactParser.DOS_PUNTOS, 0);
};

Prop_types_bodyContext.prototype.PROPTYPESCLASS = function() {
    return this.getToken(ReactParser.PROPTYPESCLASS, 0);
};

Prop_types_bodyContext.prototype.PUNTO = function() {
    return this.getToken(ReactParser.PUNTO, 0);
};

Prop_types_bodyContext.prototype.types_of_proptypes = function() {
    return this.getTypedRuleContext(Types_of_proptypesContext,0);
};

Prop_types_bodyContext.prototype.SALTO = function() {
    return this.getToken(ReactParser.SALTO, 0);
};

Prop_types_bodyContext.prototype.COMA = function() {
    return this.getToken(ReactParser.COMA, 0);
};

Prop_types_bodyContext.prototype.prop_types_body = function() {
    return this.getTypedRuleContext(Prop_types_bodyContext,0);
};

Prop_types_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterProp_types_body(this);
	}
};

Prop_types_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitProp_types_body(this);
	}
};




ReactParser.Prop_types_bodyContext = Prop_types_bodyContext;

ReactParser.prototype.prop_types_body = function() {

    var localctx = new Prop_types_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ReactParser.RULE_prop_types_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this.match(ReactParser.ID);
        this.state = 213;
        this.match(ReactParser.DOS_PUNTOS);
        this.state = 214;
        this.match(ReactParser.PROPTYPESCLASS);
        this.state = 215;
        this.match(ReactParser.PUNTO);
        this.state = 216;
        this.types_of_proptypes();
        this.state = 223;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case ReactParser.SALTO:
        	this.state = 217;
        	this.match(ReactParser.SALTO);
        	break;
        case ReactParser.COMA:
        	this.state = 218;
        	this.match(ReactParser.COMA);
        	this.state = 220;
        	this._errHandler.sync(this);
        	_la = this._input.LA(1);
        	if(_la===ReactParser.SALTO) {
        	    this.state = 219;
        	    this.match(ReactParser.SALTO);
        	}

        	this.state = 222;
        	this.prop_types_body();
        	break;
        case ReactParser.CORCHETE_DER:
        	break;
        default:
        	break;
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Types_of_proptypesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ReactParser.RULE_types_of_proptypes;
    return this;
}

Types_of_proptypesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Types_of_proptypesContext.prototype.constructor = Types_of_proptypesContext;

Types_of_proptypesContext.prototype.ARRAY = function() {
    return this.getToken(ReactParser.ARRAY, 0);
};

Types_of_proptypesContext.prototype.BOOL = function() {
    return this.getToken(ReactParser.BOOL, 0);
};

Types_of_proptypesContext.prototype.FUNC = function() {
    return this.getToken(ReactParser.FUNC, 0);
};

Types_of_proptypesContext.prototype.NUMBER = function() {
    return this.getToken(ReactParser.NUMBER, 0);
};

Types_of_proptypesContext.prototype.OBJECT = function() {
    return this.getToken(ReactParser.OBJECT, 0);
};

Types_of_proptypesContext.prototype.STRING_TYPE = function() {
    return this.getToken(ReactParser.STRING_TYPE, 0);
};

Types_of_proptypesContext.prototype.SYMBOL = function() {
    return this.getToken(ReactParser.SYMBOL, 0);
};

Types_of_proptypesContext.prototype.enterRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.enterTypes_of_proptypes(this);
	}
};

Types_of_proptypesContext.prototype.exitRule = function(listener) {
    if(listener instanceof ReactListener ) {
        listener.exitTypes_of_proptypes(this);
	}
};




ReactParser.Types_of_proptypesContext = Types_of_proptypesContext;

ReactParser.prototype.types_of_proptypes = function() {

    var localctx = new Types_of_proptypesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ReactParser.RULE_types_of_proptypes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        _la = this._input.LA(1);
        if(!(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (ReactParser.ARRAY - 26)) | (1 << (ReactParser.BOOL - 26)) | (1 << (ReactParser.FUNC - 26)) | (1 << (ReactParser.NUMBER - 26)) | (1 << (ReactParser.OBJECT - 26)) | (1 << (ReactParser.STRING_TYPE - 26)) | (1 << (ReactParser.SYMBOL - 26)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ReactParser = ReactParser;
