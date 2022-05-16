import { getInputDirection } from "./direction.js";

export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export function draw(board) {
    snakeBody.forEach(segment => {
        const snakeBodyPart = document.createElement("div");
        snakeBodyPart.classList.add("snake");
        snakeBodyPart.style.gridColumnStart = segment.x;
        snakeBodyPart.style.gridRowStart = segment.y;
        board.appendChild(snakeBodyPart);
    });
}

function addSegmentsToSnake() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    newSegments = 0
}

export function update() {
    addSegmentsToSnake();
    const inputDirection = getInputDirection();
    if (inputDirection.x == 0 && inputDirection.y == 0) {
        return;
    }
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function checkForFoodIntersectionOnSnake(foodPosition, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index == 0) {
            return false;
        }
        return segment.x === foodPosition.x && segment.y === foodPosition.y
    });
}

export function expandSnake(rate) {
    newSegments += rate;
}

export function getSnakeHead() {
    return snakeBody[0];
}