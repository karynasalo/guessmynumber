'use strict';

// selecting element/class from the html doc
// console.log(document.querySelector('.message').textContent);
//returns 'Start guessing'
// console.log(document.querySelector('.message'));
//returns the message element on the page

//LECTION71

// DOM = Document Object Mode = Structured representation of HTML Documents. Allows JS to access HTML elements and styles to manipulate them
//change text, HTML attributes and CSS style
//LECTION 72-73
/*
document.querySelector('.message').textContent = 'Correct number!';
document.querySelector('.message').textContent = 'Too high!';
document.querySelector('.message').textContent = 'Too low!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 2;

const x = function () {
  console.log(23);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number :(';
  }
});
//addEventListener('type of event', function expression / function value as an argument) { action;})
*/

// LECTION 74 : Game logic

// const number = Math.trunc(Math.random() * 20 + 1); // random number 1-20s
// document.querySelector('.number').textContent = number;
/*
let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.highscore').textContent = highscore;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').textContent = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  // no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number :(';

    // player wins
  } else if (guess == number) {
    document.querySelector('.message').textContent = 'You guessed it!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // player loses
  } else if (score <= 1) {
    document.querySelector('.message').textContent = 'You lose!';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    // player guesses too high
  } else if (guess > number) {
    document.querySelector('.message').textContent = 'Too high!';
    score--;
    document.querySelector('.score').textContent = score;

    // player guesses too low
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
*/
//Refactoring = restructuring code without changing how it works

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.highscore').textContent = highscore;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').textContent = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  // no input
  if (!guess) {
    displayMessage('No number :(');

    // player wins
  } else if (guess == number) {
    displayMessage('You guessed it!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // player loses
  } else if (score <= 1) {
    displayMessage('You lose!');
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    // player guesses too high
  } else {
    score--;
    document.querySelector('.score').textContent = score;
    displayMessage(guess > number ? 'Too high!' : 'Too low!'); // ternary operator to shorten code
  }
});
