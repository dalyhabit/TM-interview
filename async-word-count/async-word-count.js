var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  /* START SOLUTION */
  getWordCount(filePathOne, function(err, wordCountOne) {
    if (err) {
      callback(err, null);
      return;
    }

    getWordCount(filePathTwo, function(err, wordCountTwo) {
      if (err) {
        callback(err, null);
        return;
      }

      callback(null, wordCountOne + wordCountTwo);
    });
  });
  /* END SOLUTION */
};

module.exports = getTotalWordCount;
