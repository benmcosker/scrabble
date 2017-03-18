(function(angular) {
  'use strict';

  angular
      .module('app')
      .controller('homeController', homeController);


  homeController.$inject = ['letterService', 'wordParseService' , '$timeout'];


  function homeController(letterService, wordParseService, $timeout) {

    /* jshint validthis: true */
    var vm = this;

    vm.errorLetters = false;
    vm.invalidInput = false;
    vm.model = {
      rack: '',
      word: ''
    };
    vm.submitted = false;


    vm.reset = function () {
      vm.submitted = false;
      vm.model.rack = '';
      vm.model.word = '';
      vm.errorLetters = false;
      vm.foundWords = '';
    };

    vm.submit = function () {

      if (checkWordLength()) {
        if (!letterService.checkIfValid(vm.model.rack, vm.model.word)) {
          vm.errorLetters = !vm.errorLetters;
        } else {

          $timeout(activeSpinner(), 100).then(function() {
            vm.foundWords = wordParseService.returnWord(vm.model.rack, vm.model.word);
          });

        }
      } else {
        displayInvalidInputError();
      }
    };

    function activeSpinner () {
      return vm.submitted = true;
    }

    function checkWordLength () {
      return (vm.model.rack.length > 0 && vm.model.rack.length <= 7) && (vm.model.word.length <= 15)  && (vm.model.word.length !== 1);
    }

    function displayInvalidInputError () {
      vm.invalidInput = !vm.invalidInput;
    }

  }

})(angular);
