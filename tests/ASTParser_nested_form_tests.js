testCase('ASTParser_nested_form_tests', new function() {
	var parser = new ASTParser();
	
	this.nested_outer_operator = function() {
	    var root = parser.parse('(- 3 (+ 1 2))');
	    assertEquals('-', root.form.func);
	};

	this.nested_outer_operand = function() {
	    var root = parser.parse('(- 3 (+ 1 2))');
	    assertEquals(3, root.form.args[0].value);
	};
	
	this.nested_outer_inner_form_operator = function() {
	    var root = parser.parse('(- 3 (+ 1 2))');
	    assertEquals('+', root.form.args[1].func);
	};
	
	this.nested_outer_inner_form_left_operand = function() {
	    var root = parser.parse('(- 3 (+ 1 2))');
	    assertEquals(1, root.form.args[1].args[0].value);
	};
	
	this.nested_outer_inner_form_right_operand = function() {
	    var root = parser.parse('(- 3 (+ 1 2))');
	    assertEquals(2, root.form.args[1].args[1].value);
	};

	this.left_nested_outer_operator = function() {
	    var root = parser.parse('(- (+ 1 2) 3)');
	    assertEquals('-', root.form.func);
	};

	this.left_nested_outer_operand = function() {
	    var root = parser.parse('(- (+ 1 2) 3)');
	    assertEquals(3, root.form.args[1].value);
	};
	
	this.left_nested_inner_form_operator = function() {
	    var root = parser.parse('(- (+ 1 2) 3)');
	    assertEquals('+', root.form.args[0].func);
	};
	
	this.left_nested_inner_form_left_operand = function() {
	    var root = parser.parse('(- (+ 1 2) 3)');
	    assertEquals(1, root.form.args[0].args[0].value);
	};
	
	this.left_nested_inner_form_right_operand = function() {
	    var root = parser.parse('(- (+ 1 2) 3)');
	    assertEquals(2, root.form.args[0].args[1].value);
	};
	
    });