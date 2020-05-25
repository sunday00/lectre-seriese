interface Fruit {
    fruitName: string;
    color: string;
    isOrganic: boolean;
    cost: number;
}

const e: Partial<Fruit> = {
    fruitName: "apple",
    cost: 3500
}

const f: Readonly<Fruit> = {
    fruitName: "banana",
    color: "yellow",
    isOrganic: true,
    cost: 7000
}

// f.fruitName = "";



