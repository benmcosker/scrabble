(function(angular) {
  'use strict';

  angular
      .module('app')
      .service('letterService', letterService);

  letterService.$inject = ['LETTER_CONSTANT'];

  function letterService(LETTER_CONSTANT) {

    return {
      checkIfValid: _checkIfValid
    };


    function _checkIfValid(rack, word) {
      var inputCharacterCount = {
        letter: '',
        counter: '',
        allowed: ''
      };
      var combinedInput = (rack + word).toUpperCase();
      var uniqueLetters = _.uniq(combinedInput);

      for (var i=0; i < uniqueLetters.length; i++) {
        inputCharacterCount[i] = {
          //letter: uniqueLetters[i],
          counter: parseInt(countOccurrences(combinedInput, uniqueLetters[i])),
          allowed: parseInt(_.findWhere(LETTER_CONSTANT, {letter: uniqueLetters[i]}).count)
        };

        if (inputCharacterCount[i].counter > inputCharacterCount[i].allowed) {
          return false;
        }
      }
      return true;

    }

    function countOccurrences(string, char) {
      var re = new RegExp(char,'gi');
      return string.match(re).length;
    }

  }

})(angular);
