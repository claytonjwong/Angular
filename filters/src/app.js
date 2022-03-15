(function () {
    'use strict';

    angular.module('filters', [])
        .controller('filtersController', filtersController);
        filtersController.$inject = ['$scope', '$filter'];
        function filtersController($scope, $filter) {
            const name = "✅ Angular 🙂";
            const output = $filter('uppercase')(name);
            $scope.name = output;
        }
})();