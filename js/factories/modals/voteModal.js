require('angular');

angular.module('lazarusApp').factory('voteModal', function (btfModal) {
    return btfModal({
        controller: 'voteController',
        templateUrl: '/partials/modals/vote.html'
    });
});
