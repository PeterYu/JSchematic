testCase('ASTParser_literal_form_tests', new function() {
	var parser = new ASTParser();
	
	this.should_parse_number = function() {
	    var root = parser.parse('1');
	    assertEquals(1, root.form.value);
	};
	
    });