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