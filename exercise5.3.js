//1
const addNumber = prompt('Введите число')

if (typeof (+addNumber) === 'number' || typeof (+addNumber) === NaN) {
   console.log('Упс, кажется, вы ошиблись')
}
if (typeof (+addNumber) === 'number') {
   addNumber % 2 == 0 ? console.log('Введенное число четное') : console.log('Введенное число нечетное')
}

//2

let x;

if (typeof x === 'number') {
   console.log('x — число')
}
else if (typeof x === 'string') {
   console.log('x — строка')
}
else if (typeof x === 'number') {
   console.log('x — булевый тип')
} else {
   console.log('Тип x не определён')
}
