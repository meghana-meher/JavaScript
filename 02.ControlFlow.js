// conditional statements
let time =10;
let greetings;

if (time<12){
    greetings="good morning"
    console.log(greetings)
}
else if (time<17){
     greetings="good afternoon"
    console.log(greetings)
}
else{
     greetings="good evening"
    console.log(greetings)
}


let password = "5";

if(password===8){
    console.log("welcome")
}
else if(password<=8){
    console.log("Password is too short")

}
else if(password>=8){
    console.log( "password is too long")

}
else{
    console.log("provide a password")

}


// switch statement
let fruit = "banana"
switch (fruit) {
    case "banana":
        console.log("banana is good")
        break;
        case "Orange":
            console.log("I am not a fan of orange")
        break;

        case "Apple":
            console.log("how you like apples?")
        break;

    default:
        console.log("I have never heard of that fruit")
         
}

// for loop 
for (let i=0; i<= 5; i++){
    console.log("outer loop", i)
    // nested loop
for (let j =1; i<=2; j++){
    console.log("inner loop", j)
}
}

for (let name = 0; name<=5; name++){
    console.log("meghana", name)
}

// while loop
let names =10
while ( names <=100) {
    console.log("meghana", names)
    names++ //mandatory otherwise loop will not end

}

// do while loop
let myname =20
do{
    console.log("meghana", myname)
myname++
}
while(myname<=100)