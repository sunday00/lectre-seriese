const { body } = document;
let candidate: number[] = [];
let array: number[] = [];

function chooseNumber(): void {
    for(let i=1; i<10; i++){
        candidate.push(i);
    }
    for(let i=0; i<4; i++){
        const chosen = candidate.splice(Math.floor( Math.random()*(9 - i) ), 1)[0];
        array.push(chosen);
    }
}

chooseNumber();

// const result = document.createElement('h1');
// body.append(result);
// const form = document.createElement('form');
// body.append(form);
// const input = document.createElement('input');
// form.append(input);

let result: HTMLHeadingElement = document.querySelector('#result');
const form: HTMLFormElement = document.querySelector('form');
let input: HTMLInputElement = document.querySelector('input');
let wrongCnt: number = 0;
let ul: HTMLUListElement = document.querySelector('ul');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const answer: string = input.value;
    if( answer === array.join('') ){
        result.textContent = "Perfect";
        input.value = '';
        input.focus();
        chooseNumber();
        wrongCnt = 0;
    } else {
        let answerArr: number[] = answer.split('').map((n)=>{return Number(n);});
        let strike: number = 0;
        let ball: number = 0;
        wrongCnt++;
        if (wrongCnt > 10){
            result.textContent = "fail. Correct answer is "+array.join(',')+".";
        } else {
            for( let i = 0; i <= 3; i++ ){
                if( answerArr[i] === array[i] ){
                    strike++;
                } else if( array.indexOf( answerArr[i] ) > -1) {
                    ball++;
                }
            }

            let li: HTMLLIElement = document.createElement('li');
            result.textContent = `${strike}strike, ${ball}ball`;

            li.textContent = `${result.textContent} ${input.value}`;
            ul.append(li);
            
            input.value = "";
            input.focus();
            
        }
    }
});