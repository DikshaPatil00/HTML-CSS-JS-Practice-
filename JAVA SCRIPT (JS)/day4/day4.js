function onaddition(){
   let num1=document.getElementById("input1");
   let num2=document.getElementById("input2");

   let n1=parseInt(num1.value);
   let n2=parseInt(num2.value);

   let res=n1+n2;

   let displaydata=document.getElementById("result");

//    displaydata.innerHTML=res;

displaydata.innerHTML=`<h2> your result : ${res} </h2>`;

}
function onsubstraction(){
   let num1=document.getElementById("input1");
   let num2=document.getElementById("input2");

   let n1=parseInt(num1.value);
   let n2=parseInt(num2.value);

   let res=n1-n2;
   if(n1>=n2){
    let result=n1-n2;
    displaydata=document.getElementById("result");
    displaydata.innerHTML=`<h2> your result ::${res} </h2>`;
   }else{
    displaydata=document.getElementById("result");
    displaydata.innerHTML=`<h3>invalid.... 1st number must be greater than 2nd number</h3>`
   }

//    HOMEWORK
   
}
function onmultiplication(){
    let num1=document.getElementById("input1");
    let num2=document.getElementById("input2");
 
    let n1=parseInt(num1.value);
    let n2=parseInt(num2.value);
 
    let res=n1*n2;
 
    let displaydata=document.getElementById("result");
 
    displaydata.innerHTML=`<h2> your result : ${res} </h2>`;

}
function ondividation(){
    let num1=document.getElementById("input1");
    let num2=document.getElementById("input2");
 
    let n1=parseInt(num1.value);
    let n2=parseInt(num2.value);
 
    let res=n1/n2;
 
    let displaydata=document.getElementById("result");
 
    displaydata.innerHTML=`<h2> your result : ${res} </h2>`;

}