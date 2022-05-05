let x=100;
y=x;
y+=200;
console.log(x,y);

let user={id:1};
let user2=user;
user2.id=100500;
console.log(user2);
console.log(user);

let arr=[];
 function foobar (array){
     array[0]=777;
 }
 foobar(arr);
 console.log(arr);