// * Union Type (OR)
type Status = "pending" | "resolved" | "rejected";

function setStatus(status: Status): void {
  console.log(`Status set to: ${status}`);
}

// setStatus("pending");   // ? We get 3 options which are pending, resolved and rejected.

// * Intersection Types (AND)

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

let myCircle: ColorfulCircle = {
  color: "Yellow",
  radius: 10,
};
