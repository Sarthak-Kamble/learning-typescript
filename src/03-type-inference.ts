/*
    1.  Type Inference in TypeScript

    -   Type inference is the ability of the TypeScript compiler to automatically determine the types
        of variables, return values of functions, and expressions based on the value which is assigned 
        and usage, without requiring explicit type annotations. This reduces code verbosity while 
        maintaining type safety.

 */

// Now here I didn't have to explicitly mention the type because TypeScript compiler will automatically understand its type based on the value assigned to it and its usage.
let designation = "Software Development Engineer 1 (Frontend)";

// ! designation = 25;  Throws an error -> Type 'number' is not assignable to type 'string'.
