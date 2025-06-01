const quizData = [
  {
    question: "What is the capital of France?", // Fixed typo: 'quesion' to 'question'
    options: ["1. Berlin", "2. Madrid", "3. Paris", "4.Rome"],
    answer: "3", // Changed to just the option number for consistent comparison
  },
  {
    question: "Which planet is known as the 'Red Planet' ?",
    options: ["1.Earth", "2.Mars", "3.Jupiter", "4.Venus"],
    answer: "2", // Changed to just the option number
  },
  {
    question: "What is 7*8?",
    options: ["1. 54", "2. 56", "3. 58", "4. 60"],
    answer: "2", // Changed to just the option number
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "1. Atlantic Ocean",
      "2. Indian Ocean",
      "3. Arctic Ocean",
      "4. Pacific Ocean",
    ],
    answer: "4", // This was already correct
  },
];

let score = 0;
console.log("Welcome to the quiz !.."); // Fixed typo: 'Welocme' to 'Welcome'
console.log("Answer by typing the number corresponding to your choice");

for (let i = 0; i < quizData.length; i++) {
  // Corrected: currentQuestion should be the whole object
  const currentQuizItem = quizData[i];

  let userAnswer = prompt(
    // Now access properties correctly from currentQuizItem
    currentQuizItem.question + "\n" +
    currentQuizItem.options.join("\n") +
    "\n\nEnter your answer (number):"
  );

  // Compare userAnswer (string number) with currentQuizItem.answer (string number)
  if (userAnswer === currentQuizItem.answer) {
    console.log("Correct answer!"); // Added exclamation for consistency
    score++;
  } else {
    // Dynamically display the correct option text, not just the number
    // Find the option string that starts with the correct answer number
    const correctAnswerText = currentQuizItem.options.find(option =>
        option.startsWith(currentQuizItem.answer + '.')
    ) || `(Option ${currentQuizItem.answer})`; // Fallback if not found (shouldn't happen with correct data)

    console.log(`Incorrect answer. The correct answer was ${correctAnswerText}`);
  }
  console.log("----------------------------------");
}

console.log("Quiz completed !..");
console.log(`Your final score is ${score} out of ${quizData.length}.`);

if (score === quizData.length) {
  console.log("Congratulations! You answered all questions correctly.");
} else if (score >= quizData.length / 2) {
  console.log("You passed the quiz!"); // Added exclamation
} else {
  console.log("You did not pass the quiz. Better luck next time!");
}