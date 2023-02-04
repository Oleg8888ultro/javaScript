let a = 8;
let b = 'Hello';

console.log(b);
// console.log('Работает!!!');

let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');

button.onclick = function () {
    // кнопка будет нажата
    console.log('Работает!!!');
    // console.log(inputIn.value); // value - то что введено в input
    let b = inputIn.value;
    console.log(b * 2);
}