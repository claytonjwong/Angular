(function() {
    'use strict';

    angular.module('myApp', [])
        .controller('myController', ['$scope', function($scope) {
                $scope.food = '';
                $scope.message = '';
                $scope.checkIfTooMuch = function() {
                    if (!$scope.food.length) {
                        $scope.message = 'Please enter data first';
                        return;
                    }
                    let A = $scope.food.split(',');
                    let N = A.length;
                    if (N <= 3) {
                        $scope.message = 'Enjoy!';
                    } else {
                        $scope.message = 'Too much!';
                    }
                };
        }]);
})();