// * Classes in TypeScript

class Employee {
  // * Properties
  public fname: string;
  public lname: string;
  protected email: string;
  protected contactNumber: number;
  public designation: string;

  // * Constructor
  constructor(
    fname: string,
    lname: string,
    email: string,
    contactNumber: number,
    designation: string,
  ) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.contactNumber = contactNumber;
    this.designation = designation;
  }

  // * Methods
  public showBio(): string {
    return `Hello, I am ${this.fname}$ {this.lname}, I am a ${this.designation}`;
  }

  // * Getter
  public getFullName(): string {
    return `Fullname: ${this.fname} ${this.lname}`;
  }

  // * Setter
  public setFirstName(name: string): void {
    this.fname = name;
  }
}

type Model = string | number;

class Car {
  public carName: string;
  public model: Model;
  public horsePower: number;
  public amount: number;
  public builtYear: number;

  constructor(
    carName: string,
    model: Model,
    horsePower: number,
    amount: number,
    builtYear: number,
  ) {
    this.carName = carName;
    this.model = model;
    this.horsePower = horsePower;
    this.amount = amount;
    this.builtYear = builtYear;
  }

  public getCarDetails(): string {
    return `Car Details:
        Name: ${this.carName},
        Model: ${this.model},
        HorsePower: ${this.horsePower},
        Amount: ${this.amount},
        Built Year: ${this.builtYear}`;
  }
}

let car = new Car("Ford Mustang", "GT", 450, 55000, 2022);

console.log(car.getCarDetails());

class Student {
  constructor(
    private id: number,
    public name: string,
    protected department: string,
  ) {}

  getStudentDetails(): string {
    return `${this.name} works in ${this.department}`;
  }
}

let student = new Student(1, "Sarthak Kamble", "Information Technology");

console.log(student.getStudentDetails());
