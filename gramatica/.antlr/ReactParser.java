// Generated from d:\Windows\Escritorio\UNAL\Lenguajes\Proyecto\gramatica\React.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ReactParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		COMA=1, COMILLA1=2, COMILLA2=3, IMPORT=4, CORCHETE_IZQ=5, CORCHETE_DER=6, 
		FROM=7, PUNTO_COMA=8, SALTO=9, FUNCTION=10, PAR_IZQ=11, PAR_DER=12, RETURN=13, 
		OPEN_TAG=14, CLOSE_TAG=15, SLASH=16, EXPORT=17, IGUAL=18, NULL=19, TRUE=20, 
		FALSE=21, PUNTO=22, PROPTYPES=23, PROPTYPESCLASS=24, DOS_PUNTOS=25, ARRAY=26, 
		BOOL=27, FUNC=28, NUMBER=29, OBJECT=30, STRING_TYPE=31, SYMBOL=32, ID=33, 
		STRING=34, INTEGER=35;
	public static final int
		RULE_program = 0, RULE_program_body = 1, RULE_import_statement = 2, RULE_id_list = 3, 
		RULE_more_id = 4, RULE_functionR = 5, RULE_func_body = 6, RULE_html_elements = 7, 
		RULE_props = 8, RULE_more_props = 9, RULE_possible_assign = 10, RULE_literal = 11, 
		RULE_value_html_tag = 12, RULE_adding_proptypes = 13, RULE_expr = 14, 
		RULE_prop_types_body = 15, RULE_types_of_proptypes = 16;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "program_body", "import_statement", "id_list", "more_id", 
			"functionR", "func_body", "html_elements", "props", "more_props", "possible_assign", 
			"literal", "value_html_tag", "adding_proptypes", "expr", "prop_types_body", 
			"types_of_proptypes"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "','", "'''", "'\"'", "'import'", "'{'", "'}'", "'from'", "';'", 
			"'\n'", "'function'", "'('", "')'", "'return'", "'<'", "'>'", "'/'", 
			"'export'", "'='", "'null'", "'true'", "'false'", "'.'", "'propTypes'", 
			"'PropTypes'", "':'", "'array'", "'bool'", "'func'", "'number'", "'object'", 
			"'string'", "'symbol'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "COMA", "COMILLA1", "COMILLA2", "IMPORT", "CORCHETE_IZQ", "CORCHETE_DER", 
			"FROM", "PUNTO_COMA", "SALTO", "FUNCTION", "PAR_IZQ", "PAR_DER", "RETURN", 
			"OPEN_TAG", "CLOSE_TAG", "SLASH", "EXPORT", "IGUAL", "NULL", "TRUE", 
			"FALSE", "PUNTO", "PROPTYPES", "PROPTYPESCLASS", "DOS_PUNTOS", "ARRAY", 
			"BOOL", "FUNC", "NUMBER", "OBJECT", "STRING_TYPE", "SYMBOL", "ID", "STRING", 
			"INTEGER"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "React.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ReactParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(ReactParser.EOF, 0); }
		public List<Program_bodyContext> program_body() {
			return getRuleContexts(Program_bodyContext.class);
		}
		public Program_bodyContext program_body(int i) {
			return getRuleContext(Program_bodyContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << IMPORT) | (1L << FUNCTION) | (1L << ID))) != 0)) {
				{
				{
				setState(34);
				program_body();
				}
				}
				setState(39);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(40);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Program_bodyContext extends ParserRuleContext {
		public Import_statementContext import_statement() {
			return getRuleContext(Import_statementContext.class,0);
		}
		public FunctionRContext functionR() {
			return getRuleContext(FunctionRContext.class,0);
		}
		public Adding_proptypesContext adding_proptypes() {
			return getRuleContext(Adding_proptypesContext.class,0);
		}
		public Program_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program_body; }
	}

	public final Program_bodyContext program_body() throws RecognitionException {
		Program_bodyContext _localctx = new Program_bodyContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_program_body);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IMPORT:
				{
				setState(42);
				import_statement();
				}
				break;
			case FUNCTION:
				{
				setState(43);
				functionR();
				}
				break;
			case ID:
				{
				setState(44);
				adding_proptypes();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Import_statementContext extends ParserRuleContext {
		public Import_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_import_statement; }
	 
		public Import_statementContext() { }
		public void copyFrom(Import_statementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class Id_importContext extends Import_statementContext {
		public TerminalNode IMPORT() { return getToken(ReactParser.IMPORT, 0); }
		public TerminalNode ID() { return getToken(ReactParser.ID, 0); }
		public TerminalNode FROM() { return getToken(ReactParser.FROM, 0); }
		public TerminalNode STRING() { return getToken(ReactParser.STRING, 0); }
		public TerminalNode PUNTO_COMA() { return getToken(ReactParser.PUNTO_COMA, 0); }
		public TerminalNode COMA() { return getToken(ReactParser.COMA, 0); }
		public TerminalNode CORCHETE_IZQ() { return getToken(ReactParser.CORCHETE_IZQ, 0); }
		public Id_listContext id_list() {
			return getRuleContext(Id_listContext.class,0);
		}
		public TerminalNode CORCHETE_DER() { return getToken(ReactParser.CORCHETE_DER, 0); }
		public TerminalNode SALTO() { return getToken(ReactParser.SALTO, 0); }
		public Id_importContext(Import_statementContext ctx) { copyFrom(ctx); }
	}
	public static class No_id_importContext extends Import_statementContext {
		public TerminalNode IMPORT() { return getToken(ReactParser.IMPORT, 0); }
		public TerminalNode CORCHETE_IZQ() { return getToken(ReactParser.CORCHETE_IZQ, 0); }
		public Id_listContext id_list() {
			return getRuleContext(Id_listContext.class,0);
		}
		public TerminalNode CORCHETE_DER() { return getToken(ReactParser.CORCHETE_DER, 0); }
		public TerminalNode FROM() { return getToken(ReactParser.FROM, 0); }
		public TerminalNode STRING() { return getToken(ReactParser.STRING, 0); }
		public TerminalNode PUNTO_COMA() { return getToken(ReactParser.PUNTO_COMA, 0); }
		public TerminalNode SALTO() { return getToken(ReactParser.SALTO, 0); }
		public No_id_importContext(Import_statementContext ctx) { copyFrom(ctx); }
	}

	public final Import_statementContext import_statement() throws RecognitionException {
		Import_statementContext _localctx = new Import_statementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_import_statement);
		int _la;
		try {
			setState(72);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				_localctx = new No_id_importContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(47);
				match(IMPORT);
				setState(48);
				match(CORCHETE_IZQ);
				setState(49);
				id_list();
				setState(50);
				match(CORCHETE_DER);
				setState(51);
				match(FROM);
				setState(52);
				match(STRING);
				setState(53);
				match(PUNTO_COMA);
				setState(55);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SALTO) {
					{
					setState(54);
					match(SALTO);
					}
				}

				}
				break;
			case 2:
				_localctx = new Id_importContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(57);
				match(IMPORT);
				setState(58);
				match(ID);
				setState(64);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMA) {
					{
					setState(59);
					match(COMA);
					setState(60);
					match(CORCHETE_IZQ);
					setState(61);
					id_list();
					setState(62);
					match(CORCHETE_DER);
					}
				}

				setState(66);
				match(FROM);
				setState(67);
				match(STRING);
				setState(68);
				match(PUNTO_COMA);
				setState(70);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SALTO) {
					{
					setState(69);
					match(SALTO);
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Id_listContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ReactParser.ID, 0); }
		public List<More_idContext> more_id() {
			return getRuleContexts(More_idContext.class);
		}
		public More_idContext more_id(int i) {
			return getRuleContext(More_idContext.class,i);
		}
		public Id_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_id_list; }
	}

	public final Id_listContext id_list() throws RecognitionException {
		Id_listContext _localctx = new Id_listContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_id_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			match(ID);
			setState(78);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMA) {
				{
				{
				setState(75);
				more_id();
				}
				}
				setState(80);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class More_idContext extends ParserRuleContext {
		public TerminalNode COMA() { return getToken(ReactParser.COMA, 0); }
		public TerminalNode ID() { return getToken(ReactParser.ID, 0); }
		public List<More_idContext> more_id() {
			return getRuleContexts(More_idContext.class);
		}
		public More_idContext more_id(int i) {
			return getRuleContext(More_idContext.class,i);
		}
		public More_idContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_more_id; }
	}

	public final More_idContext more_id() throws RecognitionException {
		More_idContext _localctx = new More_idContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_more_id);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			match(COMA);
			setState(82);
			match(ID);
			setState(86);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(83);
					more_id();
					}
					} 
				}
				setState(88);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionRContext extends ParserRuleContext {
		public TerminalNode FUNCTION() { return getToken(ReactParser.FUNCTION, 0); }
		public TerminalNode ID() { return getToken(ReactParser.ID, 0); }
		public TerminalNode PAR_IZQ() { return getToken(ReactParser.PAR_IZQ, 0); }
		public Id_listContext id_list() {
			return getRuleContext(Id_listContext.class,0);
		}
		public TerminalNode PAR_DER() { return getToken(ReactParser.PAR_DER, 0); }
		public TerminalNode CORCHETE_IZQ() { return getToken(ReactParser.CORCHETE_IZQ, 0); }
		public Func_bodyContext func_body() {
			return getRuleContext(Func_bodyContext.class,0);
		}
		public TerminalNode CORCHETE_DER() { return getToken(ReactParser.CORCHETE_DER, 0); }
		public TerminalNode PUNTO_COMA() { return getToken(ReactParser.PUNTO_COMA, 0); }
		public List<TerminalNode> SALTO() { return getTokens(ReactParser.SALTO); }
		public TerminalNode SALTO(int i) {
			return getToken(ReactParser.SALTO, i);
		}
		public FunctionRContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionR; }
	}

	public final FunctionRContext functionR() throws RecognitionException {
		FunctionRContext _localctx = new FunctionRContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_functionR);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			match(FUNCTION);
			setState(90);
			match(ID);
			setState(91);
			match(PAR_IZQ);
			setState(92);
			id_list();
			setState(93);
			match(PAR_DER);
			setState(94);
			match(CORCHETE_IZQ);
			setState(96);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SALTO) {
				{
				setState(95);
				match(SALTO);
				}
			}

			setState(98);
			func_body();
			setState(100);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SALTO) {
				{
				setState(99);
				match(SALTO);
				}
			}

			setState(102);
			match(CORCHETE_DER);
			setState(103);
			match(PUNTO_COMA);
			setState(105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SALTO) {
				{
				setState(104);
				match(SALTO);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_bodyContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(ReactParser.RETURN, 0); }
		public TerminalNode PAR_IZQ() { return getToken(ReactParser.PAR_IZQ, 0); }
		public Html_elementsContext html_elements() {
			return getRuleContext(Html_elementsContext.class,0);
		}
		public TerminalNode PAR_DER() { return getToken(ReactParser.PAR_DER, 0); }
		public TerminalNode PUNTO_COMA() { return getToken(ReactParser.PUNTO_COMA, 0); }
		public List<TerminalNode> SALTO() { return getTokens(ReactParser.SALTO); }
		public TerminalNode SALTO(int i) {
			return getToken(ReactParser.SALTO, i);
		}
		public Func_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_body; }
	}

	public final Func_bodyContext func_body() throws RecognitionException {
		Func_bodyContext _localctx = new Func_bodyContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_func_body);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			match(RETURN);
			setState(108);
			match(PAR_IZQ);
			setState(110);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SALTO) {
				{
				setState(109);
				match(SALTO);
				}
			}

			setState(112);
			html_elements();
			setState(114);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SALTO) {
				{
				setState(113);
				match(SALTO);
				}
			}

			setState(116);
			match(PAR_DER);
			setState(117);
			match(PUNTO_COMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Html_elementsContext extends ParserRuleContext {
		public List<TerminalNode> OPEN_TAG() { return getTokens(ReactParser.OPEN_TAG); }
		public TerminalNode OPEN_TAG(int i) {
			return getToken(ReactParser.OPEN_TAG, i);
		}
		public List<TerminalNode> ID() { return getTokens(ReactParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(ReactParser.ID, i);
		}
		public List<TerminalNode> CLOSE_TAG() { return getTokens(ReactParser.CLOSE_TAG); }
		public TerminalNode CLOSE_TAG(int i) {
			return getToken(ReactParser.CLOSE_TAG, i);
		}
		public TerminalNode SLASH() { return getToken(ReactParser.SLASH, 0); }
		public PropsContext props() {
			return getRuleContext(PropsContext.class,0);
		}
		public List<TerminalNode> SALTO() { return getTokens(ReactParser.SALTO); }
		public TerminalNode SALTO(int i) {
			return getToken(ReactParser.SALTO, i);
		}
		public List<Value_html_tagContext> value_html_tag() {
			return getRuleContexts(Value_html_tagContext.class);
		}
		public Value_html_tagContext value_html_tag(int i) {
			return getRuleContext(Value_html_tagContext.class,i);
		}
		public List<Html_elementsContext> html_elements() {
			return getRuleContexts(Html_elementsContext.class);
		}
		public Html_elementsContext html_elements(int i) {
			return getRuleContext(Html_elementsContext.class,i);
		}
		public Html_elementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_html_elements; }
	}

	public final Html_elementsContext html_elements() throws RecognitionException {
		Html_elementsContext _localctx = new Html_elementsContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_html_elements);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			match(OPEN_TAG);
			setState(120);
			match(ID);
			setState(122);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(121);
				props();
				}
			}

			setState(124);
			match(CLOSE_TAG);
			setState(126);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				{
				setState(125);
				match(SALTO);
				}
				break;
			}
			setState(129);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				{
				setState(128);
				value_html_tag();
				}
				break;
			}
			setState(132);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				setState(131);
				match(SALTO);
				}
				break;
			}
			setState(137);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(134);
					html_elements();
					}
					} 
				}
				setState(139);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			}
			setState(141);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				{
				setState(140);
				match(SALTO);
				}
				break;
			}
			setState(144);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CORCHETE_IZQ || _la==STRING) {
				{
				setState(143);
				value_html_tag();
				}
			}

			setState(147);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SALTO) {
				{
				setState(146);
				match(SALTO);
				}
			}

			setState(149);
			match(OPEN_TAG);
			setState(150);
			match(SLASH);
			setState(151);
			match(ID);
			setState(152);
			match(CLOSE_TAG);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropsContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ReactParser.ID, 0); }
		public Possible_assignContext possible_assign() {
			return getRuleContext(Possible_assignContext.class,0);
		}
		public More_propsContext more_props() {
			return getRuleContext(More_propsContext.class,0);
		}
		public PropsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_props; }
	}

	public final PropsContext props() throws RecognitionException {
		PropsContext _localctx = new PropsContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_props);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			match(ID);
			setState(156);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IGUAL) {
				{
				setState(155);
				possible_assign();
				}
			}

			setState(159);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(158);
				more_props();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class More_propsContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ReactParser.ID, 0); }
		public Possible_assignContext possible_assign() {
			return getRuleContext(Possible_assignContext.class,0);
		}
		public More_propsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_more_props; }
	}

	public final More_propsContext more_props() throws RecognitionException {
		More_propsContext _localctx = new More_propsContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_more_props);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			match(ID);
			setState(163);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IGUAL) {
				{
				setState(162);
				possible_assign();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Possible_assignContext extends ParserRuleContext {
		public TerminalNode IGUAL() { return getToken(ReactParser.IGUAL, 0); }
		public TerminalNode CORCHETE_IZQ() { return getToken(ReactParser.CORCHETE_IZQ, 0); }
		public TerminalNode ID() { return getToken(ReactParser.ID, 0); }
		public TerminalNode CORCHETE_DER() { return getToken(ReactParser.CORCHETE_DER, 0); }
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public Possible_assignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_possible_assign; }
	}

	public final Possible_assignContext possible_assign() throws RecognitionException {
		Possible_assignContext _localctx = new Possible_assignContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_possible_assign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			match(IGUAL);
			setState(170);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CORCHETE_IZQ:
				{
				setState(166);
				match(CORCHETE_IZQ);
				setState(167);
				match(ID);
				setState(168);
				match(CORCHETE_DER);
				}
				break;
			case NULL:
			case TRUE:
			case FALSE:
			case STRING:
			case INTEGER:
				{
				setState(169);
				literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(ReactParser.STRING, 0); }
		public TerminalNode NULL() { return getToken(ReactParser.NULL, 0); }
		public TerminalNode TRUE() { return getToken(ReactParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(ReactParser.FALSE, 0); }
		public TerminalNode INTEGER() { return getToken(ReactParser.INTEGER, 0); }
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_literal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << STRING) | (1L << INTEGER))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Value_html_tagContext extends ParserRuleContext {
		public TerminalNode CORCHETE_IZQ() { return getToken(ReactParser.CORCHETE_IZQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode CORCHETE_DER() { return getToken(ReactParser.CORCHETE_DER, 0); }
		public TerminalNode STRING() { return getToken(ReactParser.STRING, 0); }
		public Value_html_tagContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value_html_tag; }
	}

	public final Value_html_tagContext value_html_tag() throws RecognitionException {
		Value_html_tagContext _localctx = new Value_html_tagContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_value_html_tag);
		try {
			setState(179);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CORCHETE_IZQ:
				enterOuterAlt(_localctx, 1);
				{
				setState(174);
				match(CORCHETE_IZQ);
				setState(175);
				expr();
				setState(176);
				match(CORCHETE_DER);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(178);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Adding_proptypesContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ReactParser.ID, 0); }
		public TerminalNode PUNTO() { return getToken(ReactParser.PUNTO, 0); }
		public TerminalNode PROPTYPES() { return getToken(ReactParser.PROPTYPES, 0); }
		public TerminalNode IGUAL() { return getToken(ReactParser.IGUAL, 0); }
		public TerminalNode CORCHETE_IZQ() { return getToken(ReactParser.CORCHETE_IZQ, 0); }
		public Prop_types_bodyContext prop_types_body() {
			return getRuleContext(Prop_types_bodyContext.class,0);
		}
		public TerminalNode CORCHETE_DER() { return getToken(ReactParser.CORCHETE_DER, 0); }
		public TerminalNode PUNTO_COMA() { return getToken(ReactParser.PUNTO_COMA, 0); }
		public List<TerminalNode> SALTO() { return getTokens(ReactParser.SALTO); }
		public TerminalNode SALTO(int i) {
			return getToken(ReactParser.SALTO, i);
		}
		public Adding_proptypesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_adding_proptypes; }
	}

	public final Adding_proptypesContext adding_proptypes() throws RecognitionException {
		Adding_proptypesContext _localctx = new Adding_proptypesContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_adding_proptypes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			match(ID);
			setState(182);
			match(PUNTO);
			setState(183);
			match(PROPTYPES);
			setState(184);
			match(IGUAL);
			setState(185);
			match(CORCHETE_IZQ);
			setState(187);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SALTO) {
				{
				setState(186);
				match(SALTO);
				}
			}

			setState(189);
			prop_types_body();
			setState(190);
			match(CORCHETE_DER);
			setState(191);
			match(PUNTO_COMA);
			setState(193);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SALTO) {
				{
				setState(192);
				match(SALTO);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(ReactParser.STRING, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_expr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			match(STRING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Prop_types_bodyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ReactParser.ID, 0); }
		public TerminalNode DOS_PUNTOS() { return getToken(ReactParser.DOS_PUNTOS, 0); }
		public TerminalNode PROPTYPESCLASS() { return getToken(ReactParser.PROPTYPESCLASS, 0); }
		public TerminalNode PUNTO() { return getToken(ReactParser.PUNTO, 0); }
		public Types_of_proptypesContext types_of_proptypes() {
			return getRuleContext(Types_of_proptypesContext.class,0);
		}
		public TerminalNode SALTO() { return getToken(ReactParser.SALTO, 0); }
		public TerminalNode COMA() { return getToken(ReactParser.COMA, 0); }
		public Prop_types_bodyContext prop_types_body() {
			return getRuleContext(Prop_types_bodyContext.class,0);
		}
		public Prop_types_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prop_types_body; }
	}

	public final Prop_types_bodyContext prop_types_body() throws RecognitionException {
		Prop_types_bodyContext _localctx = new Prop_types_bodyContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_prop_types_body);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			match(ID);
			setState(198);
			match(DOS_PUNTOS);
			setState(199);
			match(PROPTYPESCLASS);
			setState(200);
			match(PUNTO);
			setState(201);
			types_of_proptypes();
			setState(208);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SALTO:
				{
				setState(202);
				match(SALTO);
				}
				break;
			case COMA:
				{
				setState(203);
				match(COMA);
				setState(205);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SALTO) {
					{
					setState(204);
					match(SALTO);
					}
				}

				setState(207);
				prop_types_body();
				}
				break;
			case CORCHETE_DER:
				break;
			default:
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Types_of_proptypesContext extends ParserRuleContext {
		public TerminalNode ARRAY() { return getToken(ReactParser.ARRAY, 0); }
		public TerminalNode BOOL() { return getToken(ReactParser.BOOL, 0); }
		public TerminalNode FUNC() { return getToken(ReactParser.FUNC, 0); }
		public TerminalNode NUMBER() { return getToken(ReactParser.NUMBER, 0); }
		public TerminalNode OBJECT() { return getToken(ReactParser.OBJECT, 0); }
		public TerminalNode STRING_TYPE() { return getToken(ReactParser.STRING_TYPE, 0); }
		public TerminalNode SYMBOL() { return getToken(ReactParser.SYMBOL, 0); }
		public Types_of_proptypesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_types_of_proptypes; }
	}

	public final Types_of_proptypesContext types_of_proptypes() throws RecognitionException {
		Types_of_proptypesContext _localctx = new Types_of_proptypesContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_types_of_proptypes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(210);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ARRAY) | (1L << BOOL) | (1L << FUNC) | (1L << NUMBER) | (1L << OBJECT) | (1L << STRING_TYPE) | (1L << SYMBOL))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3%\u00d7\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\3\2\7\2&\n\2\f\2\16\2)\13\2\3\2\3\2\3\3\3\3\3\3\5\3\60\n\3\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\5\4:\n\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4C\n\4\3"+
		"\4\3\4\3\4\3\4\5\4I\n\4\5\4K\n\4\3\5\3\5\7\5O\n\5\f\5\16\5R\13\5\3\6\3"+
		"\6\3\6\7\6W\n\6\f\6\16\6Z\13\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7c\n\7\3"+
		"\7\3\7\5\7g\n\7\3\7\3\7\3\7\5\7l\n\7\3\b\3\b\3\b\5\bq\n\b\3\b\3\b\5\b"+
		"u\n\b\3\b\3\b\3\b\3\t\3\t\3\t\5\t}\n\t\3\t\3\t\5\t\u0081\n\t\3\t\5\t\u0084"+
		"\n\t\3\t\5\t\u0087\n\t\3\t\7\t\u008a\n\t\f\t\16\t\u008d\13\t\3\t\5\t\u0090"+
		"\n\t\3\t\5\t\u0093\n\t\3\t\5\t\u0096\n\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\5"+
		"\n\u009f\n\n\3\n\5\n\u00a2\n\n\3\13\3\13\5\13\u00a6\n\13\3\f\3\f\3\f\3"+
		"\f\3\f\5\f\u00ad\n\f\3\r\3\r\3\16\3\16\3\16\3\16\3\16\5\16\u00b6\n\16"+
		"\3\17\3\17\3\17\3\17\3\17\3\17\5\17\u00be\n\17\3\17\3\17\3\17\3\17\5\17"+
		"\u00c4\n\17\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\5\21\u00d0"+
		"\n\21\3\21\5\21\u00d3\n\21\3\22\3\22\3\22\2\2\23\2\4\6\b\n\f\16\20\22"+
		"\24\26\30\32\34\36 \"\2\4\4\2\25\27$%\3\2\34\"\2\u00e5\2\'\3\2\2\2\4/"+
		"\3\2\2\2\6J\3\2\2\2\bL\3\2\2\2\nS\3\2\2\2\f[\3\2\2\2\16m\3\2\2\2\20y\3"+
		"\2\2\2\22\u009c\3\2\2\2\24\u00a3\3\2\2\2\26\u00a7\3\2\2\2\30\u00ae\3\2"+
		"\2\2\32\u00b5\3\2\2\2\34\u00b7\3\2\2\2\36\u00c5\3\2\2\2 \u00c7\3\2\2\2"+
		"\"\u00d4\3\2\2\2$&\5\4\3\2%$\3\2\2\2&)\3\2\2\2\'%\3\2\2\2\'(\3\2\2\2("+
		"*\3\2\2\2)\'\3\2\2\2*+\7\2\2\3+\3\3\2\2\2,\60\5\6\4\2-\60\5\f\7\2.\60"+
		"\5\34\17\2/,\3\2\2\2/-\3\2\2\2/.\3\2\2\2\60\5\3\2\2\2\61\62\7\6\2\2\62"+
		"\63\7\7\2\2\63\64\5\b\5\2\64\65\7\b\2\2\65\66\7\t\2\2\66\67\7$\2\2\67"+
		"9\7\n\2\28:\7\13\2\298\3\2\2\29:\3\2\2\2:K\3\2\2\2;<\7\6\2\2<B\7#\2\2"+
		"=>\7\3\2\2>?\7\7\2\2?@\5\b\5\2@A\7\b\2\2AC\3\2\2\2B=\3\2\2\2BC\3\2\2\2"+
		"CD\3\2\2\2DE\7\t\2\2EF\7$\2\2FH\7\n\2\2GI\7\13\2\2HG\3\2\2\2HI\3\2\2\2"+
		"IK\3\2\2\2J\61\3\2\2\2J;\3\2\2\2K\7\3\2\2\2LP\7#\2\2MO\5\n\6\2NM\3\2\2"+
		"\2OR\3\2\2\2PN\3\2\2\2PQ\3\2\2\2Q\t\3\2\2\2RP\3\2\2\2ST\7\3\2\2TX\7#\2"+
		"\2UW\5\n\6\2VU\3\2\2\2WZ\3\2\2\2XV\3\2\2\2XY\3\2\2\2Y\13\3\2\2\2ZX\3\2"+
		"\2\2[\\\7\f\2\2\\]\7#\2\2]^\7\r\2\2^_\5\b\5\2_`\7\16\2\2`b\7\7\2\2ac\7"+
		"\13\2\2ba\3\2\2\2bc\3\2\2\2cd\3\2\2\2df\5\16\b\2eg\7\13\2\2fe\3\2\2\2"+
		"fg\3\2\2\2gh\3\2\2\2hi\7\b\2\2ik\7\n\2\2jl\7\13\2\2kj\3\2\2\2kl\3\2\2"+
		"\2l\r\3\2\2\2mn\7\17\2\2np\7\r\2\2oq\7\13\2\2po\3\2\2\2pq\3\2\2\2qr\3"+
		"\2\2\2rt\5\20\t\2su\7\13\2\2ts\3\2\2\2tu\3\2\2\2uv\3\2\2\2vw\7\16\2\2"+
		"wx\7\n\2\2x\17\3\2\2\2yz\7\20\2\2z|\7#\2\2{}\5\22\n\2|{\3\2\2\2|}\3\2"+
		"\2\2}~\3\2\2\2~\u0080\7\21\2\2\177\u0081\7\13\2\2\u0080\177\3\2\2\2\u0080"+
		"\u0081\3\2\2\2\u0081\u0083\3\2\2\2\u0082\u0084\5\32\16\2\u0083\u0082\3"+
		"\2\2\2\u0083\u0084\3\2\2\2\u0084\u0086\3\2\2\2\u0085\u0087\7\13\2\2\u0086"+
		"\u0085\3\2\2\2\u0086\u0087\3\2\2\2\u0087\u008b\3\2\2\2\u0088\u008a\5\20"+
		"\t\2\u0089\u0088\3\2\2\2\u008a\u008d\3\2\2\2\u008b\u0089\3\2\2\2\u008b"+
		"\u008c\3\2\2\2\u008c\u008f\3\2\2\2\u008d\u008b\3\2\2\2\u008e\u0090\7\13"+
		"\2\2\u008f\u008e\3\2\2\2\u008f\u0090\3\2\2\2\u0090\u0092\3\2\2\2\u0091"+
		"\u0093\5\32\16\2\u0092\u0091\3\2\2\2\u0092\u0093\3\2\2\2\u0093\u0095\3"+
		"\2\2\2\u0094\u0096\7\13\2\2\u0095\u0094\3\2\2\2\u0095\u0096\3\2\2\2\u0096"+
		"\u0097\3\2\2\2\u0097\u0098\7\20\2\2\u0098\u0099\7\22\2\2\u0099\u009a\7"+
		"#\2\2\u009a\u009b\7\21\2\2\u009b\21\3\2\2\2\u009c\u009e\7#\2\2\u009d\u009f"+
		"\5\26\f\2\u009e\u009d\3\2\2\2\u009e\u009f\3\2\2\2\u009f\u00a1\3\2\2\2"+
		"\u00a0\u00a2\5\24\13\2\u00a1\u00a0\3\2\2\2\u00a1\u00a2\3\2\2\2\u00a2\23"+
		"\3\2\2\2\u00a3\u00a5\7#\2\2\u00a4\u00a6\5\26\f\2\u00a5\u00a4\3\2\2\2\u00a5"+
		"\u00a6\3\2\2\2\u00a6\25\3\2\2\2\u00a7\u00ac\7\24\2\2\u00a8\u00a9\7\7\2"+
		"\2\u00a9\u00aa\7#\2\2\u00aa\u00ad\7\b\2\2\u00ab\u00ad\5\30\r\2\u00ac\u00a8"+
		"\3\2\2\2\u00ac\u00ab\3\2\2\2\u00ad\27\3\2\2\2\u00ae\u00af\t\2\2\2\u00af"+
		"\31\3\2\2\2\u00b0\u00b1\7\7\2\2\u00b1\u00b2\5\36\20\2\u00b2\u00b3\7\b"+
		"\2\2\u00b3\u00b6\3\2\2\2\u00b4\u00b6\7$\2\2\u00b5\u00b0\3\2\2\2\u00b5"+
		"\u00b4\3\2\2\2\u00b6\33\3\2\2\2\u00b7\u00b8\7#\2\2\u00b8\u00b9\7\30\2"+
		"\2\u00b9\u00ba\7\31\2\2\u00ba\u00bb\7\24\2\2\u00bb\u00bd\7\7\2\2\u00bc"+
		"\u00be\7\13\2\2\u00bd\u00bc\3\2\2\2\u00bd\u00be\3\2\2\2\u00be\u00bf\3"+
		"\2\2\2\u00bf\u00c0\5 \21\2\u00c0\u00c1\7\b\2\2\u00c1\u00c3\7\n\2\2\u00c2"+
		"\u00c4\7\13\2\2\u00c3\u00c2\3\2\2\2\u00c3\u00c4\3\2\2\2\u00c4\35\3\2\2"+
		"\2\u00c5\u00c6\7$\2\2\u00c6\37\3\2\2\2\u00c7\u00c8\7#\2\2\u00c8\u00c9"+
		"\7\33\2\2\u00c9\u00ca\7\32\2\2\u00ca\u00cb\7\30\2\2\u00cb\u00d2\5\"\22"+
		"\2\u00cc\u00d3\7\13\2\2\u00cd\u00cf\7\3\2\2\u00ce\u00d0\7\13\2\2\u00cf"+
		"\u00ce\3\2\2\2\u00cf\u00d0\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1\u00d3\5 "+
		"\21\2\u00d2\u00cc\3\2\2\2\u00d2\u00cd\3\2\2\2\u00d2\u00d3\3\2\2\2\u00d3"+
		"!\3\2\2\2\u00d4\u00d5\t\3\2\2\u00d5#\3\2\2\2 \'/9BHJPXbfkpt|\u0080\u0083"+
		"\u0086\u008b\u008f\u0092\u0095\u009e\u00a1\u00a5\u00ac\u00b5\u00bd\u00c3"+
		"\u00cf\u00d2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}