/*
    In TypeScript, literal types allow you to specify that a variable or parameter must have an exact, specific value, 
    rather than a general type like string or number. They enhance type safety by restricting the permissible values 
    to a predefined set, often used in combination with union types. 

*/

// * String literal Types
let direction: "North" | "South" | "East" | "West";

// direction = "up" // ! Error

// * Numeric literal Types
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;

// * Combining with other literal Types

type SuccessResponse = {
  status: "success";
  data: any;
};

type ErrorResponse = {
  status: "error";
  data: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;
