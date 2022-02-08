(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListService', ShoppingListService);

    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService) {
        var toBuy = this;

        toBuy.toBuyItems = ShoppingListService.getToBuyItems();

        toBuy.buyItem = function (itemIndex) {
            console.log('Index = ', itemIndex);
            ShoppingListService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController(ShoppingListService) {
        var bought = this;

        bought.boughtItems = ShoppingListService.getBoughtItems();
    }

    function ShoppingListService() {
        var service = this;

        // List of shopping items
        var toBuyItems = [{ name: "Cheese", quantity: 1 }, { name: "Potato", quantity: 10 }, { name: "Herbs", quantity: 5 }, { name: "Soda", quantity: 15 }, { name: "Cake", quantity: 3 }];
        var boughtItems = [];

        service.buyItem = function (itemIndex) {
            var temp = toBuyItems[itemIndex];
            boughtItems.push(temp);
            toBuyItems.splice(itemIndex, 1);
            console.log('New ToBuy Array: ', toBuyItems);
            console.log('New Bought Array: ', boughtItems);
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    }
})();