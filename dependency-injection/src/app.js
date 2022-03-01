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
        .controller('myController', function ($scope) {  // AngularJS instantiates $scope and provides this to us via dependency injection
            $scope.name = "Angular";
        });
})();