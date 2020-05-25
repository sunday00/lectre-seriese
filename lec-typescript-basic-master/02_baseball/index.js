var _a;
var num; // warning // typescript's type definition is lowercase
var str;
var arr;
var arr2;
var arr3;
arr3 = ["1", true];
// tuple
var arr4;
arr4 = [1, 1, false];
arr4.push(3);
console.log(arr4); // even tuple, can't block pushing item;
var str2;
str2 = "KO";
// constant array
var arr5 = ["a", 1, true];
var arr6;
// constant obj
var obj = { a: "apple" };
// obj = { b: "banana" } // looks like constant
//but
obj.a = "nacho";
var obj2 = { b: "banana" };
// obj2.b = "mandrake"; // real constant
var obj3 = { c: "cherry" };
// this is not working.
obj3 = ['a'];
// because All of the types are object in JS.
// so, this is just like type 'any'. not type safety.
var obj4 = { d: true, e: 3 };
var obj5 = { f: 3 };
obj5.g = "lazy definition";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color1 = Color.Green;
var str3 = Color[1];
console.log(color1, str3); // able to use key, value
var obj6; // obj6 has property 'name', but not necessary.
obj6 = {}; // actually obj6.name is not undefined.
console.log((_a = obj6.name) === null || _a === void 0 ? void 0 : _a.length); // using name property safely.
// == console.log( obj6.name != undefined && obj6.name != null && obj6.name )
function f1(arg1, arg2) {
    return arg1 === arg2;
}
function f2() {
}
console.log(f1(1, 2));
function f3() {
    return function (arg) {
        return 3;
    };
}
console.log(f3()("1"));
// function name (arg) : "return type is function" {
//    return "function";
// }
// return type is also function, 
// ( arg type ) => return type
var obj7 = {
    innerMethod: function () {
        return true;
    }
};
var forcedTypeChanger = 3;
forcedTypeChanger = 'hi';
forcedTypeChanger = 4;
