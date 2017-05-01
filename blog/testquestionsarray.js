
var questions = [
  ["How many states?", 50],
  ["How many continents?", 7],
  ["How many planets", 8]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong = [];
var html;

function print(message){
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}


function buildList(arr){
  var listHTML = '<ol>';
  for(var i=0; i<arr.length; i+=1){
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}


for(var i=0; i<questions.length; i+=1){
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  if(response === answer){
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

html = "You got" + correctAnswers + "questions correct";
html += "<h2> You got these questions correct: </h2>";
html += buildList(correct);
html += "<h2>You got these questions wrong:</h2>";
html += buildList(wrong);

print(html);

