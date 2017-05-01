var questions = [
  ["How many states?", 50],
  ["How many continents?", 7],
  ["How many planets", 7]
];
var question;
var answer;
var response;
var correct = [];
var wrong = [];
var correctAnswers = 0;

function print(message){
  var outputDiv = document.getElementById('output');
  outputDiv.innerHtml = message;
}

function buildList(arr){
  var list = "<ol>";
  for(var i=0; i<arr.length; i++){
    list += "<li>" + arr[i] + "</li>";
  }
  list += "</ol>";
  return list;
}

for(var i=0; i<questions.length; i++){
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
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

