// function myFunction(name){
//     if(name === "Anna"){
//         console.log("You're forbidden here")
//         return
//     }
//     console.log("Hello " + name)
// }
// myFunction("hello")
// myFunction("Maim")

// let args = ["Vam", 12, "QA"]
// console.log(...args)

// let call = (args)=>{
//     if(name === "Anna"){
//         console.log("You're forbidden here")
//         return
//     }
//     console.log("Hello " + name)
// }
// call("hello")
// call("Maim")

// let cal = (args, callback) => {
//     console.log("Hello" + args);
//     callback(args)
// }

// cal("Mak", printWord);
// cal("Anna")

function parent(){
    console.log("parent")
    let m;
    function child(){
        let r;
        console.log("child")
    }
}
// parent().child()

function canSmoke(age){
    if(age <= 18 || (name == 'owner' || role =='admin') ){
        return "ти маленький"
    } if (age>= 100){
        return " ти застарий, ще можеш померти";
    } 
        return "ти можеш все";
}
console.log(canSmoke)