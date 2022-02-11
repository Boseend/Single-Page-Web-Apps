(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsComponentController', ItemsComponentController)
        .component('itemsList', {
            template: '<h3>List of Items in Category</h3><ul><li ng-repeat="item in $ctrl.items">{{item.name}}</li></ul>',
            controller: ItemsComponentController,
            bindings: {
                items: '<'
            }
        });

    ItemsComponentController.$inject = ['myData'];
    function ItemsComponentController(myData) {
        var $ctrl = this;
        $ctrl.shortName = '';
        $ctrl.items = myData;

        //$ctrl.$onInit = function () {
        //    //console.log('Items loaded:', items);
        //    //$ctrl.items = items;
        //};
    }
})();
