(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .service('ItemRetrievalService', ItemRetrievalService)
        .directive('foundItems', FoundItemsList);
     
    function FoundItemsList() {
        console.log('Compiling');
        var ddo = {
            // I could not load my foundItems.html due to DOM restrictions, I do not know why this is.
            template: '<ol> <li ng-repeat="item in items.getItems()">{{item.name}} <button ng-click="items.removeItem({index: $index});"> Remove Item </button></li> </ol>',
            scope: {
                items: '<',
                onRemove: '&'
            }
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['ItemRetrievalService'];
    function NarrowItDownController(ItemRetrievalService) {
        var ndCtrl = this;

        ndCtrl.searchTerm = '';

        ndCtrl.searchItem = function () {
            console.log('Searching for: ', ndCtrl.searchTerm);
            ndCtrl.items = [];

            if (ndCtrl.searchTerm === '')
                return;

            var promise = ItemRetrievalService.getMenuItems();
            promise.then(function (response) {
                console.log(response.data);
                for (let i = 0; i < response.data.menu_items.length; i++) {
                    if (response.data.menu_items[i].name.toLowerCase().includes(ndCtrl.searchTerm))
                        ndCtrl.items.push(response.data.menu_items[i]);
                }
            });
        };

        ndCtrl.getItems = function () {
            return ndCtrl.items;
        }

        ndCtrl.removeItem = function (index) {
            ndCtrl.items.splice(index, 1);
        };
    }

    ItemRetrievalService.$inject = ['$http', 'ApiBasePath'];
    function ItemRetrievalService($http, ApiBasePath) {
        var service = this;

        service.getMenuItems = function () {
            console.log('Getting all menu items.');
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            });

            return response;
        };
    }
})();