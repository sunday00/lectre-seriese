const horizontal = 4;
const vertical = 3;
const colors =  ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'white', 'white', 'pink', 'pink'];

let colorCandidate: string[] = colors.slice();
let color: string[] = [];
let clickFlag: boolean = true;
let clickCard: HTMLDivElement[] = [];
let startTime: Date;
let finishTime: Date;

let completedCards: HTMLDivElement[] = [];

function shuffle (): void {
    for( let i=0; i < colors.length; i++ ){
        color = color.concat( colorCandidate.splice( Math.floor( Math.random() * colorCandidate.length ), 1 ) );
    }
}

function setCard(horizontal:number, vertical:number): void{
    clickFlag: false;
    for( let i=0; i < horizontal*vertical; i++){
        const card: HTMLDivElement = document.createElement('div');
        card.className = 'card';
        const cardInner: HTMLDivElement = document.createElement('div');
        cardInner.className = 'card-inner';
        const cardFront: HTMLDivElement = document.createElement('div');
        cardFront.className = 'card-front';
        const cardBack: HTMLDivElement = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.style.backgroundColor = color[i];
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

        (document.querySelector('#wrapper') as HTMLDivElement).appendChild(card);

        card.addEventListener('click', function (this: HTMLDivElement){
            if(clickFlag && !completedCards.includes(this) && clickCard.length < 2){
                this.classList.toggle('flipped');
                clickCard.push(this);
            }
            if( clickFlag && clickCard.length == 2 ){
                clickFlag = false;
                const colorName1: string = (clickCard[0].querySelector(".card-back") as HTMLDivElement).style.backgroundColor;
                const colorName2: string = (clickCard[1].querySelector(".card-back") as HTMLDivElement).style.backgroundColor;
                if ( colorName1 === colorName2 ){
                    completedCards.push(clickCard[0]);
                    completedCards.push(clickCard[1]);
                    clickCard = [];
                    clickFlag = true;
                } else {
                    setTimeout(function(){
                        clickCard[0].classList.remove("flipped");
                        clickCard[1].classList.remove("flipped");
                        clickCard = [];
                        clickFlag = true;
                    }, 1000);
                }

                if( completedCards.length === horizontal * vertical ){
                    finishTime = new Date();
                    let rawRecord = (finishTime.getTime() - startTime.getTime()) / 1000;
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

    document.querySelectorAll('.card').forEach((el: HTMLDivElement, idx: number)=>{
        setTimeout(()=>{
            el.classList.add('flipped');
        }, 1000 + 100 * idx);
    });

    setTimeout(()=>{
        document.querySelectorAll('.card').forEach((el: HTMLDivElement, idx: number)=>{
            el.classList.remove('flipped');
        });
        clickFlag = true;
        startTime = new Date();
    }, 3000);
}

shuffle();
setCard(horizontal, vertical);