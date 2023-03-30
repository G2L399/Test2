const quizForm = document.getElementById("quiz-form");
const submitBtn = document.getElementById("submit-btn");
const correctAnswers = ["a", "a"];

function calculateScore() {
  let score = 0;
  const userAnswers = [
    quizForm.q1.value,
    quizForm.q2.value
  ];
  
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 1;
    }
  });
  
  return score;
}

function showResults() {
  const score = calculateScore();
  const resultText = "You scored " + score + " out of " + correctAnswers.length + ".";
  alert(resultText);
}

  
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  showResults();
});