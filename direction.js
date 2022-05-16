let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 };
let lastInputDirectionBeforePause;
let isPaused = false;

window.addEventListener("keydown", updateInputDirection);

export function updateInputDirection(e) {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0)
                break;
            inputDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (lastInputDirection.y !== 0)
                break;
            inputDirection = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0)
                break;
            inputDirection = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (lastInputDirection.x !== 0)
                break;
            inputDirection = { x: 1, y: 0 };
            break;
        case ' ':
            if (inputDirection.x == 0 && inputDirection.y == 0) {
                inputDirection = lastInputDirectionBeforePause;
            } else {
                lastInputDirectionBeforePause = inputDirection;
                inputDirection = { x: 0, y: 0 };
            }
            break;
        default:
            break;
    }
}
export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}