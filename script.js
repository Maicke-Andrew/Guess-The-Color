const balls = document.querySelectorAll('.ball')
const scorePlace = document.querySelector('#score')
const btnReset = document.querySelector('#reset-game')
let colorToGuess = document.querySelector('#rgb-color')
let answerText = document.querySelector('#answer')
let score = 0;

const allFunctions = {
    initializeGame: function () {
        answerText.innerHTML = 'Escolha uma cor'
        balls.forEach(item => {
            let firstRgb = Math.floor(Math.random() * 256)
            let secondRgb = Math.floor(Math.random() * 256)
            let thridRgb = Math.floor(Math.random() * 256)
            item.style.backgroundColor = `rgb(${firstRgb}, ${secondRgb}, ${thridRgb})`
            // console.log(item.style.backgroundColor)
            item.addEventListener('click', this.virifyColor)
        })
        allFunctions.whatIsThisColor()
    },
    whatIsThisColor: function () {
        let randomNumber = Math.floor(Math.random() * 6)
        colorToGuess.innerHTML = balls[randomNumber].style.backgroundColor
    },
    virifyColor: function (e) {
        if (e.target.style.backgroundColor === colorToGuess.innerHTML) {
            answerText.innerHTML = 'Acertou!'
            score += 3
            scorePlace.innerHTML = `Placar: ${score}`
        } else if (e.target.style.backgroundColor !== colorToGuess.innerHTML) {
            answerText.innerHTML = 'Errou! Tente novamente!'
        }
    }
}

scorePlace.innerHTML = `Placar: ${score}`
btnReset.addEventListener('click', allFunctions.initializeGame)
allFunctions.initializeGame();