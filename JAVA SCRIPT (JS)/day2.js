// fat arrow function/ arrow function
// does not have name
// that function is execute there itself

let temp1=()=>{
    console.log("1st type of arrow function is called")
}

temp1();

let temp2=(a,b)=>{
    return(a+b);
}
let res= temp2(30,2);
console.log("result is"+res);


// array is growable & shrinkable dyamically
// array store homogenous as well as hetrogenous data
// []=> it is symbol

let a=[5,10,15,20,25];
let a1=[];
let a2=[2.5,'sakshi',true];

for(let i=0;i<a.length;i++){
    console.log("value of array"+a[i]);
}

// to only display array

console.log(a2);
console.log(a.join('#'));

// for space

console.log(a.join(" "));

// for ,
console.log(a.join());

// foreach

a.forEach((myvalue,i,arr)=>{
    console.log(myvalue+"index is"+i+"array is"+arr)
});

// push and pop
// LIFO

let h=[];

h.push(100);
console.log(h);
h.push(100,101,102);
console.log(h);

let popedvalvue=h.pop();
console.log(h);
console.log("poped value"+popedvalvue);

// splice to remove specific data only works on array

let g=[1,2,3,4,5];

// to add data

g.splice(99,98,0);
console.log(g);

// to delete data

g.splice(2,1);
console.log(g);

// to replace data

g.splice(1,1,0);
console.log(g);

// map
// element by element operation




// hw fat arrow with parameter & without return type

let temp3=(x,z)=>{
    console.log("add is"+(x+z));
}

temp3(10,5);

// hw fat arrow without parameter & with return type

let temp4=()=>{
    return(9+9);
}

let res1=temp4();
console.log("addition is"+res1);














