function Scm() {
    this.eval = function(expression) {
	var form = new ASTParser().parse(expression).form;
	return this.evalForm(form);
    }

    this.evalForm = function(form) {
	if (form.value) {
	    return form.value;
	}

	return this.applyFunc(form.func, form.args);
    }

    this.applyFunc = function(func, args) {
	if (func == '+') {
	    var left = this.evalValue(args[0]);
	    var right = this.evalValue(args[1]);
	    return left + right;
	} 
	throw('Unsupported function:' + func);
    }

    this.evalValue = function(form) {
	if (form.value) {
	    // assuming it is a number. big assumption for now.
	    return new Number(form.value);
	} else {
	    return this.evalForm(form);
	}
    }

}