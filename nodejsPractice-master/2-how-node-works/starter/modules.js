// console.log(arguments);
// console.log(require('module').wrapper);

let Cal = require("./calculator");
let calculator1 = new Cal();
console.log( calculator1.add(12 , 3) );
// module.exports class , require path and define, new defined Valuable.

let calculator2 = require("./calculator2");
console.log( calculator2.mul(12, 3) );
// exports.multiple function/variable, require path and define, use defined valuable.one of multiple.

let { simple, complex } = require("./calculator3");
console.log(simple.add(1, 1), complex.mul(2,2));
// exports.multiple function/variable, require path and define { some of imported function/variable }. use imported function/variable.

// import whenExportedDefaultThenWhateverNameOk from "./calculator4.js";
// But this export default and import keyword are and working basically.
// need babel, es-2015, es6 ... some dependencies are needed.

require("./cacheModule")();
require("./cacheModule")();
require("./cacheModule")();
require("./cacheModule")();