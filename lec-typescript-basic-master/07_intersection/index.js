"use strict";
var a = {
    hello: true,
};
var b = {
    bye: false
};
var c = {
    hello: true,
    bye: true,
};
var d = {
    bye: true
};
var result = Array.prototype.map.call([1, 2, 3], function (item) {
    return item.toFixed(1);
});
