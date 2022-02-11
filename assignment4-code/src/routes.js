(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/category-list');

        // *** Set up UI states ***
        $stateProvider
            .state('home', {
                url: '/',
                //templateUrl: 'src/menuapp/home.template.html',
                template: '<h3 ui-sref="home" ui-sref-active="active">HOME</h3><h3 ui-sref="categoryList" ui-sref-active="active">CATEGORIES</h3>'
            })

            .state('categoryList', {
                url: '/category-list',
                //templateUrl: 'src/categories/categories.template.html',
                template: '<h3 ui-sref="home" ui-sref-active="active">HOME</h3><h3 ui-sref="categoryList" ui-sref-active="active">CATEGORIES</h3><categories categories="appCtrl.categories"></categories>'
            })

            .state('itemsList', {
                url: '/items-list/{categoryName}',
                template: '<h3 ui-sref="home" ui-sref-active="active">HOME</h3><h3 ui-sref="categoryList" ui-sref-active="active">CATEGORIES</h3><items-list items="$ctrl.items"></items-list>',
                controller: 'ItemsComponentController as $ctrl',
                resolve: {
                    myData: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryName)
                            .then(function (resolve) {
                                console.log('Resolving data for category: ', $stateParams.categoryName);
                                console.log('Result: ', resolve.data);
                                return resolve.data.mneu_items;
                            });
                    }]
                }
            });
    }
})();

//['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
//    return MenuDataService.getItemsForCategory($stateParams.categoryName);
//}]

//['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
//    return MenuDataService.getItemsForCategory($stateParams.categoryName)
//        .then(function (resolve) {
//            console.log('Resolving data for category: ', $stateParams.categoryName);
//            console.log('Result: ', resolve.data);
//            return resolve;
//        });
//}]
    