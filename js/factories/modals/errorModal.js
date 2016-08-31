require('angular');

angular.module('lazarusApp').factory('errorModal', function (btfModal) {
    return btfModal({
        controller: 'errorModalController',
        templateUrl: '/partials/modals/errorModal.html'
    });
});
