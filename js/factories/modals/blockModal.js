require('angular');

angular.module('lazarusApp').factory('blockModal', function (btfModal) {
    return btfModal({
        controller: 'blockModalController',
        templateUrl: '/partials/modals/blockModal.html'
    });
});
