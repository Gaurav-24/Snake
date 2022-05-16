import { SNAKE_SPEED, draw as drawSnake, update as updateSnake, getSnakeHead, checkForFoodIntersectionOnSnake } from "./snakes.js";
import { draw as drawFood, update as updateFood } from "./food.js";
import { outsideGrid } from "./utils.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function render(currentTime) {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.location = '/'
        }
        return
    }
    window.requestAnimationFrame(render);
    const elapsedTime = (currentTime - lastRenderTime) / 1000;
    if (elapsedTime < 1 / SNAKE_SPEED) {
        return;
    }
    lastRenderTime = currentTime;
    update();
    draw();
}
window.requestAnimationFrame(render);

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkForFailure() {
    const checkOutside = outsideGrid(getSnakeHead());
    const checkIntersection = checkForFoodIntersectionOnSnake(getSnakeHead(), { ignoreHead: true });
    gameOver = checkOutside || checkIntersection;
}

function update() {
    updateSnake();
    checkForFailure();
    updateFood();
}