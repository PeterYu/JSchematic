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
	if (this.isLiteral(expression)) {
	    return this.literalValue(expression);
	} else {
	    var func = this.tokenizer.car(expression);
	    if (func == '') {
		return null;
	    } else {
		var form = new Form();
		form.func = func;
		this.doArgs(form.args, this.tokenizer.cdr(expression));
		return form;
	    }
	}
    };

    this.isLiteral = function(expression) {
	return expression.search(/^\(.*\)$/) == -1;
    }

    this.literalValue = function(expression) {
	var form = new Form();
	if (expression.search(/^\d+$/)) {
	    form.value = new Number(expression);
	} else {
	    form.value = expression;
	}
	return form;
    }

    this.doArgs = function (args, expression) {
	if (expression == '()') {
	    return args;
	} else if (expression.match(/^\(\(/)) {
	    args.push(this.doForm(this.tokenizer.car(expression)));
	    this.doArgs(args, this.tokenizer.cdr(expression));
	} else {
	    args.push(this.literalValue(this.tokenizer.car(expression)));
	    this.doArgs(args, this.tokenizer.cdr(expression));
	}
    };

}