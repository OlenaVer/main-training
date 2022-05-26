let str='Helen';
console.log(str.length);
console.log(str[1]);
let concat=str.concat('!!!');
console.log(concat);
//Всі слова КАпслоком, великими літерами
let toUpperCase=str.toUpperCase();
console.log(toUpperCase);
//Всі слова маленькими літерами
let toLoverCase=str.toLowerCase();
console.log(toLoverCase);
// _____________________________________________
//trim зникають пробіли з початку та в кінці тексту (стрінги)
//Метод trim() видаляє пробіли з обох кінців рядка.
// ____________________________________________
let str1=' Helen ';
console.log(str1.length);
console.log(str1);
let trim = str1.trim();
console.log(trim);
//________________________
//Перевіряє чи закінчується стрінга (текст) на певне значення, н-д:.net
let email=" helen@ukr.net";
let endsWith= email.endsWith(".net");
console.log(endsWith);
// чи починається з
let starsWith= email.startsWith("k");
console.log(starsWith);
//________________________
// В якій позиції знаходиться якийсь символ
let s=email.charAt(5);
console.log(s);
// Який за індексом певний символ
let indexOf= email.indexOf("n");
console.log(indexOf);
// Зробити заміну літери на символ !!! але лише першу літеру!!!
let string='Hello Helen !';

let replace=string.replace('e','*');
console.log(replace);
// Зрпобити заміну ВСІХ однакових літер на символ
let all=string.replaceAll('e','*');
console.log(all);
//_________
let replaceAll=string.trim().replaceAll('e','#');
console.log(replaceAll);
//____________________________
//Вирізати лише декілька символів
let slice=string.slice(1,4);
console.log(slice);
//Робить з стрінги масив, розділяючи ' ' пробілом, або іншою літерою,
// видаляючи ту літеру, чи пробіл тобто той розподілювач
let split= string.split(' ');
console.log(split);
let split1= string.split('e');
console.log(split1);
//_________________
//Також вирізає символи
let substr= string.substring(1,3);
console.log(substr);
let substr1= string.substr(1,3);
console.log(substr1);
//_______________________________________
let numbers = [11,22,33,44,55,66,77,88,99,100];
console.log(numbers);
console.log(typeof numbers);
console.log(Array.isArray(numbers));
//Додати в кінець масиву елементи
numbers.push("new data");
console.log(numbers);
//Додати на початок масиву елементи
let unshift =numbers.unshift('***');
console.log(numbers);
//Видалити з кінця масиву додані елементи
let pop =numbers.pop();
console.log(pop);
console.log(numbers);
//Видалити з початку масиву додані елементи
let shift=numbers.shift();
console.log(shift);
console.log(numbers);
//Додати елементи та створити зовсім новий масив з доданими елементами
let concat1 = numbers.concat([true, false]);
console.log(concat1);
console.log(numbers);
//Вирізати частину з масива з 1 по 5 НЕвключно, основний масив залишився без змін
let slice1= numbers.slice(1,5);
console.log(slice1);
console.log(numbers);
//Вирізати частину з масива з 1 по 3 включно, ЗМІНЮЮЧИ МАСИВ
let splice1=numbers.splice(1,3);
console.log(splice1);
console.log(numbers);
//Вирізати частину з масива з 1 по 3 включно, ЗАМІНИВШИ елементи масиву на нові
let splice2=numbers.splice(1,3, 'fac','yes');
console.log(splice2);
console.log(numbers);
let splice3 = numbers.splice(1,3, 22, 33, 44,55,66,77,88);
console.log(numbers);
//Функцією forEach можна для кожного елементу масиву застосовувати якусь функцію.
//Вона нічого не буде повертати. Використовується для виведення в консоль.
numbers.forEach(function (value){
    console.log(value);
});
let filterArray =numbers.filter((item, index)=>{
console.log(item, index);
// if (item % 2===0){              //якщо             (item % 2===0){
//     return true;                //буде повертатись true;
// }else {                         //інакше
//     return false;}              //буде повертатись  false;}
// Закоментований вище вираз можна записати так як нижче
//     return item %2===0;
 // щоб його не писати вручну можна виділити вираз
 // та з підказок вибрати Simplify
    return item % 2 === 0 && index % 2 !== 0;
});
console.log(filterArray);
let map = numbers.map(value => {
    return value +" "    // * 2;
});
console.log(map);
console.log(numbers);
//функція numbers.map перетворює об"єкт з одного типу на інший, тобто
//з чисел на стрінгу







































