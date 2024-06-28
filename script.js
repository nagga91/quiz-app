// script.js

const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "What is the largest planet in our Solar System?",
        answers: ["Earth", "Jupiter", "Mars", "Saturn"],
        correct: 1
    },
    {
        question: "What is the boiling point of water?",
        answers: ["50°C", "100°C", "150°C", "200°C"],
        correct: 1
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: ["Harper Lee", "Mark Twain", "Jane Austen", "Ernest Hemingway"],
        correct: 0
    },
    {
        question: "What is the speed of light?",
        answers: ["300,000 km/s", "150,000 km/s", "400,000 km/s", "100,000 km/s"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const quizBox = document.querySelector('.quiz-box');
const questionElement = document.getElementById('thequestion');
const answersElements = document.querySelectorAll('.material-checkbox input');
const answerLabels = document.querySelectorAll('.checkmark');
const nextButton = document.getElementById('next');

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    answersElements.forEach((el, idx) => {
        el.checked = false;
        answerLabels[idx].textContent = question.answers[idx];
    });
}

nextButton.addEventListener('click', () => {
    const selectedAnswer = Array.from(answersElements).findIndex(el => el.checked);
    if (selectedAnswer === questions[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        quizBox.innerHTML = `<h1>Your final score is ${score}/${questions.length}</h1>`;
    }
});

document.getElementById('start-quiz-btn').addEventListener('click', () => {
    document.getElementById('quiz-modal').style.display = 'none';
    loadQuestion();
});
