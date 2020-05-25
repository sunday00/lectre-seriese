"use strict";
var table = document.createElement("table");
var trs = [];
var tds = [];
var During = /** @class */ (function () {
    function During() {
        this.O = [];
        this.X = [];
    }
    return During;
}());
var during = new During();
var turn = 'X';
var result = document.createElement('div');
Array.prototype.has = function (str) {
    if (this.indexOf(str) >= 0) {
        return true;
    }
    return false;
};
function refreshGame() {
    setTimeout(function () {
        trs.forEach(function (tr, idx) {
            tds[idx].forEach(function (td) {
                td.textContent = '';
            });
        });
        during = new During();
        document.querySelector("h1").textContent = "";
    }, 2500);
}
function checkBingo(turn) {
    if ((during[turn].has('00') &&
        ((during[turn].has('01') && during[turn].has('02')) ||
            (during[turn].has('11') && during[turn].has('22')) ||
            (during[turn].has('10') && during[turn].has('20')))) ||
        (during[turn].has('02') &&
            ((during[turn].has('11') && during[turn].has('20')) ||
                (during[turn].has('12') && during[turn].has('22')))) ||
        (during[turn].has('20') && during[turn].has('21') && during[turn].has('22')) ||
        (during[turn].has('01') && during[turn].has('11') && during[turn].has('21')) ||
        (during[turn].has('10') && during[turn].has('11') && during[turn].has('12'))) {
        return true;
    }
    return false;
}
function reverseTurn(turn) {
    return turn === 'O' ? 'X' : 'O';
}
function callback(e) {
    var trIndex = trs.indexOf(e.currentTarget.parentNode);
    var tdIndex = tds[trIndex].indexOf(e.currentTarget);
    if (tds[trIndex][tdIndex].textContent === '') {
        tds[trIndex][tdIndex].textContent = turn;
        during[turn].push("" + trIndex + tdIndex);
        if (checkBingo(turn)) {
            document.querySelector('h1').textContent = "Winner is " + turn;
            refreshGame();
        }
        turn = reverseTurn(turn);
    }
    else {
        console.log("already " + tds[trIndex][tdIndex].textContent);
    }
    if (during['O'].length + during['X'].length === 9 && !checkBingo(turn) && !checkBingo(reverseTurn(turn))) {
        document.querySelector("h1").textContent = "DrawGame";
        refreshGame();
    }
}
for (var i = 1; i <= 3; i++) {
    var tr = document.createElement('tr');
    trs.push(tr);
    tds.push([]);
    for (var j = 1; j <= 3; j++) {
        var td = document.createElement('td');
        td.addEventListener('click', callback);
        tds[i - 1].push(td);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);
document.body.appendChild(result);
