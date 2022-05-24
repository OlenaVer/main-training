let x=100;
let y = x;
y+=200;
console.log(x,y);

let user={id:1};
let user2=user;
user2.id=100500;
console.log(user2);
console.log(user);

let arr=[];
// debugger
 function foobar (array){
     array[0]=777;
 }
 foobar(arr);
 console.log(arr);

 let h = 0;
 // debugger
 function barfoo(num){
num = 100;
 }
 barfoo(h);
 console.log(h);

 //function expression
 let fn=function (){
  console.log('test');
}
fn();

//  let calc=(a,b)=>{
//   return a+b;
//  }
// console.log(calc(10, 20));

//  let calc=(a,b) => {return a+b};
// console.log(calc(10, 20));

// let calc=(a,b)=>a+b;
// console.log(calc(10, 20));

let calc=(a,b)=>console.log(a+b);
// calc(10,20);  !! не повертає результат!!
console.log(calc(10, 20));

(function (msg){
 console.log(msg);
}('hello world'));
// debugger
function xxx(fn){
 fn();
}
let cb=()=>{console.log('shura');};
xxx(cb);
// // debugger
// function persha(druga){
//  druga();
// }
// let schos=()=>{console.log('JJJ');};
// persha(schos);
//
// // debugger
// function gas(l){
//  console.log(l());
// }
// let pi=()=>'llll';
// gas(pi);

function calk1(a1,b1,fn1){
 let res=fn1(a1,b1);
 return res;
}
let num=calk1(10,20, function (a1,b1){
 return a1+b1});
console.log(num);
console.log(calk1(10,20, function (a1,b1){
 return a1*b1/2*10;
}));

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// щоб відібрати зі всіх користувачів лише тих,кому більше 30 років
// варіант 1:
function filterUsers(users){
  let arr=[];
    for (const user1 of users) {
        if (user1.age>30){
            arr.push(user1);
        }
    }
    return arr;
}
console.log(filterUsers(users));
//варіант 2:
let filter=users.filter(function (item) {
    return item.age>30;
});
console.log(filter);
console.log(users.filter(value => value.status));
//_______________________________________ незрозуміло нижче
// function filterArray(array,callback){
//     let container=[];
//     for (const item of container) {
//         if (callback()){
//             container.push(item)
//         }
//     }
//     return container;
// }
// console.log(filterArray(users));
//________________________________
function filterArray(array) {
    let container=[];
    for (const item of array) {
       if (item.age<30){
           container.push(item)
       }
    }
    return container;
}
console.log(filterArray(users));
//__________________________________________
// function filterArray1(array) {
//     let container1=[];
//     for (const item of array) {
//         let result= checkout (item);
//         if (item.age<30){
//             container1.push(item)
//         }
//     }
//     return container1;
// }
// console.log(filterArray1(users));
//______________________________________

function filterArray2(array2, checkout) {
    let conteiner2=[];
    for (const item2 of array2) {
      let result=checkout(item2);
      if (result){
          conteiner2.push(item2)
      }    }
    return conteiner2;
}

console.log(filterArray2(users, function (item2) {
    return item2.age < 30;
}));
//те, що зверху можна записати:
function filterArray3(array3, checkout) {
    let container3=[];
    for (const item3 of array3) {
        let result=function (item3) {
            return item3.age < 30;
        };
        if (result){
            container3.push(item3)
        }    }
    return container3;
}

console.log(filterArray3(users, function (item3) {
    return item3.age < 30;
}));

//функція рекурсив, реккурсії , функція яка сама себе викликає

function rec(q) {
  q++;
  console.log(q);
    if (q>4){return;
   }
    rec(q);
}
rec(0);
//__________________________наступна працює внизу
function rec1(e,limit) {
    e++;
    console.log(e);
    if (e>limit){return;
    }
    rec1(e,limit);
}
rec1(0,12);



































