//Arithmetic Operators
console.log("Arithmetic Operator")
var a = 10;
var b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Assignment Operators
console.log("Assignment Operator");
var a = 10;
a += 2;
console.log(a);
a-=2;
console.log(a);
a/=2;
console.log(a);
a%=2;
console.log(a)

//Comparision Operators
console.log("Comparision Operator");
var a = 5;
var b = '5';
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b)
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

//Logical Operators
console.log("logical operator");
var a = 5;
var b = 2;
console.log((a>b) && (a<b));
console.log((a>b) || (a<b));
console.log(!(a<b));

//Unary Operators
console.log("Unary Operator");
var  a = '5';
console.log(+a);
console.log(-a);

//Ternary OPerators
console.log("Ternary Operator");
var x = 10;
var y = 20;
var z = (x<y)? "Yes" : "No";
console.log(z)

//Increment Operator
console.log("Increment Operator");
var x = 10;
console.log(x++);
console.log(x)

//Decrement Operator
console.log("Decrement Operator");
var y = 20;
console.log(y--);
console.log(y);

//String Concatenation
console.log("String Concatenation");
var x = "Hello"
var y = "World"
var z = x+y;
console.log(z);