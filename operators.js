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

function canDrinkAlcho(age){if(age< 18){
    return "ти дуже маленький"
}  else if (age> 100){
    return " ти застарий, ще можеш померти";
}else {
    return "ти можеш все";
}}