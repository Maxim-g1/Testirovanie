// Массив с вопросами, вариантами ответов и правильными ответами
let userName = prompt('Введите ваше имя')

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
        correctAnswer: "998"
    },
    {
        question: "В каком году пала Западная Римская империя?",
        options: ["486", "1015", "504", "476"],
        correctAnswer: "476"
    },
    {
        question: "Кто в 1914 году убил эрцгерцога Австрии - Франца Фердинанда",
        options: ["Адольф Гитлер", "Александр Керенский", "Владимир Гачинович", "Гаврило Принцип"],
        correctAnswer: "Гаврило Принцип"
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

    optionsElement.addEventListener('click', (e) => {
        let target = e.target
        // Вызвать функцию для перехода к следующиму вопросу и передать текстовое значение кнопки на которую кликнули
        nextQuestion(target.textContent)

    }, { once: true })

}
let otvet = []
// Фунция перехода к следующиму вопросу
function nextQuestion(answer) {
    // Если кликнули на правильный ответ то увеличить на 1 счётчик правильных ответов
    if (answer == questions[currentQuestions].correctAnswer) {
        correctAnswers++
    } else {
        otvet.push(` Вопрос ${currentQuestions + 1}: ${questions[currentQuestions].question}`)
        console.log(questions[currentQuestions].question)
    }
    currentQuestions++ // Перейти к следующиму вопросу
    if (currentQuestions < questions.length) {
        displayQuestion()//отобразить следующий вопрос
    }
    else {
        //отобразить результаты теста
        displayResult()
    }
}


//функция отображения результатов теста
function displayResult() {
    let questionElement = document.getElementById("question")
    let optionsElement = document.getElementById("options")
    let resultElement = document.getElementById("result")
    let oshibkaElement = document.getElementById('oshibka')
    let procent = Math.round(correctAnswers / questions.length * 100)
    let ocenka = Math.floor((correctAnswers + 4) * 0.56)


    questionElement.style.display = 'none' // Отключить видимость блока вопросов
    optionsElement.style.display = 'none'

    resultElement.textContent = `${userName}, ваша оценка ${ocenka} у вас правильных ответов ${correctAnswers} из ${questions.length} (${procent}%),
    Вопросы на которые вы ответили неправильно: `//отобразить результаты теста

    otvet.forEach((otvet) => {
        let div = document.createElement('div')
        div.append(otvet)
        resultElement.append(div)
    })
}



displayQuestion()

