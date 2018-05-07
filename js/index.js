var message = '';
var word;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getwordReport( word ) {
  var report = '<h2>Word: ' + word.id + '</h2>';
  report += '<p>hasAlreadyCollected: ' + word.hasAlreadyCollected + '</p>';
  report += '<p>Wordsticker: ' + word.Wordsticker + '</p>';
  report += '<p>numberOfTimesLearned: ' + word.numberOfTimesLearned + '</p>';
  return report;
}

while (true) {
  search = prompt('Search word records: type a id [Hello] (or type "quit" to end)');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < words.length; i += 1) {
    word = words[i];
    if ( word.id === search ) {
      message = getwordReport( word );
      print(message, words);
    }
  }
}