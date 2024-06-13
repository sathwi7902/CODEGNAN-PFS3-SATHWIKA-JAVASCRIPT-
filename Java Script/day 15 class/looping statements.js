//Looping Statements
//While

//While Loop
console.log("While loop");
var x = 0;
while (x<=5){
    console.log(x);
    x++;
}

//Do While
console.log("Do While");
var x = 0;
do{
    console.log(x);
    x++;
}while (x<=5);

//For Loop
//For
console.log("For Loop");
for(var i=0;i<=5;i++){
    console.log(i);
}

//for in
console.log("for in Loop");
var x = {
    a:10,
    b:20,
    c:30,
    d:40
}
for (var k in x){
    console.log(k + " , " + x[k]);
}

//for of
console.log("for of loop");
var m = [10,20,30,40,50];
for (var i of m){
    console.log(i);
}

//Loop controlled statements
//Break 
console.log("Break Statement");
var x = [29,19,29,18,14,16,47];
for (var k of x){
    if (k<18){
        break;
    }
    console.log(k);
}

//Continue
console.log("Continue Statement");
var x = [29,19,29,18,14,16,47];
for (var k of x){
    if (k<18){
        continue;
    }
    console.log(k);
}
