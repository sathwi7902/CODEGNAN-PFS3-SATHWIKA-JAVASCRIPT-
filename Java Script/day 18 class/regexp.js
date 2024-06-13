var pattern = /\d/g;
var text = "The cost is 25 $_dollars";
var x = text.match(pattern);
console.log(x);

var pattern = /\D/g;
var text = "The cost is 25 $_dollars";
var x = text.match(pattern);
console.log(x);

var pattern = /\s/g;
var text = "The cost is 25 $_dollars";
var x = text.match(pattern);
console.log(x);


var pattern = /\S/g;
var text = "The cost is 25 $_dollars";
var x = text.match(pattern);
console.log(x);


var pattern = /\w/g;
var text = "The cost is 25 $_dollars";
var x = text.match(pattern);
console.log(x);


var pattern = /\W/g;
var text = "The cost is 25 $_dollars";
var x = text.match(pattern);
console.log(x);


var pattern = /\bcost/g;
var text = "The cost is 25 $_dollars";
var x = text.match(pattern);
console.log(x);

//Meta Characters
var pattern = /h.t/g;
var text = "The cat wears the hot hat.";
var x = text.match(pattern);
console.log(x);

var pattern = /^The/g;
var text = "The cat wears the hot hat.";
var x = text.match(pattern);
console.log(x);

var pattern = /hat$/g;
var text = "The cat wears the hot hat.";
var x = text.match(pattern);
console.log(x);

var pattern = /ha*t/g;
var text = "The cat wears the hot hat haat.";
var x = text.match(pattern);
console.log(x);

var pattern = /ha+t/g;
var text = "The cat wears the hot hat.";
var x = text.match(pattern);
console.log(x);

var pattern = /hats?/g;
var text = "The cat wears the hot hat.";
var x = text.match(pattern);
console.log(x);

var pattern = /[ch]at/g;
var text = "The cat wears the hot hat.";
var x = text.match(pattern);
console.log(x);

var pattern = /\d{10}/g;
var text = "8688897224";
var x = text.match(pattern);
console.log(x);

var pattern = /hat|cat/g;
var text = "The cat wears the hot hat.";
var x = text.match(pattern);
console.log(x);

