testCase('arithmetic_form_test', new function() {    
	var scm = new Scm();
	
	this.adding_two_numbers = function() {
	    assertEquals(3, scm.eval('(+ 1 2)'));
	};

	// this.substracting_two_numbers = function() {
	//     assertEquals(-1, scm.eval('(- 1 2)'));
	// };

	// this.multiplying_two_numbers = function() {
	//     assertEquals(6, scm.eval('(* 2 3)'));
	// };

	// this.dividing_two_numbers = function() {
	//     assertEquals(3, scm.eval('(/ 21 7)'));
	// };

	this.two_operations_right = function() {
	    assertEquals(33, scm.eval('(+ 5 (+ 21 7))'));
	};

	this.two_operations_left = function() {
	    assertEquals(33, scm.eval('(+ (+ 21 7) 5)'));
	};

	this.two_operations_both = function() {
	    assertEquals(33, scm.eval('(+ (+ 21 7) (+ 2 3))'));
	};

	this.three_operations = function() {
	    assertEquals(33, scm.eval('(+ 5 (+ (+ 21 7) 2))'));
	};
    });