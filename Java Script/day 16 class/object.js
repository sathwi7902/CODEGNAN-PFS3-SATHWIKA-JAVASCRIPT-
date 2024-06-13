//Method 1
//Creating an object
var details = {
    name :'sathwika',
    Age : 21,
    Gender:'Female'
}

//Accessing
console.log(details.name);

//Adding an element
details.coures = 'Python Fullstack'
console.log(details);

//Deleting an element
delete details.Age;
console.log(details);

//Methods
console.log(Object.keys(details));
console.log(Object.values(details));
console.log(Object.entries(details));

//Method 2
//Creation
var car = new Object();
car.name = 'Innova';
car.company = 'Toyota';
car.gear = 'Manual';

//Accessing
console.log(car['name']);

//Adding elements
car["fuel"] = "Petrol";
console.log(car);

//Modification of elements
car["gear"] = "Automatic";
console.log(car);

//Deleting Elements
delete car["gear"];
console.log(car);

//Methods
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

