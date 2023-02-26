
// const skillOld = document.getElementById('skillOld')
// const skill = document.getElementById('skill')
// const islove = document.getElementById('islove')
// const skillOldText = prompt('Какой язык знаете?', 'Не знаю никакого')
// const skillText = prompt('Какой язык изучаете?', 'Еще не понял')
// const isloveValue = confirm('Вы любите этот язык?')


// skillOld.innerText = skillOldText
// skill.innerText = skillText
// islove.innerText = isloveValue == 'True'?'No':'Yes'


const getRandomNumInRange = (min, max) => {
    const RandomNum = (Math.random() * (max - min) + min).toFixed(0)
    return RandomNum
}

const getTask = () => {
    const simbol =  (Math.random() > 0.5) ? "+": "-"
    const task = `${getRandomNumInRange(0, 100)} ${simbol} ${getRandomNumInRange(0, 100)}` // шаблонная строка
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("myGame").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnsver = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

 const startGameFunc = () => {
    if (!gameState.taskInProcess){
        title.innerText = "Игра началась"
        userAnsver.value = null
        // генерируем задачу и ответ
        const task = getTask()
        // показываем задачу пользоватe
        userTask.innerHTML = task
        userAnsver.hidden = false
        btnGame.innerText = "Проверить!"
        gameState.taskInProcess = true
        // меняем кнопку
        // меняем состояние
    } else{
        // сравнить правильный или нет ответ
        const isRight =  gameState.rightAnswer == userAnsver.value
        // вывести результат+ 
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        // вывестипоздравление
        title.innerText = (isRight) ? "Вы победили!": "Вы проиграли("
        //поменять кнопку и состояние
        btnGame.innerText = "Начать заново"
        gameState.taskInProcess = false
    }
}

btnGame.addEventListener("click", startGameFunc)
userAnsver.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        startGameFunc()
    }
    else if (e.key == "Escape"){
        userAnsver.blur()
    }
})

const choosedEl = document.querySelectorAll(".choosed_block-container > div")
const counterEl = document.querySelector(".choosed_block span")

const choosedState = {
    countsElements: 0, 
}
const changeCount = (value) => {
    choosedState.countsElements += value
    counterEl.innerText = choosedState.countsElements
}

const eventFunc =  (e) => {
    //choosedEl[i].className = "choosed_element"
    if (e.target.className === ""){
        e.target.className = "choosed_element"
        //counterEl.innerText = +counterEl.innerText + 1
        changeCount(1)           
    } else {
        e.target.className = ""
        //counterEl.innerText = counterEl.innerText - 1
        changeCount(-1)
    }
}

for (let i = 0; i < choosedEl.length; i++) {
    choosedEl[i].addEventListener("click", eventFunc)
}
choosedEl[2].removeEventListener("click", eventFunc)


    