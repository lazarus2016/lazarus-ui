require('angular');

angular.module('lazarusApp').factory('forgingModal', function (btfModal) {
    return btfModal({
        controller: 'forgingModalController',
        templateUrl: '/partials/modals/forgingModal.html'
    });
});
