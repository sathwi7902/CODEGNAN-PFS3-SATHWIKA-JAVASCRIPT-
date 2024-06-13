//Types of Implementations of functions
//Function Declaration
function hello1(){
    console.log("World1");
}
hello1();

//function expression
var hello2 = function(){
    console.log("World2");
}
hello2();

//arrow function
var hello3 = () =>{
    console.log("World3");
}
hello3();

//Immediately Invoked function Expression(IIFE)
(function (){
    console.log("World4");
})();

//Named Function Expression
var hello5 = function
hello6(){
    console.log("World5");
}
hello5();

//Types of user defined function
//WP-WR
function type1(x,y){
    return x+y
}
console.log(type1(10,20));
var z = type1(60,20)
console.log(z);

//WP-WOR
function type2(a,b){
    console.log(a*b);
}
type2(10,2);

//WOP-WR
function type3(){
    return 10;
}
console.log(type3())
var z = type3();
console.log(z);

//WOP-WOR
function type4(){
    console.log("World no 1");
}
type4();