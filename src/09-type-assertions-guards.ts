/*
    * Type Assertions in TypeScript

    - Type assertion in TypeScript is a technique for manually overriding the compiler's inferred type for 
    a value, telling it to treat the value as a specific, different type. It is purely a compile-time construct 
    and has no impact on the runtime behavior or the underlying data itself.
    
*/

let someValue: unknown = "Hello TypeScript Developers";

// There are two ways to use Type Assertions in TypeScript  one using the "as" keyword and this is the preferred method.
let techniqueOne: number = (someValue as string).length;

// Angle bracket syntax
let techniqueTwo: number = (<string>someValue).length;

/*
    The as syntax is generally preferred, especially when working with JSX/TSX files in frameworks like React, as the 
    angle brackets can conflict with the JSX tag syntax.
*/

/*
    * Type Guards

    - Type guards in TypeScript are expressions that perform runtime checks to ensure a value conforms to a specific 
    type within a conditional block. This process, known as narrowing, allows the TypeScript compiler to infer a more 
    specific type for a variable, improving type safety and enabling access to type-specific properties and methods 
    without errors.

*/

function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length);
  } else {
    console.log(value.toFixed(2));
  }
}

// * "instanceOf" type guards

class Dog {
  bark() {
    console.log("Bark");
  }
}

class Cat {
  meow() {
    console.log("Meow");
  }
}

function makeSount(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
