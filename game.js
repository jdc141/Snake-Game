import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from "./snake.js";
import {update as updateFood, draw as drawFood } from "./food.js"
import { outSideGrid } from "./grid.js";

const gameBoard = document.getElementById("game-board");

// Game loop setup
let lastRenderTime = 0
let gameOver = false

function main(currentTime){
    if (gameOver) {
        if (confirm("You Lost. Press OK to restart")) {
            window.location = "https://github.com/jdc141/Snake-Game"
        }
        return
    }


    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return
    }
    
    lastRenderTime = currentTime

    update();
    draw();
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}
function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}
