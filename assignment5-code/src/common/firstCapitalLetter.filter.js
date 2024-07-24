(function() {
	'use strict';
	angular
		.module('common')
		.filter('FirstCapitalLetter', FirstCapitalLetterFactory);
	function FirstCapitalLetterFactory() {
		return function(input, altLabel) {
			if (!input) {
				if (altLabel)
					input = altLabel;
				else
					return '';
			}
			input = input.charAt(0).toUpperCase() + input.slice(1);
			return input;
		}
	}
})();
