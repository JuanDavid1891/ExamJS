//1a.
var age = 27;
//1b.
const name = "Juan David";
//1c.
var isMarried = true;
//1d.
var age = 27;
age++;
console.log(age++);
//1e. Yes, it's possible to change a variable after you have initialize it. It's called redelcaring a variable. Redeclaring a variable is useful in situations where it cannot be known if the variable has already been defined. If it exists, it knows it can use it. If it doesn't exist, it knows that it should define it before trying to use it.
//1f. No, it's not possible to the variable name, because unlike var, this one is const. So, it can't be redeclared. However, its contents can be changed, but not the variable itself. The variable is immutable. 
//2a.
console.log(typeof age);
//2b.
console.log(typeof name);
//2c.
console.log(typeof isMarried);
//2d. The following Javascript evaluates into a string, because the number is in quotation marks, so it will read it as a string instead of a number.
console.log(typeof "4");
//2e. It evaluates a string. 
console.log(typeof "Hello");
//2f. It evaluates a boolean.
console.log(typeof true);
//2g. You turn it into a number by removing the quotation marks and making it into an array object. If you make it into an array, it separates each number [1, 2, 3]. However, if you simply type 123, when you console log it will out put 123. 
let x = "123";
console.log(typeof x);
let y = [1, 2, 3]; 
console.log(y);
console.log(typeof y);
//2h. You have to put quotation marks around the variable. 
let z = 123;
console.log(typeof z);
let v = "123"; 
console.log(typeof v);
//3a. Undefined simply means that the variable has not been declared or initialized. 
//3b. The NaN acronym means "Not a Number" for a variable whose value is not a legal number or what we would consider a number.
//3c. Typeof NaN is a number. Because NotaNumber is still a numeric value. It is unknown, but to Javascript, it is still numeric. 
console.log(typeof NaN); 
//3d. The Typeof variable x is undefined. I renamed it l because if I name it x I get an error that the variable has already been declared.
let l;
let r = 0;
console.log(typeof l);
//3e. The typeof variable y is a number. I renamed it r.
console.log(typeof r);

//3f. To check how some variable called z is NaN, you use the isNaN() function.

//3g. Which is correct: x == 4 or x === 4? Why?
// for x == 4 the comparison operator is only looking at value to be equal. So, whatever x is, it will read both as a number, not a string. They have to be equal.
// for x === 4 the comparison operator is looking both at value and type to be equal. So, depending on what x is, it may read them as either a string, or a number and return true or false.
// In summary, it's best to use === always in javascript. Because if you use == then it tries to convert one type to the other type and these rules are confusing. So it's better to use == and convert the type yourself.

//3h. Which is correct: x == null or x === null? Why?
// x == null is correct because null does not have a value. So it can't use the === to check for a value. Null means the absence of a value.

// 4a. Write code that adds the numbers 10 and 15 and assigns the result to variable sum.
var u = 10;
var p = 15;
var sum = u + p;
console.log(sum);

// 4b. What is the result of the following expression: 3 + 4 * 2?
// The result is 11 because it will perform the multiplication first and then the addition. 
console.log(3 +4 * 2);

// 4c. Add parentheses to the expression to make it result 14.
console.log((3+4) * 2);
// 4d. What is the result of 20 - 8 - 2 - 4? 
// The result is 6 because in this case since it's doing subtraction, it will do it from left to right in order. 
console.log(20 - 8 - 2 - 4); 
// 4e. Add parentheses to the expression to make it result 10.
console.log(20 - (8 - 2) - 4);
// 4f. What is the result of "Hello," + "world"?
// The result concatenates the two strings. 
console.log("Hello," + "world"); 
// 4g. What is the result of "Hello".length?
//The result is it counts the number of characters in the string "Hello". 
console.log("Hello".length); 

// 5a. What is the type of true? It's a boolean.
console.log(typeof true);
// 5b. Which other boolean value exists apart from true?
// The other boolean value is false. 
// 5c. What is the value of 1 === 10? It returns false because although type is same, value is not.
console.log(1===10); 
// 5d. What is the value of 10 === 10? It returns true because both value and type are the same. 
console.log(10===10); 
// 5e. What is the result of true === false? It returns false because they are not equal in value, although they are both boolean. 
console.log(true===false);

let i = true;
let o = false;

// 5f. What is the value of !o?
// The value of !o is true, because the exclamation mark returns the opposite of the associated value. 
console.log(!o);
// 5g. What is the type of !o? It's a boolean.
console.log(typeof !o);
// 5h. What is the value of i && o? It's false. 
console.log(i&&o); 
// 5i. What is the value of i || o? It's true. 
console.log(i || o);
// 5j. What is the value of false || false || false || true? It's true. 
console.log(false || false || false || true); 
// 5k. What is the value of false && false && false && true? It's false. 
console.log(false && false && false && true);
// 5l. How can you write this shorter: i === true
// 5m. How can you write this shorter: i === false


// 6a. Write code to create an empty array in variable arr1.
var arr1; 
// 6b. What is the length of the array ["Beef", "Chicken", "Vegetarian"]?
var arr1 = ["Beef", "Chicken", "Vegetarian"];
console.log(arr1.length);

let arr = [10, 8, 1];

// 6c. Write code to replace the number 8 with 7.
arr.splice(1, 1, 7);
console.log(arr);
// 6d. Write code to add the number 2 to the end of the array.
arr.push(2);
console.log(arr);
// 6e. Write code to add the number 12 to the start of the array.
arr.unshift(12);
console.log(arr);
// 6f. Write code that prints the first item in the array to the console.
console.log(arr[0]);
// 6g. Write code that prints the items of an array arr to the console, each item should be logged separately (use a for loop!)
console.log(arr[0], arr[1], arr[2], arr[3], arr[4]);
// 6h. What does the following JavaScript evaluate into: [].length. Evaluates into 0. 
console.log([].length);
// 6i. Given an array let ingredients = ["Banana", "Oats", "Milk"], is it possible to add an item to the array?
//Yes of course it's possible to add an item to the array. You can either .push, .pop, .unshift, or .shift.
// 6j. Given an array const ingredients = ["Banana", "Oats", "Milk"], is it possible to add an item to the array?
//Yes because even though the variable is constant or immutable, the values inside the array are not. 

let arr2 = [1, 2, 3];
arr2.push(4);
arr2.shift();
let arr3 = [2, 3, 4];
let arr4 = [];
for (let i = 0; i < arr3.length; i++) {
arr4.push(1);
}

// 6k. What is the result of arr1.length? Result is 3. 
console.log(arr1.length);
// 6l. What is the result of arr2 === arr3?
console.log(arr2===arr3);
// 6m. What is the result of arr2[0] === arr3[0]?
console.log(arr2[0]===arr3[0]);
// 6n. What is the value of arr4?
console.log(arr4);
// 7a. Write a function called four that returns the value 4.
function four() {
    return 4;
}
console.log(four);

function five() {
    return 5;
    }
    function add(a, b) {
    return a + b;
    }
    function run() {
    console.log("Running...");
    }
    function whatIsTheTypeOf(v) {
    console.log("The type of v is " + typeof v);
    }

// 7b. What is the type of five()?
console.log(typeof five());
// 7c. What is the type of five?
console.log(typeof five);
// 7d. How many parameters does the function add have?
//It has two parameters.
// 7e. How many parameters does the function five have?
//it has no parameters. 
// 7f. What is the type of add(1, 2)?
console.log(typeof add(1, 2)); 
// 7g. What is the type of add("Hello, ", "world")?
console.log(typeof add("Hello, ", "world"));
// 7h. What is the type of run()?
console.log(typeof run());
// 7i. What does this code print to the console: whatIsTheTypeOf(8)?
console.log(whatIsTheTypeOf);
// 7j. What does this code print to the console: whatIsTheTypeOf(run)?
console.log(whatIsTheTypeOf(run));
// 8a. What does the following JavaScript evaluate into: typeof "4" === typeof 4?
console.log(typeof "4" === typeof 4);
// 8b. Given an array arr, of which you do not know the length. Write code that prints the last element of the array to the console.
console.log(arr.length -1);
// 8c. Write a function that has one parameter called arr and it returns a number, which is the length of the array times two.
function arrr() {
    return arrr.length * 2;
}
// 8d. Write a function that takes an argument name and prints to the console: "Hello, <name>, how are you doing?".
function names() {
    console.log("Hello," + names + "How are you doing?");
}
console.log(names);
// 8e. Can you use template strings to do the same? If you already used template strings in 8d, can you write your function with the + operator?
// Yes you can use template strings. It would be like this:
// (`Hello,` ${names} `How are you doing?`);

const ingredients = ["Banana", "Oats", "Milk"];
const commandString = "ls|cd|touch|cp";

// 8f. Write code that prints an ingredient list for pancakes using the
// variable ingredients. The list should look like this: "For pancakes,
// you will need Banana and Oats and Milk.". Use the function join!

console.log(`For pancakes, you will need ${ingredients.join()}.`);


// Note: you may use the + operator or ES6 template strings for
// question 8f!

// 8g. Use the function split to convert the string commandString into
// an array of commands.

console.log(commandString.split(""));

// 8h. Write a function that doubles an array. It:
// Has a parameter called arr, which should be an array.
// Creates a new array (you may come up with the name).
// Adds the elements of arr to the new array (use a for
// loop).
// Adds again the elements of arr to the new array.
// Returns the new array.

function arrrrr() {
    arr123 = [1, 2, 3, 4, 5];
    arr123 + arr() + arr();
    return arr123;
    console.log(arr123);
}





