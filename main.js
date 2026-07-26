// document.write("<h1>Hello</h1>");
// document.write("Hello");
// console.log("this is a log message");
// console.error("the is error");
// // window.print();
// console.log( typeof "samira");
// console.log( typeof 9000);
// console.log(typeof true);
// var t;
// console.log(typeof t);
// t="laila";
// console.log(typeof t);
// var name="bahaa",
// age=20;
// console.log(typeof name);
// console.log(age);
// // let a=1;
// // let a=2;
// var a=2;
// var a=1;
// console.log(a);
// // console.log(country);
// let country="homs";

// const x=5;
// x=1;
// console.log(x);


let theName="bah aa";
console.log(theName);
console.log(theName[1]);
console.log(theName[3]);

console.log(theName.charAt(1));
console.log(theName.charAt(5));

console.log(theName.length);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());



let a="Bahaa and Diana and";

console.log(a.indexOf("and"));
console.log(a.indexOf("and",10));
console.log(a.indexOf("a"));
console.log(a.lastIndexOf("n"));
console.log(a.lastIndexOf("p",12));

let s=a.slice(2);
console.log(s);
console.log(a);

console.log(a.slice(2,5));

console.log(a.split(" "));
console.log(a.split());
console.log(a.split("a"));
console.log(a.split("a",2));

let b="Syrian National Academy";
console.log(b.length);

console.log(b.substring(2,5));
console.log(b.substring(5,2));
console.log(b.substring(b.length-5,b.length-3));

console.log(b.includes("Nat"));
console.log(b.includes("Nat" ,8));

console.log(b.startsWith("S"));
console.log(b.startsWith("S",2));
console.log(b.startsWith("rian",2));

console.log(b.endsWith("y"));


// الجلسة التالتة 

let arr =[0,1,2,3];
arr.unshift(9);
console.log(arr);
arr.push("laila");
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.includes(1));
console.log(arr.slice(2));
let arr1=[4,5,6,"laila"];
let cor=arr.concat(arr1);
console.log(arr);
console.log(arr1);
console.log(cor);
console.log(arr.join("@"));
console.log(arr.join(""));


let arrr=[1,2,3,4,["laila","daina"]];
arrr.unshift(0);
console.log(arrr);
arrr[5].push("yousaf");
console.log(arrr);
let v=arrr.join("");
let j=v.slice(5,10);
console.log(j.toUpperCase());

for(let i=1;i<5;i++){
    for(let j=0;j<i;j++){
        console.log("$");
    }
}


// الجلسة الرابعة

function sayHelloWorld(){
    console.log("Hello world");
};
sayHelloWorld();
function sayHelloo(userName){
    console.log(`Hi ${userName}`);
};
sayHelloo("Bahaa");
sayHelloo("Joudy");
console.log("#".repeat(15));
function calculateAge(age){
    let result= age*365;
    return result;
};
console.log(calculateAge(21));
function calc(...number){
    let result=0;
    for(let i=0;i<number.length;i++){
        result=result+number[i];
    }
    return `Final Result Is ${result}`;
};

console.log(calc(10,20,30,50,40,70));
// anonymouse function
let caula=function(num1,num2)
{
    return num1+num2;
};
console.log(caula(10,20));

// Arrow function
let print=(num3,num4) =>{
    return num3+num4;
};
console.log(print(100,200));
var ajj=1;
let bj=2;
function showText(){
    var ajj=10;
    let j=20;
    console.log(`Function- From Local ${ajj}`);
    console.log(`Function- From Local ${bj}`);
}
showText();
console.log(`From Globaal ${ajj}`);
console.log(`From Globaal ${bj}`);

let ww=10;
if(true){
    let ww=50;
    console.log(`From If Block ${ww}`);
}
    console.log(`From If Block ${ww}`);

// الجلسة  الخامسة

let arr10=[1,2,3,4,5];
let arr2=[];
for (let i=0;i<arr.length;i++){
arr2.push(arr10[i]*2);
}
console.log(arr2);
let addself=arr10.map(function(element,index,arry){
    return element+element;
}

)
console.log(addself);
console.log(arr10);
let frinds=["Ahmad","sameh","sayed","Asmma","Am"];
let fientfilter=frinds.filter(function(el,i,a){
    return el.startsWith("A");
}
)
console.log(fientfilter);
let numbers=[5,6,9,11,10,8];
let joudi=numbers.filter(function(elm,ind,ar){
    if(elm%2==0){
        return elm
    }
})
console.log(joudi);
let hhh =["laila","louh","yousef"];
let joudi2=hhh.map(function(ell,inn,arr){
    return ell.length;
})
console.log(joudi2);


let element=document.querySelectorAll("ul li");{
console.log(element);
element.forEach((ele) => {
    ele.onclick=()=>{
        element.forEach((e) => {
            e.classList.remove("active");
        });
        ele.classList.add("active");
    };
}) ;

}
// الجلسة السادسة
let user={
    theName :"Bahaa",
    theAge :21,
    saybahaa:function(){
        return "Hello Bahaa";
    },
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.saybahaa());

let myVar="country";
let user1={
    theName:"Laila",
    country:"Syria",
    age:28,
};
console.log(user1.theName);
console.log(user1["age"]);
console.log(user1.country);
console.log(user1["country"]);
console.log(user1.myVar);
console.log(user1[myVar]);
