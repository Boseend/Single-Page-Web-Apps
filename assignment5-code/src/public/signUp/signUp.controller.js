(function() {
	'use strict';
	angular
		.module('public')
		.controller('SignUpController', SignUpController);
	SignUpController.$inject = ['MenuService', 'CustomerService'];
	function SignUpController(MenuService, CustomerService) {
		var signUpCtrl = this;
		signUpCtrl.getMenuItem = function() {
			var menuNumber = signUpCtrl.customer.menuNumber; 
			if (menuNumber && menuNumber.length >= 2) {
				menuNumber = menuNumber.toUpperCase();
				var category = '';
				var categoryItem = '';
				for (var i = 0; i < menuNumber.length; i++) {
					if (isNaN(menuNumber.charAt(i)))
						category += menuNumber.charAt(i);
					else {
						categoryItem = menuNumber.slice(i);
						break;
					}
				}
				categoryItem--;
				MenuService.getMenuItem(category, categoryItem).then(function (response) {
					var menuItem = response;
					menuItem.description = menuItem.description.split(';');
					for (var i = 0; i < menuItem.description.length; i++) {
						menuItem.description[i] = menuItem.description[i].trim();
					}
					signUpCtrl.customer.favoriteDish = menuItem;
				});
			} else
				signUpCtrl.customer.favoriteDish = undefined;
		}
		signUpCtrl.submit = function(form) {
			CustomerService.registerCustomer(signUpCtrl.customer);
			signUpCtrl.resetForm(form);
		}
		signUpCtrl.resetForm = function(form) {
			signUpCtrl.customer = undefined;
			form.firstName.$setUntouched();
			form.lastName.$setUntouched();
			form.eMail.$setUntouched();
			form.phoneNumber.$setUntouched();
			form.menuNumber.$setUntouched();
		}
	}
})();
