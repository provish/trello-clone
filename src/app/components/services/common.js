(function() {
  'use strict';

  angular
    .module('dashboard')
    .factory('CommonService', commonService);

  /** @ngInject */
  function commonService($http) {
    var API = 'http://api.debatabul.in';
    return {
      getCatAll: function() {
        return $http({
          method: 'GET',
          url: API + '/category/all'
        });
      },
      createCat: function(category) {
        return $http({
          method: 'POST',
          url: API + '/category/all',
          parmas: {
            category: category
          }
        });
      },
      createDashUser: function(user) {
        return $http({
          method: 'POST',
          url: API + '/register/email',
          parmas: {
            ip: '1',
            lat: '0',
            lng: '0',
            device_type: 'web',
            email: user.email,
            password: user.password,
            first_name: user.firstName,
            last_name: user.lastName,
            username: (user.email).split('@')[0],
          }
        });
      },
      getUserDashAll: function() {
        return $http({
          method: 'GET',
          url: API + '/user/dash/all'
        });
      },
    };
  }

})();
