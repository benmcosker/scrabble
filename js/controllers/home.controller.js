(function(angular) {
  'use strict';

  angular
      .module('app')
      .controller('homeController', homeController);


  homeController.$inject = ['letterValue', 'wordValue'];


  function homeController(letterValue, wordValue) {

    /* jshint validthis: true */
    var vm = this;
    vm.invalidInput = false;
    vm.model = {
      rack: '',
      word: '',
      allowed: ''
    };

    vm.errorLetters = {
      letter: ''
    };


    var combinedInput;
    var letterList = letterValue.letter;
    var uniqueLetters;
    var inputCharacterCount = {
      letter: '',
      count: '',
      allowed: ''
    };

    vm.submit = function () {
      if (checkWordLength()) {
        console.log('passed');
        parseInput();
      } else {
        console.log('failed');
        displayInvalidInputError();
      }
    };

    function countOccurances(string, char) {
      var re = new RegExp(char,'gi');
      return string.match(re).length;
    }

    function parseInput () {
      combinedInput = (vm.model.rack + vm.model.word).toUpperCase();
      uniqueLetters = _.uniq(combinedInput);
      for (var i=0; i < uniqueLetters.length; i+=1) {
        inputCharacterCount[i] = {
          letter: uniqueLetters[i],
          count: countOccurances(combinedInput, uniqueLetters[i]),
          allowed: _.findWhere(letterList, {letter: uniqueLetters[i]}).count
        };

        if (inputCharacterCount[i].count > inputCharacterCount[i].allowed) {
          vm.errorLetters = {
            letter: uniqueLetters[i]
          };
        }
      }
    }


    function displayInvalidInputError () {
      vm.invalidInput = !vm.invalidInput;
    }

    function checkWordLength () {
      return (vm.model.rack.length > 0) && vm.model.rack.length + vm.model.word.length <= 15;
    }

  }

})(angular);
