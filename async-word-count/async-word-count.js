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
  var funk = (filePathOne, filePathTwo, callback) => {
    var one = getWordCount(filePathOne, callback)
    if (one !== undefined) {
      var two = getWordCount(filePathTwo, callback)
      if (two !== undefined) {
        var result = one + two
        callback(result)
      }
    }
  };
  funk(filePathOne, filePathTwo, callback)
};

module.exports = getTotalWordCount;
