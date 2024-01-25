let name = "Dim";

let age = 18;
age++
age--
let weight = 100

//= - / * % 
let result = age + weight
console.log(result)
11 % 2 === 1
12 % 2 === 0
13 % 2 === 1
13 % 3 === 1
14 % 4 === 2

age += 10;

if(true){
    console.log("inside if")
} else{
    console.log("inside else block")
}

function canDrinkAlcho(age){

    //&&
    // true && true => true
    // false && true => false
    // true && false => false
    // false && false => false

    //||
    // true || true => true
    // false || true => true
    // true || false => true
    // false || false => false

    if(age <= 18 || (name == 'owner' || role =='admin') ){
        return "ти small"
    } if (age>= 100){
        return " ти застарий, ще можеш померти";
    } 
        return "ти можеш все";
}
console.log(canDrinkAlcho)
 
let role =  age>18 ? "QA" : "Student"
console.log(role)