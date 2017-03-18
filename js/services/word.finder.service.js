(function(angular) {
  'use strict';

  angular
      .module('app')
      .service('wordFinderService', wordFinderService);


  function wordFinderService() {

    return {
      wordFind: _wordFind
    };

    function  _wordFind (hand, wordList) {
      return {
        wordTable: searchArray(wordList),
        handCombination: getCombination(hand),
        findWords: function() {
          var foundWords = [];
          for (var i = 0; i < this.handCombination.length; i++) {
            var testWord = this.handCombination[i];
            var dictionaryTest = this.wordTable[indexItem(testWord)];

            if (dictionaryTest && dictionaryTest.indexOf(testWord) !== -1) {
              foundWords.push(testWord);
            }
          }
          return _(foundWords).uniq();
        }
      };
    }

    function getCombination (array) {
      var result = [];
      for (var i = 0; i < array.length; i ++) {
        var element = array[i];
        result.push([element]);

        var subCombinations = getCombination(array.slice(0, i).concat(array.slice(i+1)));
        for (var j = 0; j < subCombinations.length; j++) {
          result.push([element].concat(subCombinations[j]));
        }
      }
      for (var k = 0; k < result.length; k++) {
        result[k] = result[k].join('');
      }
      return result;
    }


    function searchArray(array) {
      var wordTable = [];
      for (var i = 0, len = array.length; i < len; i++) {
        var word = array[i];
        var index = indexItem(word);
        if (wordTable[index]) {
          wordTable[index].push(word);
        } else {
          wordTable[index] = [word];
        }
      }
      return wordTable;
    }

    function indexItem(str){
      var slug = 0;
      _.each(str, function(i) {
        slug = i;
      });
      return slug;
    }
  }

})(angular);
