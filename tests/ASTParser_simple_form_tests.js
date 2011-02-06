testCase('ASTParser_simple_form_tests', new function() {
	var parser = new ASTParser();
	
	this.simple_addition_should_parse_operator = function() {
	    var root = parser.parse('(+ 1 2)');
	    assertEquals('+', root.form.func);
	};
	
	this.simple_addition_should_parse_left_operand = function() {
	    var root = parser.parse('(+ 1 2)');
	    assertEquals(1, root.form.args[0]);
	};
	
	this.simple_addition_should_parse_right_operand = function() {
	    var root = parser.parse('(+ 1 2)');
	    assertEquals(2, root.form.args[1]);
	};
	
    });