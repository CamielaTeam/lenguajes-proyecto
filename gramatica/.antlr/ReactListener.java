// Generated from React.g4 by ANTLR 4.8
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ReactParser}.
 */
public interface ReactListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ReactParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(ReactParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(ReactParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#program_body}.
	 * @param ctx the parse tree
	 */
	void enterProgram_body(ReactParser.Program_bodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#program_body}.
	 * @param ctx the parse tree
	 */
	void exitProgram_body(ReactParser.Program_bodyContext ctx);
	/**
	 * Enter a parse tree produced by the {@code no_id_import}
	 * labeled alternative in {@link ReactParser#import_statement}.
	 * @param ctx the parse tree
	 */
	void enterNo_id_import(ReactParser.No_id_importContext ctx);
	/**
	 * Exit a parse tree produced by the {@code no_id_import}
	 * labeled alternative in {@link ReactParser#import_statement}.
	 * @param ctx the parse tree
	 */
	void exitNo_id_import(ReactParser.No_id_importContext ctx);
	/**
	 * Enter a parse tree produced by the {@code id_import}
	 * labeled alternative in {@link ReactParser#import_statement}.
	 * @param ctx the parse tree
	 */
	void enterId_import(ReactParser.Id_importContext ctx);
	/**
	 * Exit a parse tree produced by the {@code id_import}
	 * labeled alternative in {@link ReactParser#import_statement}.
	 * @param ctx the parse tree
	 */
	void exitId_import(ReactParser.Id_importContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#id_list}.
	 * @param ctx the parse tree
	 */
	void enterId_list(ReactParser.Id_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#id_list}.
	 * @param ctx the parse tree
	 */
	void exitId_list(ReactParser.Id_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#more_id}.
	 * @param ctx the parse tree
	 */
	void enterMore_id(ReactParser.More_idContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#more_id}.
	 * @param ctx the parse tree
	 */
	void exitMore_id(ReactParser.More_idContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#functionR}.
	 * @param ctx the parse tree
	 */
	void enterFunctionR(ReactParser.FunctionRContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#functionR}.
	 * @param ctx the parse tree
	 */
	void exitFunctionR(ReactParser.FunctionRContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#func_body}.
	 * @param ctx the parse tree
	 */
	void enterFunc_body(ReactParser.Func_bodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#func_body}.
	 * @param ctx the parse tree
	 */
	void exitFunc_body(ReactParser.Func_bodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#html_elements}.
	 * @param ctx the parse tree
	 */
	void enterHtml_elements(ReactParser.Html_elementsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#html_elements}.
	 * @param ctx the parse tree
	 */
	void exitHtml_elements(ReactParser.Html_elementsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#html_short_element}.
	 * @param ctx the parse tree
	 */
	void enterHtml_short_element(ReactParser.Html_short_elementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#html_short_element}.
	 * @param ctx the parse tree
	 */
	void exitHtml_short_element(ReactParser.Html_short_elementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#props}.
	 * @param ctx the parse tree
	 */
	void enterProps(ReactParser.PropsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#props}.
	 * @param ctx the parse tree
	 */
	void exitProps(ReactParser.PropsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#more_props}.
	 * @param ctx the parse tree
	 */
	void enterMore_props(ReactParser.More_propsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#more_props}.
	 * @param ctx the parse tree
	 */
	void exitMore_props(ReactParser.More_propsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#possible_assign}.
	 * @param ctx the parse tree
	 */
	void enterPossible_assign(ReactParser.Possible_assignContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#possible_assign}.
	 * @param ctx the parse tree
	 */
	void exitPossible_assign(ReactParser.Possible_assignContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(ReactParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(ReactParser.LiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#value_html_tag}.
	 * @param ctx the parse tree
	 */
	void enterValue_html_tag(ReactParser.Value_html_tagContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#value_html_tag}.
	 * @param ctx the parse tree
	 */
	void exitValue_html_tag(ReactParser.Value_html_tagContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#adding_proptypes}.
	 * @param ctx the parse tree
	 */
	void enterAdding_proptypes(ReactParser.Adding_proptypesContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#adding_proptypes}.
	 * @param ctx the parse tree
	 */
	void exitAdding_proptypes(ReactParser.Adding_proptypesContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(ReactParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(ReactParser.ExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#prop_types_body}.
	 * @param ctx the parse tree
	 */
	void enterProp_types_body(ReactParser.Prop_types_bodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#prop_types_body}.
	 * @param ctx the parse tree
	 */
	void exitProp_types_body(ReactParser.Prop_types_bodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link ReactParser#types_of_proptypes}.
	 * @param ctx the parse tree
	 */
	void enterTypes_of_proptypes(ReactParser.Types_of_proptypesContext ctx);
	/**
	 * Exit a parse tree produced by {@link ReactParser#types_of_proptypes}.
	 * @param ctx the parse tree
	 */
	void exitTypes_of_proptypes(ReactParser.Types_of_proptypesContext ctx);
}