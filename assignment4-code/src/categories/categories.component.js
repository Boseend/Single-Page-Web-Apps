(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            template: '<h3>List of Menu Categories</h3><ul> <li ng-repeat="category in $ctrl.categories"> (<a ui-sref="itemsList({categoryName: category.short_name})">{{category.short_name}}</a>){{category.name}}</li></ul>',
            //template: '<h3>List of Menu Categories</h3><ul> <li ng-repeat="category in $ctrl.categories"> (<a ui-sref="itemsList({categoryName: $ctrl.categories[$index].shortName})">{{category.short_name}}</a>){{category.name}}</li></ul>',
            controller: CategoriesComponentController
        });

    CategoriesComponentController.$inject = ['MenuDataService'];
    function CategoriesComponentController(MenuDataService) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
            var promise = MenuDataService.getAllCategories();
            promise.then(function (response) {
                $ctrl.categories = response.data;
                console.log('Categories:', $ctrl.categories);
            });
        };
    }
})();
