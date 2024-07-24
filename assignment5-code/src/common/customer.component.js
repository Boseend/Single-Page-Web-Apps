(function() {
	'use strict';
	angular
		.module('common')
		.component('customerInfo', {
			templateUrl: 'src/public/myInfo/customer.html',
			bindings: {
				customer: '<'
			}
		});
})();
