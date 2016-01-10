(function() {
  'use strict';

  angular
    .module('dashboard')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($timeout, webDevTec, toastr, CommonService) {
    var vm = this;
    vm.createDashUser = function (user) {
      console.log(user);
      CommonService.createDashUser(user).then(function (data) {
        toastr.success(data);
      }, function (err) {
        toastr.error(err);
      })
    }
  }
})();
