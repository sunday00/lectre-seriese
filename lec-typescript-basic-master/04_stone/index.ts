import {Player, Sub, Hero, Card} from "./modules";

const opponent: Player = {
    hero: document.getElementById('rival-hero') as HTMLDivElement,
    deck: document.getElementById('rival-deck') as HTMLDivElement,
    field: document.getElementById('rival-cards') as HTMLDivElement,
    cost: document.getElementById('rival-cost') as HTMLDivElement,
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null,
};
  
const me: Player = {
    hero: document.getElementById('my-hero') as HTMLDivElement,
    deck: document.getElementById('my-deck') as HTMLDivElement,
    field: document.getElementById('my-cards') as HTMLDivElement,
    cost: document.getElementById('my-cost') as HTMLDivElement,
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null,
};

const turnButton = document.getElementById('turn-btn') as HTMLButtonElement;
let turn = true;

function initiate(){
    [me, opponent].forEach((p) => {
        p.deckData = [];
        p.heroData = null;
        p.fieldData = [];
        p.chosenCard = null;
        p.chosenCardData = null;
    });

    createDeck({ mine: true, count: 5 });
    createDeck({ mine: false, count: 5 });
    createHero({ mine: true });
    createHero({ mine: false });
    redrawScreen({ mine: true });
    redrawScreen({ mine: false });

}

function createDeck({ mine, count }: { mine:boolean, count: number }){
    const player = mine ? me : opponent;
    for (let i=0; i<count; i++){
        player.deckData.push(new Sub(mine));
    }
    redrawDec(player);
}

function createHero({ mine }: { mine:boolean }){
    const player = mine ? me : opponent;
    player.heroData = new Hero(mine);
    connectCardDOM({ data: player.heroData, DOM: player.hero, hero: true });
}

function redrawScreen({ mine }: { mine:boolean }){
    const player = mine ? me : opponent;
    redrawHero(player);
}

function isSub (data: Card): data is Sub {
    if ( data.cost ) return true;
    return false;
}

function isHero (data: Card): data is Hero {
    if ( data.isHero() ) return true;
    return false;
}

function connectCardDOM ({ data, DOM, hero = false }: { data: Card, DOM: HTMLDivElement, hero: boolean }){
    const cardEl = document.querySelector('.card-hidden .card')!.cloneNode(true) as HTMLDivElement;
    cardEl.querySelector('.card-att')!.textContent = String( data.att );
    cardEl.querySelector('.card-hp')!.textContent = String( data.hp );
    if( hero ){
        (cardEl.querySelector('.card-cost') as HTMLDivElement).style.display = 'none';
        const name = document.createElement('div');
        name.textContent = 'HERO';
        cardEl.appendChild(name);
    } else {
        cardEl.querySelector('.card-cost')!.textContent = String( data.cost );    
    }
    cardEl.addEventListener('click', () => {
        if ( isSub(data) && data.isMine() === turn && !data.field ) {
            if ( !deckToFiled({ data }) ){
                createDeck({ mine: turn, count: 1 });
            }
        }
    });
    DOM.appendChild(cardEl);
}

function redrawHero(target: Player){
    target.hero.innerHTML = '';
    connectCardDOM({ data: target.heroData!, DOM: target.hero, hero: true });
}

function redrawDec(target: Player){
    target.deck.innerHTML = '';
    target.deckData.forEach((data)=>{
        connectCardDOM({ data: data, DOM: target.deck, hero: false });
    });
    
}

function redrawField(target: Player){
    target.field.innerHTML = '';
    target.fieldData.forEach((data)=>{
        connectCardDOM({ data: data, DOM: target.field, hero: false });
    });
    
}

function deckToFiled ( { data }: { data: Sub } ) : boolean {
    const target = turn ? me : opponent;
    const currentCost = Number(target.cost.textContent);
    if (currentCost < data.cost!) {
        alert("all cost is spent");
        return true;
    }
    data.field = true;
    const index = target.deckData.indexOf(data);
    target.deckData.splice(index, 1);
    target.fieldData.push(data);
    redrawField(target);
    target.cost.textContent = String(currentCost - data.cost!);
    return false;
}

initiate();

