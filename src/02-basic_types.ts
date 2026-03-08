// * Primitive Types in TypeScript

// String Type
let username: string = "sarthak_kamble";
console.log(username);

// Number Type
let age: number = 25;
console.log(age);

// Boolean Type
let isAdmin: boolean = true;
console.log(isAdmin);

// Arrays
let nums: number[] = [1, 2, 3, 4]; // Adding a string in the above array will throw an error as we can't add a string to the numbers array
console.log(nums);

let messages: string[] = ["I", "Love", "TypeScript"]; // Similarly adding a number to an error which can only contain string will throw an error
console.log(messages);

// * Tuples in TypeScript
let person: [string, number] = ["Sarthak", 25];

// * Enum in TypeScript
enum Color {
  Red,
  Blue,
  Green,
}

let favoriteColor: Color = Color.Blue;

// * Any Type in TypeScript (Avoid when possible)
let randomValue: any = "Sarthak";
randomValue = 25;
randomValue = true;

// * Unknown (Safer than 'any')

let userInput: unknown;

userInput = "Hello Developers";
userInput = 12345;
userInput = "Test@1234";

// * Void (for functions that don't return)
function subscribe(message: string): void {
  console.log(message);
}

// * Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;
