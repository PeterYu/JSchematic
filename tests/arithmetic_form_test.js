testCase('arithmetic_form_test', new function() {    
	var scm = new Scm();
	
	this.adding_two_numbers = function() {
	    assertEquals(3, scm.eval('(+ 1 2)'));
	};

    });