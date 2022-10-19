/*
Check out this awesome 
block comment
It's the header for my file!
*/

let num = 100; //Check out this killer integer!

//Normal function
function foo() {
    console.log(num);
    var num1 = 200;
};

foo();

//anonymous function
let anonFun = function() {
    console.log("hello")
};

anonFun();


//immediately invoked anonymous function
(function() {
    console.log("iify")
})();

//immediately invoked named function
(function niffy() {
    console.log("niify")
})();

//arrow iify - single line immediate call function
(() => console.log("The Arrow"))();

//single line function definition (arrow function)
//a way to write a standard function 
//definition in a single line
let gam = () => console.log("Gam Arrow");

gam();

let arr = ['arr_foo', 'arr_bar', 'arr_zar'];
console.log(arr);

arr[1] = 'arr_barbar';

console.log(arr[1]);

// adds to end of array
arr.push('arr_par')

// removes, replaces, returns
arr.splice(2, 0, "arr_new");
console.log(arr);

let arr2 = ['pig', 'sheep', 'goat']

// lil loop
for (let item in arr2) {
    console.log(item)
}

//objects
let obj1 = {
    name: "Jill",
    age: 85,
    job: "cactus hunter",
};
console.log(obj1)

//access property
console.log(obj1.name);
//OR
console.log(obj1['name']);

// reassign in object
obj1.job = 'barista'
console.log(obj1.job)

// note the `${var_name} text ${var_name}` syntax - this is JS string formatting
for (let key in obj1) {
    let value = obj1[key];
    console.log(`${key}: ${value}`);
}

// check your types, returns a string
let fall = 72
console.log(typeof(fall))


// Ranged for loop/while loop?
for (let i = 0; i <10; i++) {
    console.log(i)
}

let val = 35;

if (val > 80){
    console.log("whoah, huge nums bro!")
} else if (val > 50){
    console.log("medium num bro, keep at it")
} else {
    console.log("ah no, weak nums bro")
}

//single line if/else statement, note the question mark and colon
let y = (val >= 80) ? console.log("not bad? on that num, bro?") : console.log("what even bro?")

//traversing the DOM (document keyword for doc this is linked to)
let newVar = document.getElementById("example");
newVar.innerHTML += "You're in the matrix now bro"

