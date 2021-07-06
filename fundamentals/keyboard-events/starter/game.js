'use strict';
const gameBoard = document.querySelector('#game-board')
const squareCoords = document.createElement('div')
const randomRow = Math.floor(Math.random()*20 +1 -.5)
const randomColumn = Math.floor(Math.random()*20 +1 -.7)
const squareBody = [
    { x: randomRow, y: randomColumn}
]

function displayBlock() {
    squareBody.forEach(position => {
        squareCoords.style.gridColumnStart = position.y
        squareCoords.style.gridRowStart = position.x
        squareCoords.classList.add('snake')
        gameBoard.appendChild(squareCoords)
    })
}
displayBlock()

function goesRight() {
    squareBody.forEach(position => {
        squareCoords.style.gridColumnStart = position.y+=1
    })
}

function goesLeft() {
    squareBody.forEach(position => {
        squareCoords.style.gridColumnStart = position.y-=1
    }) 

}

function goesUp() {
    squareBody.forEach(position => {
        squareCoords.style.gridRowStart = position.x -= 1
    })
}

function goesDown() {
    squareBody.forEach(position => {
        squareCoords.style.gridRowStart = position.x += 1
    })
}

document.addEventListener('keydown', (e) => {
    // console.log(e.key) //esse código mostra o nome do KEY
    console.log(e.key)

    switch (e.key) {
        case "ArrowRight":
            goesRight()
        break;   
        case "ArrowLeft":
            goesLeft()
        break;
        case "ArrowUp":
            goesUp()
        break
        case "ArrowDown":
            goesDown()
        break
        default :
            alert("wrong")
        break
    }
    
})    
