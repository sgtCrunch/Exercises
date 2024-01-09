function guessingGame() {
    const ANSWER = Math.floor(Math.random() * 100);
    let isOver = false;
    let numGuesses = 0;

    return function game(guess) {
        if(isOver) return `Game is over you already won!`;
        numGuesses++;
        if(guess === ANSWER) {
            isOver = true;
            return `You win! You found ${ANSWER} in ${numGuesses} guess(es)!`;
        }
        if(num > ANSWER) return `${num} is too high`;
        if(num < ANSWER) return `${num} is too low`;
    }
}

module.exports = { guessingGame };
