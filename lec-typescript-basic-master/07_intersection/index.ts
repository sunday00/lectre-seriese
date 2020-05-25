interface A {
    hello: true;
}

interface B {
    bye: boolean;
}

const a: A = {
    hello: true,
}

const b: B = {
    bye: false
}

const c: A & B = {
    hello: true,
    bye: true,
}

const d: A | B = {
    bye: true
}

const result = Array.prototype.map.call<number[], [ (item: number) => string ], string[]>([1,2,3] , (item) => {
    return item.toFixed(1);
});