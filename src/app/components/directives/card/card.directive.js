(function() {
  'use strict';

  angular
    .module('dashboard')
    .directive('trelloCard', card);

  /** @ngInject */
  function card() {
    return {
      restrict: 'E',
      scope: {
        taskData: '='
      },
      templateUrl: 'app/components/directives/card/card.temp.html',
      link: function(scope) {
        scope.cardName = Object.keys(scope.taskData)[0];
        scope.tasks = scope.taskData[Object.keys(scope.taskData)[0]];
        scope.showText = false;
        scope.showTextArea = function () {
          scope.showText = true;
        };
        scope.sortAmongAll = {
          connectWith: '.taskCard',
          scroll: false
        }
        scope.addTask = function () {
          scope.tasks.push(angular.element('#task').val());
          angular.element('#task').value = "";
          scope.showText = false;
        }
        scope.cancel = function () {
          angular.element('#task').value = "";
          scope.showText = false;
        }
      }
    };
  }
})();
