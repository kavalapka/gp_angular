/**
 * Created by k_zenchyk on 2/11/16.
 */

describe('Controller: summController', function() {

    // load the controller's module
    beforeEach(module('gpApp'));

    var summController;
    var scope;

    beforeEach(inject(function ($controller, $rootScope, currencyService) {

        scope = $rootScope.$new();

        summController = $controller('summController', {
            $scope: scope,
            currencyService: currencyService
        });

    }));


    //it('should have AUD as initial electedCurrency', function() {
      //  expect(scope.selectedCurrency).toBe('AUD');
   // });



});