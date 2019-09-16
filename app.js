let userScope = 0;
let computerScope = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor( Math.random() * 3);
    return choices[randomNumber]
}

function win(userChoice, computerChoice) {
    userScope++;
    userScore_span.innerHTML = userScope;
    computerScore_span.innerHTML = computerScope;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComprWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice )} ${smallUserWord} beats ${convertToWord(computerChoice)}${smallComprWord} You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'),300);
}

function lose(userChoice, computerChoice) {
    computerScope++;
    userScore_span.innerHTML = userScope;
    computerScore_span.innerHTML = computerScope;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComprWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice )} ${smallUserWord} lose to ${convertToWord(computerChoice)}${smallComprWord} You lose!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'),300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComprWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice )} ${smallUserWord} equal  ${convertToWord(computerChoice)}${smallComprWord} It's a draw!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'),300);
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissers";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
                break;
        case "rp":
        case "ps":
        case "sr":
                lose(userChoice, computerChoice);
                break;
        case "rr":
        case "pp":
        case "ss":
                draw(userChoice, computerChoice);
                break;
    }
}

function main() {
    rock_div.addEventListener('click',() => game("r"));
    paper_div.addEventListener('click',() => game("p"))
    scissors_div.addEventListener('click',() => game("s"))
}

main();