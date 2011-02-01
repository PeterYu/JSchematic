testCase(new function() {
	var scm = new Scm();
	this.numeral_form = function() {
	    assertEquals(1, scm.eval('1'))
	};
	
	this.another_numeral_form = function() {
	    assertEquals(2, scm.eval('2'))
	};

    });