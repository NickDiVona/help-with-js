// STRINGS
// strings can use single quotes, double quotes, or backticks

// SINGLE OR DOUBLE QUOTES
// make sure for every opener, there is a matching closer
let myStr = 'Hello';
let myOtherStr = 'Hey there';

// NESTING
// nesting quotes requires different type of quotes
// the below example works if the double quotes are on the outside, so long as the nested string is not in double quotes
const mySaying = 'I say to you, "Hello!"';

// ADDING VARIABLES TO STRINGS
// first create a placeholder
const myName = 'Nick';
// create the larger string, and add the previous one to this
// make sure to include a space before/after or the variable won't be spaced properly
// the following example works with either single or double quotes
let myGreeting = 'My name is ' + myName;

// BACKTICKS (template literals)
// using backticks we can do things in a more stylistic way
// we can change myGreeting to make it look better by using backticks
// this allows us to write a more native-looking string with variables
myGreeting = `My name is ${myName}`;

// template literals also allow us to make strings multiline
// this also supports blank lines
const myMultilineString = `hello

world`;

// NUMBERS IN STRINGS
// it is very important that you understand that once a number is in a string, not stored as a variable, it loses its ability to be used as a number and is instead just another character.
const num1 = 2;
const num2 = '5';

// if we try to add these two, we do not get 7, we get 25. However 25 is also not a number here, we essentially have 2 and '5' next to each other. This means adding another number to this doesn't work.
const sumthingWrong = num1 + num2; // 25
const addingToSum = sumthingWrong + 7; //257

// if we flip the order that we have these numbers in, this still doesn't allow us to add to the values
const stillWrong = num2 + num1; // 52
const addingToSumv2 = stillWrong + 4; // 524
