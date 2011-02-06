function Form() {
    this.func = null;
    this.args = [];
}

function AST() {
    this.form = new Form();
}

function ASTParser() {
    this.tokenizer = new BracketTokenizer();

    this.parse = function (expression) {
	var ast = new AST();
	ast.form = this.doForm(expression);
	return ast;
    };

    this.doForm = function (expression) {
	var func = this.tokenizer.car(expression);
	if (func == '') {
	    return null;
	} else {
	    var form = new Form();
	    form.func = func;
	    this.doArgs(form.args, this.tokenizer.cdr(expression));
	    return form;
	}
    };

    this.doArgs = function (args, expression) {
	if (expression == '()') {
	    return args;
	} else if (expression.match(/^\(\(/)) {
	    args.push(this.doForm(this.tokenizer.car(expression)));
	} else {
	    args.push(this.tokenizer.car(expression));
	    this.doArgs(args, this.tokenizer.cdr(expression));
	}
    };

}