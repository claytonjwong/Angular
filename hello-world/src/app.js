(function () {
    'use strict';

    angular.module('nameCalculator', [])
        .controller('nameCalculatorController', function($scope) {
            $scope.name = "✅ Angular 🙂";
            $scope.total = $scope.name.split('').map(c => c.charCodeAt(0)).reduce((a, b) => a + b, 0);
            $scope.keyUp = function() {
                $scope.total = calculateNumericOutput();
            }
            function calculateNumericOutput() {
                return $scope.name.split('').map(c => c.charCodeAt(0)).reduce((a, b) => a + b, 0);
            }
        });
})();