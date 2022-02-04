(function () {
    'use strict';

    angular.module('AssignmentOne', [])
        .controller('LunchController', function ($scope) {
            $scope.lunchString = "";
            $scope.lunchCount = 0;
            $scope.lunchResult = "";

            function countLunch(string) {
                var array = string.split(",");
                return array.length;
            };

            $scope.displayCount = function () {
                var count = countLunch($scope.lunchString);
                $scope.lunchCount = count;
            };

            $scope.displayResult = function () {
                $scope.lunchResult = ($scope.lunchCount >= 3) ? "Too Much" : "Not Too Much";
            };
        });
})();