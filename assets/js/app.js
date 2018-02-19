const play = $('#play');
const triviaQ = `https://opentdb.com/api.php?amount=10`;
let i= 0;
let score=0;
let correct_answer = [];
let options = [];


play.click(function() {
  start();
  $('#init').hide();
});

function start() {
  let html = [];
  let trufal = `<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-md-offset-3 col-lg-offset-3">
  <a class="" onclick=trueOrFalse();>True or False</a>
  </div>`;
  let multiChoice = `<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
  <a class="" onclick=multipleChoice();>Multiple choice</a>
  </div>`;
  html.push(trufal + multiChoice);
  $('#container').html(html);
  play.remove();
}

function trueOrFalse() {
  fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean`).
  then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let question = data.results[0].question;
    let display = `<div class="col-xs-12 text-center">
    <div>
    <div>
    <span>
    Question number ${i + 1}</span>
    <p class="questions">${question}</p>
    <span class="card-title">
    Score ${score}</span>
    </div>
    <div class="card-action">
    <a class="" onclick="btnTrue();" id="True">True</a>
    <a class="" onclick="btnFalse();" id="False">False</a>
    </div>
    </div>
    </div>`;
    $('#container').html(display);
  })
  .catch(function(error) {
    console.log(error);
  });
}

function btnTrue() {
  fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean`).
  then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let respuesta= data.results[0].correct_answer;
    console.log(respuesta);
    if (respuesta === "True" ){
      alert('Correcto..!');
      score ++;
    } else {
      alert('respuesta incorrecta');
    }
    i++})
  respuesta= '';
  trueOrFalse()};

  function btnFalse() {
    fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean`).
    then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let respuesta= data.results[0].correct_answer;
      console.log(respuesta);
      if (respuesta === "False" ){
        alert('Correcto..!');
        score ++;
        i++;
      } else {
        alert('respuesta incorrecta');
      }
      i++})
    respuesta= '';
    trueOrFalse()};

function multipleChoice() {
  fetch(`https://opentdb.com/api.php?amount=10&type=multiple`).
    then(function(response) {
      return response.json();
    })
    .then(function(data) {
    let question = data.results[0].question;

    correct_answer = data.results[0].correct_answer;
    console.log(correct_answer);
      let incorrect_answers = data.results[0].incorrect_answers;
      options = incorrect_answers;
      options.push(correct_answer);
      options.sort();
    let display = `<div class="col-xs-12 text-center">
    <div>
    <div>
    <span>
    Question number ${i + 1}</span>
    <p class="questions">${question}</p>
    <span class="card-title">
    Score ${score}</span>
    </div>
    <div class="card-action">
    <a class="" onclick="checking()">${options[0]}</a>
    <a class="" onclick="checking1()">${options[1]}</a>
    <a class="" onclick="checking2()">${options[2]}</a>
    <a class="" onclick="checking3()">${options[3]}</a>
    </div>
    </div>
    </div>`;
    $('#container').html(display);
  })
  .catch(function(error) {
    console.log(error);
  });
}

function checking() {
  fetch(`https://opentdb.com/api.php?amount=10&type=multiple`).
    then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let click = options[0];
      if (correct_answer == click){
        alert('Correcto..!');
        score ++;
        i++;
      } else {
        alert('respuesta incorrecta');
      }
      i++})
    respuesta= '';
    multipleChoice()};

function checking1() {
  fetch(`https://opentdb.com/api.php?amount=10&type=multiple`).
    then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let click = options[1];
      if (correct_answer == click){
        alert('Correcto..!');
        score ++;
        i++;
      } else {
        alert('respuesta incorrecta');
      }
      i++})
    respuesta= '';
    multipleChoice()};

function checking2() {
  fetch(`https://opentdb.com/api.php?amount=10&type=multiple`).
    then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let click = options[2];
      if (correct_answer == click){
        alert('Correcto..!');
        score ++;
        i++;
      } else {
        alert('respuesta incorrecta');
      }
      i++})
    respuesta= '';
    multipleChoice()};

function checking3() {
  fetch(`https://opentdb.com/api.php?amount=10&type=multiple`).
    then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let click = options[3];
      if (correct_answer == click){
        alert('Correcto..!');
        score ++;
        i++;
      } else {
        alert('respuesta incorrecta');
      }
      i++})
    respuesta= '';
    multipleChoice()};