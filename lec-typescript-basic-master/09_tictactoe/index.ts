interface Array<T> {
    has(str: string) : boolean;
}

const table = document.createElement("table");
const trs: HTMLTableRowElement[] = [];
const tds: HTMLTableCellElement[][] = [];
class During {
    O: string[] = [];
    X: string[] = [];
}

let during = new During();

let turn: 'O'|'X' = 'X';
const result: HTMLDivElement = document.createElement('div');

Array.prototype.has = function (str: string) : boolean {
    if (this.indexOf(str) >= 0){
        return true;
    }
    return false;
}

function refreshGame(){
    setTimeout(()=>{
        trs.forEach((tr, idx)=>{
            tds[idx].forEach((td)=>{
                td.textContent = '';
            });
        });
        during = new During();
        (document.querySelector("h1") as HTMLHeadingElement).textContent = "";
    }, 2500);
}

function checkBingo(turn: 'O' | 'X'): boolean{
    if( 
        (
            during[turn].has('00') &&
            (
                (during[turn].has('01') && during[turn].has('02')) || 
                (during[turn].has('11') && during[turn].has('22')) ||
                (during[turn].has('10') && during[turn].has('20'))
            )
        ) || 
        (
            during[turn].has('02') &&
            (
                (during[turn].has('11') && during[turn].has('20')) || 
                (during[turn].has('12') && during[turn].has('22'))
            )
        ) || 
        (
            during[turn].has('20') && during[turn].has('21') && during[turn].has('22')
            
        ) || 
        (
            during[turn].has('01') && during[turn].has('11') && during[turn].has('21')
        ) || 
        (
            during[turn].has('10') && during[turn].has('11') && during[turn].has('12')
        )
    ) {
        return true;
    }
    return false;
}

function reverseTurn(turn : 'O'|'X'){
    return turn === 'O' ? 'X' : 'O';
}

function callback (e: MouseEvent) {
    const trIndex: number = trs.indexOf((e.currentTarget as HTMLTableCellElement).parentNode as HTMLTableRowElement);
    const tdIndex: number = tds[trIndex].indexOf(e.currentTarget as HTMLTableCellElement);

    if( tds[trIndex][tdIndex].textContent === '' ){
        tds[trIndex][tdIndex].textContent = turn;
        during[turn].push(""+trIndex+tdIndex);

        if (checkBingo(turn)){
            (document.querySelector('h1') as HTMLHeadingElement).textContent = `Winner is ${turn}`;
            refreshGame();
        }
        turn = reverseTurn(turn);
    } else {
        console.log(`already ${tds[trIndex][tdIndex].textContent}`);
    }

    if (during['O'].length + during['X'].length === 9 && !checkBingo(turn) && !checkBingo(reverseTurn(turn))){
        (document.querySelector("h1") as HTMLHeadingElement).textContent = "DrawGame";
        refreshGame();
    }
}

for (let i:number = 1; i <=3; i++) {
    const tr: HTMLTableRowElement = document.createElement('tr');
    trs.push(tr);
    tds.push([]);
    for(let j: number = 1; j <= 3; j++){
        const td: HTMLTableCellElement = document.createElement('td');
        td.addEventListener('click', callback);
        tds[i - 1].push(td);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

document.body.appendChild(table);
document.body.appendChild(result);