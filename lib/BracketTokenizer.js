function BracketTokenizer() {
    this.car = function(expression) {
	var exp = this.trim(expression);
	if (exp == '') {
	    return '';
	} else {
	    exp = this.trim(this.trimBrackets(exp));
	    if (exp.charAt(0) == '(') {
		return exp.substring(0, exp.indexOf(')') + 1);
	    } else {
		return exp.replace(/(\S+).*/, '$1');
	    }
	}
    }

    this.cdr = function(expression) {
	var exp = this.trim(expression);
	if (exp == '') {
	    return '';
	} else if (exp == '()') {
	    return '()';
	} else {
	    var car = this.car(exp);
	    return '(' + this.trim(this.trimBrackets(exp).substring(car.length)) + ')';
	}
    }

    this.trim = function(str) {
	return str.replace(/^\s+|\s+$/, '');
    }
    
    this.trimBrackets = function(str) {
	return str.replace(/^\(/, '').replace(/\)$/, '');
    }
}