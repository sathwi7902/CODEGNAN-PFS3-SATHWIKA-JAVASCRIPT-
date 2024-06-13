//If Statement
var a = 12;
if (a%2==0){
    console.log("It's an even number");
}

//If-Else statement
var b = 13
if (b % 2==0){
    console.log("It's an even number");
}
else{
    console.log("It's an odd number");
}

//if - else if-else statement
var a = 10;
if (a>0){
    console.log("Positive Number");
}
else if (a==0){
    console.log("zero");
}
else{
    console.log("Negative Number")
}

//Switch Case
var x = 3
switch(x){
    case 1:
        console.log("Number 1");
        break;
    case 2:
        console.log("Number 2");
        break;
    default:
        console.log("Some Number");
}

//Nested Conditional Statement
var x = 18;
var card = true;
if (x>=18){
    if (card==true){
        console.log("Yes you can vote!");
    }
    else{
        console.log("Voter card is Required");
    }
}
else{
    console.log("Not Eligible");
}

    
    