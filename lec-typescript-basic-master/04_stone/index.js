"use strict";
class Card {
    constructor(mine) {
        this.field = false;
        this.mine = false;
        this.att = Math.ceil(Math.random() * 1);
        this.hp = Math.ceil(Math.random() * 5);
        this.mine = mine;
    }
    isHero() {
        return this.hero;
    }
    isMine() {
        return this.mine;
    }
}
class Hero extends Card {
    constructor(mine) {
        super(mine);
        this.hero = true;
        this.att *= 2;
        this.hp += 25;
    }
}
class Sub extends Card {
    constructor(mine) {
        super(mine);
        this.hero = false;
        this.att *= 5;
        this.cost = Math.floor((this.att + this.hp) / 2);
    }
}
const opponent = {
    hero: document.getElementById('rival-hero'),
    deck: document.getElementById('rival-deck'),
    field: document.getElementById('rival-cards'),
    cost: document.getElementById('rival-cost'),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null,
};
const me = {
    hero: document.getElementById('my-hero'),
    deck: document.getElementById('my-deck'),
    field: document.getElementById('my-cards'),
    cost: document.getElementById('my-cost'),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null,
};
const turnButton = document.getElementById('turn-btn');
let turn = true;
function initiate() {
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
function createDeck({ mine, count }) {
    const player = mine ? me : opponent;
    for (let i = 0; i < count; i++) {
        player.deckData.push(new Sub(mine));
    }
    redrawDec(player);
}
function createHero({ mine }) {
    const player = mine ? me : opponent;
    player.heroData = new Hero(mine);
    connectCardDOM({ data: player.heroData, DOM: player.hero, hero: true });
}
function redrawScreen({ mine }) {
    const player = mine ? me : opponent;
    redrawHero(player);
}
function isSub(data) {
    if (data.cost)
        return true;
    return false;
}
function isHero(data) {
    if (data.isHero())
        return true;
    return false;
}
function connectCardDOM({ data, DOM, hero = false }) {
    const cardEl = document.querySelector('.card-hidden .card').cloneNode(true);
    cardEl.querySelector('.card-att').textContent = String(data.att);
    cardEl.querySelector('.card-hp').textContent = String(data.hp);
    if (hero) {
        cardEl.querySelector('.card-cost').style.display = 'none';
        const name = document.createElement('div');
        name.textContent = 'HERO';
        cardEl.appendChild(name);
    }
    else {
        cardEl.querySelector('.card-cost').textContent = String(data.cost);
    }
    cardEl.addEventListener('click', () => {
        if (isSub(data) && data.isMine() === turn && !data.field) {
            if (!deckToFiled({ data })) {
                createDeck({ mine: turn, count: 1 });
            }
        }
    });
    DOM.appendChild(cardEl);
}
function redrawHero(target) {
    target.hero.innerHTML = '';
    connectCardDOM({ data: target.heroData, DOM: target.hero, hero: true });
}
function redrawDec(target) {
    target.deck.innerHTML = '';
    target.deckData.forEach((data) => {
        connectCardDOM({ data: data, DOM: target.deck, hero: false });
    });
}
function redrawField(target) {
    target.field.innerHTML = '';
    target.fieldData.forEach((data) => {
        connectCardDOM({ data: data, DOM: target.field, hero: false });
    });
}
function deckToFiled({ data }) {
    const target = turn ? me : opponent;
    const currentCost = Number(target.cost.textContent);
    if (currentCost < data.cost) {
        alert("all cost is spent");
        return true;
    }
    data.field = true;
    const index = target.deckData.indexOf(data);
    target.deckData.splice(index, 1);
    target.fieldData.push(data);
    redrawField(target);
    target.cost.textContent = String(currentCost - data.cost);
    return false;
}
initiate();
