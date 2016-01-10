
(function() {
  'use strict';

  angular
    .module('dashboard')
    .controller('DebateController', DebateController);

  /** @ngInject */
  function DebateController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.category = ['Social', 'Mumbai', 'Sexy'];
  }
})();
