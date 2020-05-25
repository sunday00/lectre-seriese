var horizontal = 4;
var vertical = 3;
var colors = ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'white', 'white', 'pink', 'pink'];
var colorCandidate = colors.slice();
var color = [];
var clickFlag = true;
var clickCard = [];
var startTime;
var finishTime;
var completedCards = [];
function shuffle() {
    for (var i = 0; i < colors.length; i++) {
        color = color.concat(colorCandidate.splice(Math.floor(Math.random() * colorCandidate.length), 1));
    }
}
function setCard(horizontal, vertical) {
    clickFlag: false;
    for (var i = 0; i < horizontal * vertical; i++) {
        var card = document.createElement('div');
        card.className = 'card';
        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.style.backgroundColor = color[i];
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        document.querySelector('#wrapper').appendChild(card);
        card.addEventListener('click', function () {
            if (clickFlag && !completedCards.includes(this) && clickCard.length < 2) {
                this.classList.toggle('flipped');
                clickCard.push(this);
            }
            if (clickFlag && clickCard.length == 2) {
                clickFlag = false;
                var colorName1 = clickCard[0].querySelector(".card-back").style.backgroundColor;
                var colorName2 = clickCard[1].querySelector(".card-back").style.backgroundColor;
                if (colorName1 === colorName2) {
                    completedCards.push(clickCard[0]);
                    completedCards.push(clickCard[1]);
                    clickCard = [];
                    clickFlag = true;
                }
                else {
                    setTimeout(function () {
                        clickCard[0].classList.remove("flipped");
                        clickCard[1].classList.remove("flipped");
                        clickCard = [];
                        clickFlag = true;
                    }, 1000);
                }
                if (completedCards.length === horizontal * vertical) {
                    finishTime = new Date();
                    var rawRecord = (finishTime.getTime() - startTime.getTime()) / 1000;
                    console.log(rawRecord);
                    document.querySelector("#wrapper").innerHTML = "";
                    colorCandidate = colors.slice();
                    color = [];
                    clickCard = [];
                    clickFlag = true;
                    completedCards = [];
                    startTime = new Date();
                    shuffle();
                    setCard(horizontal, vertical);
                }
            }
        });
    }
    document.querySelectorAll('.card').forEach(function (el, idx) {
        setTimeout(function () {
            el.classList.add('flipped');
        }, 1000 + 100 * idx);
    });
    setTimeout(function () {
        document.querySelectorAll('.card').forEach(function (el, idx) {
            el.classList.remove('flipped');
        });
        clickFlag = true;
        startTime = new Date();
    }, 3000);
}
shuffle();
setCard(horizontal, vertical);
