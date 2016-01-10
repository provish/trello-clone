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
      .state('dash.debate', {
        url: '/debate',
        templateUrl: 'app/main/debate/debate.html',
        controller: 'DebateController',
        controllerAs: 'dc'
      })
      .state('dash.user', {
        url: '/user',
        templateUrl: 'app/main/user/user.html',
        controller: 'UserController',
        controllerAs: 'uc'
      })
      .state('dash.category', {
        url: '/category',
        templateUrl: 'app/main/category/category.html',
        controller: 'CategoryController',
        controllerAs: 'cc'
      });

    $urlRouterProvider.otherwise('/debate');
  }

})();
