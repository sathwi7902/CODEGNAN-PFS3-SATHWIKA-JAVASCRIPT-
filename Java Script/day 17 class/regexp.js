var re1 = new
RegExp("j.*t","g");
var re2 = /j.*t/;

console.log(re1.global);
re1.global = false;
console.log(re1.global);

var re = /j.*t/i;
console.log(re.test("Javascript"));

var re3 = /j.*t/i;
console.log(re3.exec("Javascript")[0]);

var r1 = new
String("HelloJavaScriptabc");
console.log(r1.search(/j.*t/ig));
console.log(r1.match(/j.*t/ig));
console.log(r1.replace(/j.*t/ig,"$"));

