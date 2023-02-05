//alert("Hello, SDA!");

console.log("I may be a Front-end developer!");

var fullName = "Tiina Raudla";

console.log(fullName.length);
console.log(fullName);

let locationCity = "Tallinn";

const ZIPCODE = 72839;

locationCity = "Tartu";

let isActive = true;
let age = 32;
let salary = 4500.98;

let a = '5';
let b = 5;

if (a == b) {
    console.log("A is same value as B");

} else if(a === b) {
    console.log("A is same value and type as B");
}
var text = "";
var i;
for (i = 0; i< 5; i++) {
    text += "The number is " + i + " ";
}
while (i <= 10) {
    if (i % 2 === 0) {
        text += "The number is " + i;
    }
    i++;
}
alert(text);

let arrayFruit = ["Apple", "Orange", "Mango"];
console.log(arrayFruit);

arrayFruit.pop()
console.log(arrayFruit);

arrayFruit.push("Banana");
console.log(arrayFruit);

//JSON - JavaScript Object Notation
let student = {
    "name": "Tiina Raudla",
    "age" : 49,
    "address" : {
        "street" : "Viru",
        "city" : "Kadrina",
        "zipcode" : 201456
    },
    "joinDate": "2022-10-7",
    "active" : true,
    "grade" : 3.0
}
console.log(student);
console.log(student.name);
console.log(student.address);
console.log(student.address.city);
console.log(Object.keys(student));

// Array of JSON or JSON array
let students = [
    {
        "name": "Tiina Raudla",
        "age" : 49,
        "address" : {
            "street" : "Viru",
            "city" : "Kadrina",
            "zipcode" : 201456
        },
        "joinDate": "2022-10-7",
        "active" : true,
        "grade" : 3.0
    },
    {
        "name": "Mark Zukerberg",
        "age" : 32,
        "address" : {
            "street" : "Narva",
            "city" : "Tartu",
            "zipcode" : 723456
        },
        "joinDate": "2022-10-7",
        "active" : true,
        "grade" : 5.0
    }
];
console.log(students);
console.log(students[1]);
console.log(students[0].joinDate);

//FUNCTIONS
function isStudentPassed (student) {
    return student.grade > 3.5;
}
let studentPassResult = isStudentPassed(student);
console.log(student.name + "'s result: " + studentPassResult);

//Accessing HTMLs
let image = document.getElementById("image-block");
image.innerHTML = "<h2>Hellou!!!!</h2>";
console.log(image);

let liTags = document.getElementsByTagName('li');
console.log(liTags);

//Arraw functions
const isStudentPassed2 = (student) => {return student.grade > 3.5;};
isStudentPassed2(student);

