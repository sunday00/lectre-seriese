// @ts-ignore
var number1 = Math.ceil(Math.random() * 9);
// @ts-ignore
var number2 = Math.ceil(Math.random() * 9);
// @ts-ignore
var result = number1 * number2;
var word = document.createElement('div');
word.textContent = number1 + " * " + number2;
document.body.append(word);
// @ts-ignore
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
input.type = 'number';
form.append(input);
// @ts-ignore
var button = document.createElement('button');
button.textContent = 'insert';
form.append(button);
// @ts-ignore
var resultDiv = document.createElement('div');
document.body.append(resultDiv);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (result === Number(input.value)) {
        resultDiv.textContent = 'OK';
        number1 = Math.ceil(Math.random() * 9);
        number2 = Math.ceil(Math.random() * 9);
        result = number1 * number2;
        word.textContent = number1 + " * " + number2;
        input.value = '';
    }
    else {
        resultDiv.textContent = '... try again';
        input.value = '';
        input.focus();
    }
});
