(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('MenuAppController', MenuAppController);

    MenuAppController.$inject = ['MenuDataService']
    function MenuAppController(MenuDataService) {
        var appCtrl = this;

        var promise = MenuDataService.getAllCategories();
        promise.then(function (response) {
            appCtrl.categories = response.data;
        });
    }

})();
