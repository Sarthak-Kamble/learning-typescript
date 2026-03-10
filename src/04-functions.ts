/*
 * Functions in TypeScript
 */

// Basic types of Function
function add(a: number, b: number): number {
  return a + b;
}

// console.log(add(2, 4));

// Optional parameters
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}`;
  }

  return `Hello, ${name}`;
}

// Default parameters
function multiply(a: number, b: number = 1): number {
  return a * b;
}

// Rest Parameters
function sum(...numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0);
}

// Arrow Functions
const divide = (a: number, b: number): number => a / b;
