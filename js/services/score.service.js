(function(angular) {
  'use strict';

  angular
      .module('app')
      .service('scoreService', scoreService);

  scoreService.$inject = ['LETTER_CONSTANT'];

  function scoreService(LETTER_CONSTANT) {

    return {
      getScore: _getScore
    };

    function _getScore(word) {
      var wordToScoreArray = word.split('');
      var wordPoints = [];
      var pointsTotal = 0;
      for (var i=0; i < wordToScoreArray.length; i++) {
        wordPoints[i] =  _.findWhere(LETTER_CONSTANT, {letter: wordToScoreArray[i]});
        pointsTotal = wordPoints[i].score + pointsTotal;
      }
      return pointsTotal;
    }

  }

})(angular);
