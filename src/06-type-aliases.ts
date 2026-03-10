// * Type Aliases in TypeScript

type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 10, y: 10 };

// We can also create type aliases for primitive types. Checkout the example below,

type ID = string | number;

let userId: ID = "sarthak01";

let productId: ID = 23;
