// array
let fruits = ["mango", "orange", "apple"]
console.log(fruits[2])//apple

//Two Dimension || nested array
const nestArr = ["one", ["two","three"], 1, true, false];
console.log(nestArr[4])//false
console.log(nestArr[1])//two, three
console.log(nestArr[1][1])// three

let favSingers=["Jimin", "Taylor", "Papon"];
console.log(favSingers[0])
let favNumbers =[5,9,1,7]
let mixedArr =["something", ["hello world"], 123, true]
console.log(mixedArr)
console.log(mixedArr[0])
console.log(mixedArr[1])
console.log(mixedArr[2])
console.log(mixedArr[3])

// array methods

// push() -> Add item at the end of the array
// pop() -> Remove item at the end of the array
// shift() -> Remove from the start
// unshift() -> Add to start
// concat() -> combining arrays

const fruit = [
  "apples",
  "pomegranate",
  "mango",
  "strawberries",
  "pineapple",
  "grapefruit",
];

console.log(fruit);
fruit.push("banana");
fruit.pop();
fruit.shift();
fruit.unshift("orange");

// CONCAT
// const fruit = ["apples", "pomegranate", "mango"];
// let moreFruits = ["strawberries", "pineapple", "grapefruit"];
// let totalFruits = fruit.concat(moreFruits);

console.log(fruit);
console.log(fruit.join("$"))

// OBJECTS
const person={
    name : "meghana",
    age:80,
    location:["Telangana", "India"],
    isProgrammer:true,

};
console.log(person.location)
console.log(person['location'])


const sample={
    10:"ten",
};
// console.log(sample.10)//this will show a error
console.log(sample['10'])//ten o/p this will not give error for this purpose we will use bracket 
