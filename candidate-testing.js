const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = (" ");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? " 
];
let correctAnswers = [
  "Sally Ride", 
  "true",
  "40",
  "Trajectory", 
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

  candidateName = input.question("What is your name?\n");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (let i = 0; i < 5; i++){
    candidateAnswers[i] = input.question(questions[i]);
  
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 
 for (let i = 0; i < 5; i++){
  console.log("Your answer: " + candidateAnswers[i] + ", Correct answer: " + correctAnswers[i] + "\n");
 }

//TODO 3.2 use this variable to calculate the candidates score.
let grades = 0;
//input candidate answers 
for (let i = 0; i < 5; i++){
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
  grades++; 
  }
}
//compare candidate answers to correct answers 
//create a variable to keep score 
// added no score for incorrect answers
// add score for correct answer4s 
// make sure case insensitive 

  let grade; 
  grade = (grades/5)*100
  console.log("Grade:" + grade + "%");
if (grade < 80){
  console.log("Failed");
} else {
console.log("Passed");
}
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello " + candidateName + " Welcome! ");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};