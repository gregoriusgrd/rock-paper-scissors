const choiceBtns = document.querySelectorAll(".choice-btn");

const playerChoiceText = document.querySelector(".player-choice-text");
const cpuChoiceText = document.querySelector(".cpu-choice-text");

const scoreWonText = document.querySelector(".score-won-text");
const scoreDrawText = document.querySelector(".score-draw-text");
const scoreLostText = document.querySelector(".score-lost-text");

const gameTitle = document.querySelector(".game-title");

let playerChoice = "";
let cpuChoice = "";

const choices = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};

choiceBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        disableButtons(true);
        gameTitle.textContent = "Thinking...";

        playerChoiceText.textContent = "✊";
        cpuChoiceText.textContent = "✊";

        playerChoice = btn.value;
        cpuChoice = getCpuChoice();

        playerChoiceText.classList.add("player-choice-text-anim");
        cpuChoiceText.classList.add("cpu-choice-text-anim");

        setTimeout(() => {
            playerChoiceText.textContent = choices[playerChoice];
            cpuChoiceText.textContent = choices[cpuChoice];

            playerChoiceText.classList.remove("player-choice-text-anim");
            cpuChoiceText.classList.remove("cpu-choice-text-anim");

            determineWinner();
            disableButtons(false);
        }, 2000);
    });
});

function getCpuChoice() {
    const options = Object.keys(choices);
    return options[Math.floor(Math.random() * options.length)];
}

function determineWinner() {
    if (playerChoice === cpuChoice) {
        gameTitle.textContent = "It's a Tie!";
        scoreDrawText.textContent = parseInt(scoreDrawText.textContent) + 1;
    } else if (
        (playerChoice === "rock" && cpuChoice === "scissors") ||
        (playerChoice === "paper" && cpuChoice === "rock") ||
        (playerChoice === "scissors" && cpuChoice === "paper")
    ) {
        gameTitle.textContent = "You Win! 🎉";
        scoreWonText.textContent = parseInt(scoreWonText.textContent) + 1;
    } else {
        gameTitle.textContent = "You Lose! 😭";
        scoreLostText.textContent = parseInt(scoreLostText.textContent) + 1;
    }
}

function disableButtons(state) {
    choiceBtns.forEach(btn => btn.disabled = state);
}
