// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squareRectangle(a,b){
    let result=(a+b);
    return result;
}
console.log(squareRectangle(10, 20));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function squareCircle(r){
   let result1=3.14*r*2;
   return result1;
}
    console.log(squareCircle(2));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareCylinder(r1,h){
    let result=2*3.14*r1*h;
    return result;
}
console.log(squareCylinder(2,4));
// - створити функцію яка приймає масив та виводить кожен його елемент
let nambers = [1,3,5,7];
function take(array){
    for (let arrElement of array) {
        console.log(arrElement);
    }
}
take(nambers);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function listCreator(t) {
    document.write(`<div>`);
    document.write(`<p>${t}</p>`);
    document.write(`</div>`);
}
listCreator('fifa');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul(t) {
    document.write(`<ul>`);
    document.write(`<li>${t}</li>`);
    document.write(`<li>${t}</li>`);
    document.write(`<li>${t}</li>`);
    document.write(`</ul>`);
}
ul('hi');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulСycle(l){
//     let j=3;
//  document.write(`<ul>`);
//     for (let i = 0; i < j; i++) {
//         const lElement = l[i];
// document.write(`<li>${l}</li>`);
//     }
//  document.write(`</ul>`);
// }
// ulСycle('glory')

function ulСycle(l,j){
    document.write(`<ul>`);
    for (let i = 0; i < j; i++) {
        document.write(`<li>${l}</li>`);
    }
    document.write(`</ul>`);
}
ulСycle('glory',3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrays=[1,'hello', true];
function accept(arr){
    document.write(`<ul>`);
    for (const arrayElement of arr) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}
accept(arrays);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let array2=[
    {
        id: 1,
        name: 'Nadin',
        age: 30
    },
    {
        id: 2,
        name: 'Marie',
        age: 31
    }
];
function object(array){
    for (const obj of array) {
        document.write(`<div>ID-${obj.id} NAME-${obj.name} AGE-${obj.age}</div>`)
    }
}
object(array2);
// - створити функцію яка повертає найменьше число з масиву
let array1=[5,8,14,32,56,17,99,18,44,3];
function nambMin(nArray) {
    let min=nArray[0];
    for (const n of nArray) {
        if (n<min){
            min=n
    }
}
    return min;
};
console.log(nambMin(array1));

// - створити функцію яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let nambs=[5,8,14,32,56,17,99,18,44,3];
function nambe(arrN){
   let summa=0;
    for (const item of arrN) {
summa += item;
    }
    return summa;
    }
console.log(nambe(nambs));