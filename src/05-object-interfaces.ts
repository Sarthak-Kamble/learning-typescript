// * Object type annotation
let user: { name: string; age: number } = {
  name: "Sarthak",
  age: 25,
};

// So currently in the above object we can only have two keys but object keys can increase which can be hard to maintain so for that we can use "Interface" in TypeScript

interface User {
  name: string;
  age: number;
  designation: string;
  contactNumber: number;
  email?: string; // Optional Field
  readonly id: number; // Readonly will throw an error if we try to update it as you can see below
}

// Instead of writing types for each key in the object you can use the above interface
// let newUser: {
//   name: string;
//   age: number;
//   designation: string;
//   contactNumber: number;
// } = {
//   name: "Sarthak",
//   age: 25,
//   designation: "SDE-1 (Frontend)",
//   contactNumber: 123456789,
// };

let newUser: User = {
  name: "Sarthak",
  age: 25,
  designation: "SDE-1 (Frontend)",
  contactNumber: 123456789,
  id: 10,
};

console.log(newUser);

// ! newUser.id = 1;   Cannot assign to 'id' because it is a read-only property.

interface Product {
  name: string;
  price: number;
  getDiscount(percent: number): number;
}

let product: Product = {
  name: "Laptop",
  price: 2000,
  getDiscount(percetage: number): number {
    return this.price / (percetage * 100);
  },
};
