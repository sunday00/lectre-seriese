let num: number; // warning // typescript's type definition is lowercase
let str: string;

let arr: number[];
let arr2: Array<number>;
let arr3: ( string | boolean )[];
arr3 = ["1", true];

// tuple
let arr4: [ number, number, (string|boolean) ];
arr4 = [1,1,false];
arr4.push(3);
console.log(arr4); // even tuple, can't block pushing item;

let str2: "KO"|"EN";
str2 = "KO";

// constant array
let arr5 = [ "a", 1, true ] as const;
let arr6: readonly ["b", 2];

// constant obj
const obj = { a: "apple" }
// obj = { b: "banana" } // looks like constant
//but
    obj.a = "nacho";
const obj2 = { b: "banana" } as const;
// obj2.b = "mandrake"; // real constant

let obj3: object = { c: "cherry" }
    // this is not working.
    obj3 = [ 'a' ];
    // because All of the types are object in JS.
    // so, this is just like type 'any'. not type safety.
let obj4: { d: boolean, e: number } = { d: true, e:3 }

let obj5: { f: number, g?: string  } = { f: 3 } 
obj5.g = "lazy definition";

enum Color { Red, Green, Blue }
let color1: Color = Color.Green;
let str3: String = Color[1];
console.log(color1, str3); // able to use key, value

let obj6: { name ?: string } // obj6 has property 'name', but not necessary.
obj6 = { } // actually obj6.name is not undefined.

console.log( obj6.name?.length ); // using name property safely.
    // == console.log( obj6.name != undefined && obj6.name != null && obj6.name )

function f1(arg1: number, arg2: number): boolean {
    return arg1 === arg2;
}

function f2(): void {

}

console.log( f1( 1, 2 ) );



function f3(): (arg: string) => number {
    return (arg: string) => {
        return 3;
    }
}

console.log( f3()("1") );

// function name (arg) : "return type is function" {
//    return "function";
// }

    // return type is also function, 
        // ( arg type ) => return type

let obj7: {
    innerMethod: () => boolean,
    innerOptionalProperty?: string
} = {
    innerMethod(){
        return true;
    }
}

let forcedTypeChanger: number = 3;
(forcedTypeChanger as unknown as string) = 'hi';
(<number><unknown>forcedTypeChanger) = 4;



