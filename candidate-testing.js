const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


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
let numCorrect = 0;

//let currentQuestionIndex = 0;
let score = 0;


//runProgram() 

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  for (let i = 0; i < questions.length; i++){
    candidateAnswers.push(input.question(questions[i]));
    //gradeQuiz(candidateAnswers);
  }

  //candidateAnswers.push(input.question(questions[currentQuestionIndex]));
  //gradeQuiz(candidateAnswers);
  


}

function gradeQuiz(candidateAnswers) {
  
  let grade = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  
  for (let i = 0; i < questions.length; i++){
    console.log(`Your Answer: ${candidateAnswers[i]}`)
    console.log(`Correct Answer: ${correctAnswers[i]}`)
    if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()){
      grade += 20
      numCorrect += 1
    } else {
      grade += 0
    }
  }


    //TODO 3.2 use this variable to calculate the candidates score.

  
  //console.log(grade)
  //currentQuestionIndex += 1;
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hello there ${candidateName}!`);
  // for (let i = 0; i < questions.length; i++){
  //   askQuestion();
  //   score += gradeQuiz(this.candidateAnswers);
    //console.log("Score is", score);
    //console.log(gradeQuiz(this.candidateAnswers))
  // }
  askQuestion();
  score += gradeQuiz(this.candidateAnswers);
  //console.log("Score is", score);
  //let percentageGrade = score / questions.length * 100
  let gradeStatus = "";
  if (score > 80){
    gradeStatus += "PASSED";
  } else {
    gradeStatus += "FAILED";
  }
  console.log(`>>> Overall Grade: ${score}% (${numCorrect} of ${questions.length} responses correct) <<<`);
  console.log(`>>> Status: ${gradeStatus} <<<`);
  
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