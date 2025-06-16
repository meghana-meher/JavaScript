// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.clear()



// console.warn("This is a warning")
// console.table({name : "Meghana, age:82"})
// console.error("this is error")
// // clg -> console.log


// // variables

// // declared variables
// let name;
// // assign value
// let banana;
// banana="banannaanaa"
// console.log(banana)

// // arithematic operations
// let firstFavNum =5
// let secondFavNum =9

// console.log(firstFavNum+secondFavNum)
// console.log(firstFavNum-secondFavNum)
// console.log(firstFavNum*secondFavNum)
// console.log(firstFavNum/secondFavNum)
// console.log(firstFavNum%secondFavNum)
// console.log(firstFavNum**secondFavNum)

// // boolean
// // falsy values(u will get false)

// // false, null(programmer), undefined(system), 0, -0, NaN, '', "". ``,(empty quotes)

// let isJsProgrammingLanguage =true

// let isJsHard = false
// let favNum = 5
// console.log(isJsProgrammingLanguage)
// console.log(isJsHard)
// console.log(favNum + undefined) //NaN

// // comparison operators
// // relational operators
// console.log(10>10)//false
// console.log(10<10)//false
// console.log(10>=10)//true
// console.log(10<=10)//true

// // ===============================
// // equality operators
// // === strict (type + value)
// // !== strict non-equality operators(type + value)
// // == lose equality operator (value)
// // != lose not equality operator (value)

// console.log(10===10)//true
// console.log(10===10)//true
// console.log(10 == '10') //true
// console.log(10!=10)//false
// console.log(10!=20)//true


// // let firstFavNum =5
// // let secondFavNum =9
// console.log(firstFavNum > secondFavNum) // false
// console.log(firstFavNum < secondFavNum) // true
// console.log(firstFavNum >= secondFavNum) // false
// console.log(firstFavNum <= secondFavNum) // true
// console.log(firstFavNum === secondFavNum) // false
// console.log(firstFavNum == secondFavNum) // false
// console.log(firstFavNum !== secondFavNum) // true
// console.log(firstFavNum != secondFavNum) // true


// strings

// let fName = "Meher"
// let lName ="Meg"

// 1. concatenation
// let fullname = fName.concat(lName)
// console.log(fullname)

// 2.Append
// fName += " Something else"
// console.log(fName) //Meher Something else

// 3. Length
// console.log(fName.length)

// 4. Cases
// console.log(fName.toLowerCase())
// console.log(fName.toUpperCase())

// 5.Slice
// console.log(fName.slice(0,3)) //Meh
// console.log(fName.slice(1,5)) //eher

// 6. Split & join
// console.log(fName.split('')); //[ 'M', 'e', 'h', 'e', 'r' ]
// console.log(fName.split(' ')); //[ 'Meher' ]
// console.log(fName.split('').join('')); //Meher

// 7. Includes
// console.log(fName.includes("M"))//true
// console.log(fName.includes("X"))//false

// let justName = "    meghana meher     "
// console.log(justName) //    meghana meher 

// // 8. Trim
// console.log(justName.trim())//meghana meher


let favActorFname = "Mathew"
let favActorLname = "Perry"

let fullActor = favActorFname+ " "+ favActorLname
let uppercase = fullActor.toUpperCase()
let message = `My Fav actor is ${uppercase} & he is old,`
message += ` his best show is friends`
console.log(message)
