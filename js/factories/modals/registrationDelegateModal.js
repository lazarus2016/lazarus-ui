require('angular');

angular.module('lazarusApp').factory('registrationDelegateModal', function (btfModal) {
    return btfModal({
        controller: 'registrationDelegateModalController',
        templateUrl: '/partials/modals/registrationDelegateModal.html'
    });
});
