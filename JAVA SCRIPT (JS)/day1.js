//control statement
//if,if-else,nasted if-else,break,switch,continue,return

if(2<4){
    console.log("condition is true")
}else{
    console.log("condition is false")
}

// break statement
var choice=2;

switch(choice){
    case 1: console.log("you are in case 1");
             break;
    case 2: console.log("you are in case 2");
             break;
    default:console.log("you are in default case");
             break;                 
}

// loop
// while,do-while,for,foreach
var count=5;

 while(count!=0){
     console.log("count is" +count);
     count--;
 }

// do {
//    console.log(count);
//    count--;
// } while (count!=0);

// for

for(var i=0; i<4; i++){
    console.log("value of i is"+i);
}
//  console.log("value of i after the loop" +i)

// let keyword
// memory efficient
// scope= within a nearest block

// const keyword
// it works like same ur final keyword in core java

// functions
// user define function
// 1.function without paremeter and without return type
// 2.function without paremeter and with return type
// 3.function with paremeter and without return type
// 4.function with paremeter and with return type

// 1.
function add1(){
    console.log("1st type of function")
}

add1();

// 2.
function add2(){
    return (8+2);
}

let temp1=add2();
console.log("addition is " +temp1);

// 3.
function add3(a,b){
    console.log("addition is"+(a+b));
}

add3(10,5);

// 4.
function add4(x,z){
    return (x+z);
}

let temp2=add4(2,5);
console.log("addition is"+temp2);

// annonymous function
// function does not have any name
// that function execute their itself

let temp3=function (){
    console.log("ur fisrt annonymous function")
}

// temp3();

let temp5=function(a,b){
    return (a+b);
}

let res=temp5(5,5);
console.log("result"+res);

// hw anomyous fun without papameter with return type

 let temp6=function(){
     return(8+8);
 }

 let res1=temp6();
 console.log("result is"+res1);

// hw anonyous fun with parameter with return type

let temp7=function(a,b){
    return(a+b);
}

let res2=temp7(5,4);
console.log("result is"+res2);


