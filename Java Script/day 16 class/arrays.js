//Creation of array
var a = [10,20,30,40,50];
var b = new Array('a','b','c','d');
console.log(a);
console.log(b);

//Accessing through indexing
console.log(a[3]);
console.log(b[0]);

//Modification of elements
a[0] = 100;
console.log(a);
b[2] = 'z';
console.log(b);

//Push
a.push(600);
console.log(a);

//Pop
b.pop(b);
console.log(b);

//shift
a.shift();
console.log(a);

//unshift
a.unshift(100);
console.log(a);

//slice
x = [1,2,3,4,5,6,7,8,9];
console.log(x.slice(3,6));

//concat
var z = a.concat(b);
console.log(z);

//join
var d = ["sathwika","pithani"];
var name = d.join(" ");
console.log(name);

//indexof
var m = [10,20,30,40,50];
console.log(m.indexOf(50));


//for each
var values = ["sathwika","pithani"];
values.forEach(function(x){
    console.log(x);
});

//Map
var val = [1,2,3,4,5];
let res = val.map(function(x){
    return x*2
});
console.log(res);

//Filter
var v = [1,2,3,4,5,6,7,8,9];
let res1 = v.filter(function(x){
    return x %2 == 0;
});
console.log(res1);

//Reduce
var items = [1,2,3,4,5];
var res3 = items.reduce(function(acc,cv){
    return acc+cv;
},0);
console.log(res3);


