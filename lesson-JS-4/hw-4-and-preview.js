// function listCreator(a,b,c,d,i){
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${b}</li>`);
//     document.write(`<li>${c}</li>`);
//     document.write(`<li>${d}</li>`);
//     document.write(`<li>${i}</li>`);
//     document.write(`</ul>`)
// }
// listCreator('hello1','lol1','lol2','lol3','lol5');

// function listCreator2(size){
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//     document.write(`<li>item ${i+1}</li>`);
//     }
//     document.write(`</ul>`)
// }
// listCreator2(10);
// listCreator2(18)

// function calc(a,b){
//     let res = a + b;
//     return res;
// }
// let result = calc(10,20);
// console.log(result);

// function calc2(){
//     // debugger
//     let res=0;
//     for (const argument of arguments) {
//   res=res + argument;
//     }
//     return res;
// }
// let res1=calc2(10,20,30);
// let res2=calc2(11,22,33,44,55);
// console.log(res1,res2);

// function calculator(action,a,b){
//     let result;
//     if (action==='+'){
//         result=a+b;
//     }else if (action==='-'){
//         result=a-b;
//     }
// return result;
// }
// let calculatorResult1 = calculator('+',10,20);
// console.log(calculatorResult1);

// function squareP(a,b){
//     let result=(a+b)*2;
//     return result;
// }
//
// let a=squareP(10, 20);
// console.log (a);
// let number = squareP(5,6);
// console.log(number);

// function divCreator(text){
//     document.write(`<div>${text}</div>`);
// }
// divCreator('hello');
// divCreator('guys');

// function iterator(array){
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// iterator(users);i

// let x=100;
// function iterator2(arr){
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//     }
// } не сильно зрозуміле))

// function calc(a,b,action){
//     switch (action){
//         case '+':
//             return a+b;
//         case '-':
//             return a-b;
//         case '*':
//             return a*b;
//         default:
//             return NaN;
//     }
// }
// let calc1 = calc(10,1,'+');
//     console.log(calc1);
// let calc2 = calc(10,2,'*');
// console.log(calc2);
// console.log(calc(100,200,'+'));
// let calc3 = calc(
//    +prompt('a'),
//    +prompt('b'),
//    prompt('action')
// );
// console.log(calc3);

// function calc5(arr){  один варіант
// }
// calc5([1,2,3,4,1]);
// calc5([1,2,3]);
// function calc5(...nams){  другий варіант
//     console.log(nams);
// }
// calc5(1,2,3,4,1);
// calc5(1,2,3);
// function calc5(){    третій варіант визначення необмеженої к-тф аргументів
//     // console.log(arguments);
//     let result=0;
//     for (const item of arguments) {
//         result=result+item;
//     }
//     return result;
// }
//
// console.log(calc5(1, 2, 3, 4, 1));
// // calc5(1,2,3);

// function add(a,b){
//     return a+b;
// }
// function minus(a,b){
//     return a-b;
// }
// function multiply(a,b){
//     return a*b;
// }
// function divide(a,b){
//     return a/b;
// }
// // function calculateMy(num1,num2,action){
// //     switch (action) {
// //         case '+':
// //             return add(num1,num2);
// //         case '-':
// //             return minus(num1,num2);
// //         case '*':
// //             return multiply(num1,num2);
// //         case '/':
// //             return divide(num1,num2);
// //         default:
// //             // return NaN;
// //             throw new Error('WTF?');
// //     }
// // }
// function calculateMy(num1,num2,action){
//     switch (action) {
//         case '+':
//             result= add(num1,num2);
//             break;
//         case '-':
//             result= minus(num1,num2);
//             break;
//         case '*':
//             result= multiply(num1,num2);
//             break;
//         case '/':
//             result= divide(num1,num2);
//             break;
//         default:
//             result = NaN;
//     }
//     return result
// }
// console.log(calculateMy(50,12,'+'));
// console.log(calculateMy(50,12,'lol'));





