// Constants used only by the app module
(function(angular) {
  'use strict';

  angular
    .module('app')
    .constant('CONVERSION', {
      REGEX_PATTERN: /^[£|/.|[0]*]?0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9][p]*$/
    });
})(angular);