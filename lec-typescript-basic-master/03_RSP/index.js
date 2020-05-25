"use strict";
let imgCoords = 0;
const sample = {
    a: ["sdf", "sdf"],
    b: ["sdf"]
};
const hi1 = "";
const hi2 = {
    name: "hi2"
};
const RSP = {
    ROCK: 0,
    SCISSORS: -142,
    PAPER: -284
};
const score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1
};
function computerChoice(imgCoords) {
    return Object.keys(RSP)
        .find((k) => RSP[k] === imgCoords);
}
// function computerChoice2(imgCoords: Rsp[keyof Rsp]): keyof Rsp {
//     return (Object.keys(RSP) as ['ROCK', 'SCISSORS', 'PAPER'])
//         .find((k) => RSP[k] === imgCoords ) || 'ROCK';
// }
// function computerChoice3(imgCoords: Rsp[keyof Rsp]): keyof Rsp {
//     return ((Object.keys(RSP))[Math.floor(Math.random() * 3)] as 'ROCK' | 'PAPER' | 'SCISSORS');
// }
let interval = 0;
let point = 0;
let result = document.querySelector("#result");
document.querySelector("#point").textContent = point.toString();
document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', function (e) {
        clearInterval(interval);
        document.querySelectorAll('.btn').forEach((b) => { b.setAttribute('disabled', 'true'); });
        const myChoice = this.textContent;
        const myScore = score[myChoice];
        const computerScore = score[computerChoice(imgCoords)];
        const diff = myScore - computerScore;
        if (diff === 0) {
            result.textContent = "same";
            console.log(result);
        }
        else if ([-1, 2].includes(diff)) {
            result.textContent = "win";
            console.log(result);
            point++;
        }
        else {
            result.textContent = "loose";
            console.log(result);
            point--;
        }
        setTimeout(() => {
            intervalMaker();
            result.textContent = "";
        }, 2000);
        document.querySelector("#point").textContent = point.toString();
    });
});
function intervalMaker() {
    interval = setInterval(() => {
        if (imgCoords === RSP.ROCK) {
            imgCoords = RSP.SCISSORS;
        }
        else if (imgCoords === RSP.SCISSORS) {
            imgCoords = RSP.PAPER;
        }
        else {
            imgCoords = RSP.ROCK;
        }
        const computer = document.querySelector('#computer');
        if (computer) {
            // (document.querySelector('#computer') as HTMLDivElement).style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords}px 0`;
            computer.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords}px 0`;
        }
    }, 50);
    document.querySelectorAll('.btn').forEach((b) => { b.removeAttribute('disabled'); });
}
intervalMaker();
