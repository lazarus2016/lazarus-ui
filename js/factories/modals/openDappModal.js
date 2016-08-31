require('angular');

angular.module('lazarusApp').factory('openDappModal', function (btfModal) {
    return btfModal({
        controller: 'openDappModalController',
        templateUrl: '/partials/modals/openDappModal.html'
    });
});
