function isString(test: string): test is string{
    return typeof test === "string";
}

console.log( isString("hello") );