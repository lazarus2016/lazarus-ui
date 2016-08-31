require('angular');

angular.module('lazarusApp').factory('transactionInfo', function (btfModal) {
    return btfModal({
        controller: 'transactionInfoController',
        templateUrl: '/partials/modals/transactionInfo.html'
    });
});
