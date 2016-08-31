require('angular');

angular.module('lazarusApp').service('dappsService', function () {

    var dapp = {
        searchForDapp: '',
        searchForDappGlobal: ''
    }

    return dapp;

});
