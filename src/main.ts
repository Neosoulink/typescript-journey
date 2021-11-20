import "./style.css";

//const app = document.querySelector<HTMLDivElement>('#app')!
//console.log(app);

// The primitives types
let str: string = "ds";
let num: number = 0;
let bool: boolean = true;

console.log("The primitives: \n", str, num, bool);

// Arrays types
let strArr: string[] = ["1", "2"];
let numArr: Array<number> = [1, 2];

console.log("\nArrays types: \n", strArr, numArr);

// ANY
let something: any = { x: 0 };
something.foo;
something.bar = () => {};
