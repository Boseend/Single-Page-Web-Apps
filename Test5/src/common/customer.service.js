(function() {
	'use strict';
	angular
		.module('common')
		.service('CustomerService', CustomerService);
	function CustomerService() {
		var customerService = this;
		customerService.registerCustomer = function(customer) {
			customerService.customer = customer;
		}
		customerService.getCustomer = function() {
			return customerService.customer;
		}
	}
})();
