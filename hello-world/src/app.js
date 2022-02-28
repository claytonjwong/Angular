(function () {
    'use strict';

    angular.module('helloWorld', [])
        .controller('helloWorldController', function ($scope) { // angular provides data binding to ng-controller in the view (HTML)
            $scope.name = "✅ Angular 🙂";
        });

    //
    // 🚫 low cohesion + 🚫 tight coupling example for why we would prefer ✅ Model-View-ViewModel design pattern (MVVM) instead:
    //
    document.addEventListener('DOMContentLoaded', contentLoaded);
    function contentLoaded(event) {
        document.getElementById('name').addEventListener('keyup', keyUp);
    }

    function keyUp(event) {
        calculateNumericOutput();
    }

    // 🚫 low cohesion: this one function does 3 separate and distinct actions...
    // 1. reads name input from input text field from the view
    // 2. calculates the numeric value of the name
    // 3. writes the numeric value to the output text field of the view
    function calculateNumericOutput() {
        let s = document.getElementById('name').value;  // tight coupling between JS + HTML
        let x = s.split('').map(c => c.charCodeAt(0)).reduce((a, b) => a + b);
        let output = `Total numeric value: ${x}`;
        document.getElementById('output').innerText = output; // tight coupling between JS + HTML
    }
})();