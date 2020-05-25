export declare interface CardInterface {
    att: number;
    hp: number;
    cost?: number;
    field: boolean;
}

export declare class Card implements CardInterface {
    public att: number;
    public hp: number;
    public cost?: number;
    public field: boolean = false;

    private mine: boolean = false;
    protected hero?: boolean;

    constructor(mine: boolean){
        this.att = Math.ceil(Math.random() * 1);
        this.hp = Math.ceil(Math.random() * 5);
        this.mine = mine;
    }

    isHero(){
        return this.hero;
    }

    isMine(){
        return this.mine;
    }
}

export declare class Hero extends Card {
    constructor(mine: boolean) {
        super(mine);
        this.hero = true;
        this.att *= 2;
        this.hp += 25;
    }
}

export declare class Sub extends Card {
    constructor(mine: boolean) {
        super(mine);
        this.hero = false;
        this.att *= 5;
        this.cost = Math.floor(( this.att + this.hp ) / 2 );
    }
}

declare interface Player {
    hero: HTMLDivElement,
    deck: HTMLDivElement,
    field: HTMLDivElement,
    cost: HTMLDivElement,
    deckData: Card[],
    heroData: Card | null,
    fieldData: Card[],
    chosenCard: HTMLDivElement | null,
    chosenCardData: Card | null
}

export = Player;
