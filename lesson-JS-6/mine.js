let s = 'Simpson';
console.log(s.concat(' family')); // додає до стрінги іншу стрінгу
console.log(s.toLowerCase());     //приводить всі літери до малого регісту
console.log(s.toUpperCase());     // робить всі літери великими
console.log(s.startsWith('S'));  //шукає, чи починається стрінговий об"єкт з певних літер
console.log(s.toLowerCase(s).startsWith('s'));  //спочатку робить всі літери малими, а потім шукає, чи починається стрінговий об"єкт з певних літер
console.log(s.charAt(2));         //шукає літеру під певним індексом
console.log(s.indexOf('m'));     //з початку шукає літери
console.log(s.lastIndexOf('s')); // з кінця шукає літери
console.log(s.includes('np'));  //шукає чи є певні склади літер, символів в стрінгі
console.log(s.toLowerCase().replace('s', '$')); //заміняє першу з літер,
// яку я вказала на той символ, чи літеру яку я хочу і теж вказала
console.log(s.toLowerCase().replaceAll('s', '$'));  //заміняє всі літери в стрінгі на символи які ви вказуєте
let phone = '+38 (067) 27-067-99'
console.log(phone.replaceAll('+', ''));
let replaceAll=phone.replaceAll('+', '')  //приводить номер до уніфікованого виду
.replaceAll(' ', '')
.replaceAll('-', '')
.replaceAll('(', '')
.replaceAll(')', '');
console.log(replaceAll);
console.log(s.substring(1, 4));    //вирізає певну к-ть елементів
console.log(s.split('m')); // функція-розподілювач, зробить масив, розділяючи там, де вказана літера чи символ, видаляючи той символ
//________________________________
// let str = 'string literal';
// let str2 = 'string literal';
// console.log(str === str2);
// let strLit='okten';                     //примітивний тип
// let strObj=new String('okten');    //референціальний тип
// console.log(strLit === strObj);     //порівнюється адреса ячейки, а не вміст, порівнюються два різних типи
let nums = [11,22,33,44];
// nums=new Array(11,22,33,55);
console.log(Array.isArray(nums)); //перевіряє чи масив є цифрами
console.log(nums.push('new velue')); //Додає в кінець елементи та вказує новий розмір масиву, кількість його елемантів
console.log(nums);
console.log(nums.pop()); //видаляє останній елемент
console.log(nums);
console.log(nums.unshift('hallo')); //додає на початок елементи та вказує кількість елементів масиву
console.log(nums);
console.log(nums.shift());  //видаляє елемент з пачатку масиву
console.log(nums);
console.log(nums.join('-')); //метод, який з"єднує всі елементи масиву в одну стрінгу, розділивши - якимось символом
console.log(nums.concat([1, 2, 3]));   //додає один масив до іншого масиву
console.log(nums.concat(1, 2, 3, 4));
console.log(nums.reverse());
let numbers=nums.concat(2,4,6,8,9,10);





























