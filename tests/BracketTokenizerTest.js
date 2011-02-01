testCase(new function() {

	var tokenizer;

	this.setUp = function() {
	    tokenizer = new BracketTokenizer();
	}
	
	this.no_bracket = function() {
	    assertEquals('', tokenizer.car(''));
	};
	
	this.bracket_no_content = function() {
	    assertEquals('', tokenizer.car('()'));
	};
	    
	this.car_number = function() {
	    assertEquals(1, tokenizer.car('(1)'));
	};
	    
	this.car_symbol = function() {
	    assertEquals('#', tokenizer.car('(#)'));
	};
	    
	this.car_inner_bracket = function() {
	    assertEquals('()', tokenizer.car('(())'));
	};
	    
	this.car_inner_bracket_with_expression = function() {
	    assertEquals('(+ 1 2)', tokenizer.car('((+ 1 2))'));
	};

	this.car_bracket_with_expression = function() {
	    assertEquals('+', tokenizer.car('(+ 1 2)'));
	};

	this.cdr_empty_expression = function() {
	    assertEquals('', tokenizer.cdr(''));
	};

	this.cdr_empty_bracket = function() {
	    assertEquals('()', tokenizer.cdr('()'));
	};

	this.cdr_single_element = function() {
	    assertEquals('()', tokenizer.cdr('(a)'));
	};

	this.cdr_2_elements = function() {
	    assertEquals('(b)', tokenizer.cdr('(a b)'));
	};

	this.cdr_3_elements = function() {
	    assertEquals('(b c)', tokenizer.cdr('(a b c)'));
	};

	this.cdr_with_sublist = function() {
	    assertEquals('((b c))', tokenizer.cdr('(a (b c))'));
	};

    });