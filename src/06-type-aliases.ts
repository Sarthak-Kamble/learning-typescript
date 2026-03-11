// * Type Alias in TypeScript

type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 10, y: 10 };

// We can also create type aliases for primitive types. Checkout the example below,

type ID = string | number; // We have used Union here.

let userId: ID = "sarthak01";

let productId: ID = 23;

// Difference between Type Alias vs Interface

// * The main difference between Type Alias and Interface is interface in TypeScript can be extended whereas type aliases cannot be extended. Check out the below example,

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dogBreed: Dog = {
  name: "Flash",
  breed: "Doberman",
};

// * Interfaces can be declared multiple times and will merge. Checkout the below example:

interface Account {
  name: string;
}

interface Account {
  username: string;
}

let newUser2: Account = {
  name: "Sarthak",
  username: "Sarthak412",
};

// * Use interfaces for object shapes
// * Type Aliases for unions/intersections

/*

  Examples for using Interface and Type Alias

  interface User {
    name: string,
    age: number
  }

  type UserId = string | number

 */
