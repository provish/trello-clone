(function() {
  'use strict';

  angular
    .module('dashboard')
    .factory('CommonService', commonService);

  /** @ngInject */
  function commonService($q) {
    var cardData = [{
      'Card 1': ['Task11', 'Task12', 'Task13', 'Task14', 'Task15', 'Task16']
    }, {
      'Card 2': ['Task21', 'Task22', 'Task23', 'Task24', 'Task25', 'Task26']
    }, {
      'Card 3': ['Task31', 'Task32', 'Task33', 'Task34', 'Task35', 'Task36']
    }, {
      'Card 4': ['Task41', 'Task42', 'Task43']
    }];
    return {
      getInitializedCards: function() {
        var deffered = $q.defer();
        deffered.resolve(cardData);
        return deffered.promise;
      }
    }
  }

})();
