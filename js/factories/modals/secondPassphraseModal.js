require('angular');

angular.module('lazarusApp').factory('secondPassphraseModal', function (btfModal) {
    return btfModal({
        controller: 'secondPassphraseModalController',
        templateUrl: '/partials/modals/secondPassphraseModal.html'
    });
});
