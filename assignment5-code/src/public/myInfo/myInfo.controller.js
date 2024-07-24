(function() {
	'use strict';
	angular
		.module('public')
		.controller('MyInfoController', MyInfoController);
	MyInfoController.$inject = ['customer'];
	function MyInfoController(customer) {
		var myInfoCtrl = this;
		if (customer) {
			var menuNumber = customer.favoriteDish.short_name;
			var category = '';
			var categoryItem = '';
			for (var i = 0; i < menuNumber.length; i++) {
				if (isNaN(menuNumber.charAt(i)))
					category += menuNumber.charAt(i);
				else {
					categoryItem = category + menuNumber.slice(i);
					break;
				}
			}
			customer.favoriteDish.picture = {
					category: category,
					categoryItem: categoryItem
				}
		}
		myInfoCtrl.customer = customer;
	}
})();
