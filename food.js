import { generateRandomGridPosition } from "./utils.js";
import { checkForFoodIntersectionOnSnake, expandSnake } from "./snakes.js";

const EXPANSION_RATE = 1;
let food = generateFoodPosition();

export function generateFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || checkForFoodIntersectionOnSnake(newFoodPosition)) {
        newFoodPosition = generateRandomGridPosition();
    }
    return newFoodPosition;
}

export function draw(board) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    board.appendChild(foodElement)
}

export function update() {
    if (checkForFoodIntersectionOnSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = generateFoodPosition();
    }
}