(function() {
  'use strict';

  angular
    .module('dashboard')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(CommonService) {
    var vm = this;

    CommonService.getInitializedCards().then(function(data) {
      vm.cards = data;
    }, function(err) {
      console.log(err);
    });

    vm.addCard = function() {
      var cardName = angular.element('#card').val();
      if (!!cardName.trim()) {
        var cardObj = {};
        cardObj[cardName] = [];
        vm.cards.push(cardObj);
      }
    }
  }
})();
