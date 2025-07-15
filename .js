const questions = [
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Mode", "Desktop Oriented Model", "Document Orientation Method"],
    answer: "Document Object Model"
  },
  {
    question: "Which keyword declares a constant in JavaScript?",
    options: ["let", "var", "const", "constant"],
    answer: "const"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Oracle"],
    answer: "Netscape"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "**", "##"],
    answer: "//"
  },
  {
    question: "Which method converts JSON to a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "parse.JSON()"],
    answer: "JSON.parse()"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const scoreBox = document.getElementById('score-box');
const scoreDisplay = document.getElementById('score');

function loadQuestion() {
  const q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';
  feedbackEl.textContent = '';
  nextBtn.disabled = true;

  q.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option-btn');
    button.onclick = () => checkAnswer(button, q.answer);
    optionsEl.appendChild(button);
  });
}

function checkAnswer(selectedBtn, correctAnswer) {
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add('correct');
    } else if (btn === selectedBtn) {
      btn.classList.add('wrong');
    }
  });

  if (selectedBtn.textContent === correctAnswer) {
    feedbackEl.textContent = "Correct!";
    score++;
  } else {
    feedbackEl.textContent = `Wrong! Correct answer was: ${correctAnswer}`;
  }

  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  document.getElementById('question-box').classList.add('hidden');
  scoreBox.classList.remove('hidden');
  scoreDisplay.textContent = score;
}

// Initial load
