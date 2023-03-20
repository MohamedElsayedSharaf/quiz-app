let startBtn = document.getElementById('start-btn')
let nextBtn = document.getElementById('next-btn')
let questionContainer  = document.getElementById('question-container')
let questionElement = document.getElementById('question')
let answerBtnElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame()
{
    startBtn.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random()- 0.5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion()
{
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerHTML = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnElement.appendChild(button)
        
    });
}
function resetState() {
    nextBtn.classList.add('hide')
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild
        (answerBtnElement.firstChild)
    }
}
function selectAnswer(e)
{
    let selectedBtn = e.target
    let correct = selectedBtn.dataset.correct
    setStatusclass(document.body, correct)
    Array.from(answerBtnElement.children).forEach(button => {
        setStatusclass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextBtn.classList.remove('hide')
    }else{
        startBtn.innerHTML = 'Restart'
        startBtn.classList.remove('hide')
    }
  
}

function setStatusclass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

let questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false},
            { text: '44', correct: false},
            { text: '8', correct: false}
        ]
    }
]