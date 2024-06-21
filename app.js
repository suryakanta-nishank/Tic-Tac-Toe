let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetbut");
let newGame = document.querySelector("#new");
let message = document.querySelector(".message");
let winnerDisplay = document.querySelector("#winner");
let gameBoard = document.querySelector("#gameBoard");
let turnO = true;

const winPat = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
];

function showWinner(result) {
    if (result === "draw") {
        
        winnerDisplay.innerText = `It's a draw!!!`;
        winnerDisplay.classList.remove("hide");
    } else {
        winnerDisplay.innerText = `Congrtulations ${result} wins!`;
        winnerDisplay.classList.remove("hide");
        
    }
    message.classList.remove("hide");
    gameBoard.classList.add("hide");
}

function checkWinner() {
    for (let pattern of winPat) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);
            return;
        }
    }
    checkDraw();
}

function checkDraw() {
    let allFilled = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            allFilled = false;
            break;
        }
    }
    if (allFilled) {
        showWinner("draw");
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
            checkWinner();
        }
    });
});

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    message.classList.add("hide");
    gameBoard.classList.remove("hide");
    winnerDisplay.classList.add("hide");
    
});

newGame.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    message.classList.add("hide");
    gameBoard.classList.remove("hide");
    winnerDisplay.classList.add("hide");
    
});
