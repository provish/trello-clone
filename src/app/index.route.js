(function() {
  'use strict';

  angular
    .module('dashboard')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dash', {
        abstract: true,
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('dash.main', {
        url: '/main',
        templateUrl: 'app/main/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dc'
      });

    $urlRouterProvider.otherwise('/main');
  }

})();
