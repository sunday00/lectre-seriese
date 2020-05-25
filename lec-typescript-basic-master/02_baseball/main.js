var body = document.body;
var candidate = [];
var array = [];
function chooseNumber() {
    for (var i = 1; i < 10; i++) {
        candidate.push(i);
    }
    for (var i = 0; i < 4; i++) {
        var chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
}
chooseNumber();
// const result = document.createElement('h1');
// body.append(result);
// const form = document.createElement('form');
// body.append(form);
// const input = document.createElement('input');
// form.append(input);
var result = document.querySelector('#result');
var form = document.querySelector('form');
var input = document.querySelector('input');
var wrongCnt = 0;
var ul = document.querySelector('ul');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var answer = input.value;
    if (answer === array.join('')) {
        result.textContent = "Perfect";
        input.value = '';
        input.focus();
        chooseNumber();
        wrongCnt = 0;
    }
    else {
        var answerArr = answer.split('').map(function (n) { return Number(n); });
        var strike = 0;
        var ball = 0;
        wrongCnt++;
        if (wrongCnt > 10) {
            result.textContent = "fail. Correct answer is " + array.join(',') + ".";
        }
        else {
            for (var i = 0; i <= 3; i++) {
                if (answerArr[i] === array[i]) {
                    strike++;
                }
                else if (array.indexOf(answerArr[i]) > -1) {
                    ball++;
                }
            }
            var li = document.createElement('li');
            result.textContent = strike + "strike, " + ball + "ball";
            li.textContent = result.textContent + " " + input.value;
            ul.append(li);
            input.value = "";
            input.focus();
        }
    }
});
