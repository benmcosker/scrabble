(function(angular) {
  'use strict';

  angular
    .module('app', ['ngSanitize'])
    .constant('_', window._);
})(angular);
