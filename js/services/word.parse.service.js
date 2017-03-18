(function(angular) {
  'use strict';

  angular
      .module('app')
      .service('wordParseService', wordParseService);

  wordParseService.$inject = ['WORD_CONSTANT', 'wordFinderService', 'scoreService'];

  function wordParseService(WORD_CONSTANT, wordFinderService, scoreService) {

    return {
      returnWord: _returnWord
    };

    function _returnWord(rackField, wordField) {
      if (wordField.length === 0) {
        return findWord(rackField, wordField);
      } else {
        var results = [];
        for (var i = 0;i < wordField.length ;i++) {
          results[i] =  findWord(rackField, wordField.charAt(i));
        }
        return findWinningWord(results);
      }
    }

    function findWord (rackField, wordField) {
      var combo = (rackField + wordField).toUpperCase();
      var foundWords;
      var word = WORD_CONSTANT;
      var finalScore = [{
        word: null,
        score: null
      }];

      foundWords = wordFinderService.wordFind(combo, word).findWords();
      for (var j = 0; j < foundWords.length; j++){
        finalScore.push({word: foundWords[j], score: scoreService.getScore(foundWords[j])});
      }

      return findWinningWord(finalScore);
    }

    function findWinningWord (finalScore) {
      var highestScore = _.toArray(_.groupBy(finalScore, function(num){ return Math.floor(num.score); }));
      return  _.sortBy(_.flatten(highestScore.slice(-1, highestScore.length)), 'word')[0];
    }

  }

})(angular);
