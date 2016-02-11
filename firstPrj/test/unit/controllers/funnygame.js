/**
 * Created by k_zenchyk on 2/11/16.
 */


describe('Controller: funnyGame', function() {


    // load the controller's module
    beforeEach(module('gpApp'));

    var funnyGame;
    var scope;

    beforeEach(inject(function ($controller, $rootScope, $underscore) {

        scope = $rootScope.$new();

        funnyGame = $controller('funnyGame', {
            $scope: scope
        });

    }));


    it('should have empty funny_string as initial value', function() {
        expect(scope.funny_string).toBe("");
    });



});
