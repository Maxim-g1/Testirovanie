// Массив с вопросами, вариантами ответов и правильными ответами

let questions = [
    {
        question: "В каком году началась Вторая Мировая война?",
        options: ["1941", "1939", "1942", "1938"],
        correctAnswer: "1939"
    },
    {
        question: "Чем увлекался Адольф Гитлер до становления фюрером?",
        options: ["Архитектурой", "Садоводством", "Футболом", "Живописью"],
        correctAnswer: "Живописью"
    },
    {
        question: "Кто Иосиф Сталин по национальности?",
        options: ["Грузин", "Русский", "Турок", "Азербайджанец"],
        correctAnswer: "Грузин"
    },
    {
        question: "В каком году крестили Русь?",
        options: ["567", "998", "988", "1017"],
        correctAnswer: "1939"
    },
    {
        question: "В каком году распалась Римская империя?",
        options: ["486", "476", "504", "2007"],
        correctAnswer: "1939"
    },
]

let currentQuestions = 0 // Текущий вопрос
let correctAnswers = 0 // Количество правильных ответов


// Фунция для отображения текущего вопроса и вариантов ответов
function displayQuestion() {
    let questionElement = document.getElementById("question")
    questionElement.textContent = `Вопрос ${currentQuestions + 1}: ${questions[currentQuestions].question}`
    let optionsElement = document.getElementById("options")
    optionsElement.innerHTML = ''// Очищаем содержимое блока optionsElement
    let optionsArray = questions[currentQuestions].options
    optionsArray.forEach((option) => {
        let button = document.createElement('button')
        optionsElement.append(button)
        button.textContent = option
        button.classList.add('btnOp')
    })

}



displayQuestion()

