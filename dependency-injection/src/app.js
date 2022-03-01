/*

Dependency Injection:

Design pattern that implements inversion of control for resolving dependencies.

So what does this mean?

❌ "Regular" Control: shows the ShoppingCart is dependent on the CardProcBank1 class.

ShoppingCart()            CardProcBank1() -> charge(number, amount)
ShoppingCart()            CardProcBank2() -> charge(number, amount)

cardProc1 = new CardProcBank1()
cardProc1.charge(number, amount)

cardProc2 = new CardProcBank2()
cardProc2.charge(number, amount)

⭐️ if we change the bank from cardProcBank1 -> cardProcBank2, then we need to change the ShoppingCart! 🚫 this is not flexible!


✅ So the solution is then inversion of control:

ShoppingCart(cardProc)
    cardProc.charge(number, amount)

Dependency Injection (it creates the CardProcBank object on our behalf, so the CardProcBank object can easily be changed without changing the ShoppingCart):
    cardProc = new CardProcBank1() // or new CardProcBank2()
    ShoppingCart(cardProc) // 🙂 the ShoppingCart code doesn't need to change!  Instead the change is within the System which performs the dependency injection
                            // this inversion of control (IoC) is often referred to as "don't call us, we'll call you"
                            // -- ie. instead of ShoppingCart creating a cardProc, the System creates the cardProc and provides it to the ShoppingCart
                            // in our case, the System is AngularJS

CardProcBank1()
    charge(number, amount)

CardProcBank2()
    charge(number, amount)

*/
(function () {
    'use strict';

    angular.module('myApp', [])
        .controller('myController', ['$scope', '$filter', '$injector', Controller]); // the parameters are string literals and are not minified.  The last element in the array is the controller

        function Controller ($scope, $filter, $injector) {  // AngularJS instantiates $scope (service) and provides this to us via dependency injection
            $scope.name = "Angular!!";
            $scope.upper = function () {
                let upCase = $filter('uppercase');
                $scope.name = upCase($scope.name);
            };
            console.log($injector.annotate(Controller)); // ⭐️ this is key to how AngularJS works, ie. dependency injection in Javascript
            // (3) ['$scope', '$filter', '$injector']
            // 0: "$scope"
            // 1: "$filter"
            // 2: "$injector"
            // length: 3
            // [[Prototype]]: Array(0)
        }

    function annotateIsJustAFunction (name, job, blah) {
        return "Hello World!";
    }
    console.log(annotateIsJustAFunction.toString());
    // function annotateIsJustAFunction (name, job, blah) {
    //     return "Hello World!";
    // }
})();

// ✅ minified code work ok
/*
(function(){'use strict';angular.module('myApp',[]).controller('myController',['$scope','$filter','$injector',Controller]);function Controller($scope,$filter,$injector){$scope.name="Angular!!";$scope.upper=function(){let upCase=$filter('uppercase');$scope.name=upCase($scope.name)};console.log($injector.annotate(Controller))}
function annotateIsJustAFunction(name,job,blah){return"Hello World!"}
console.log(annotateIsJustAFunction.toString())})()
*/