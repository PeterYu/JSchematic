function Scm() {
    this.eval = function(expression) {
	var form = new ASTParser().parse(expression).form;

	if (form.func == '+') {
	    return new Number(form.args[0]) + new Number(form.args[1]);
	} else if (form.func == '-') {
	    return new Number(form.args[0]) - new Number(form.args[1]);
	} else if (form.func == '*') {
	    return new Number(form.args[0]) * new Number(form.args[1]);
	} else if (form.func == '/') {
	    return new Number(form.args[0]) / new Number(form.args[1]);
	}
	return expression.valueOf();
    }
}