function canSmoke(age) {
    return age >= 18;
}

const canSmokeVariable = function(age) {
    return age >= 18;
};

const canSmokeArrow = (age) => age >= 18;

function allowedToIn(name, age, department) {
    if (canSmoke(age)) {
        console.log(`${name} is allowed to enter ${department}`);
    } else {
        console.log(`${name} is not allowed to enter ${department}`);
    }
}

allowedToIn("John", 20, "Office");
allowedToIn("Alice", 16, "Office");

console.log(canSmoke(20)); // true
console.log(canSmokeVariable(16)); // false
console.log(canSmokeArrow(25)); // true


function sendSMS(smsText) {
    
    const smsCount = Math.ceil(smsText.length / 60);

    
    console.log(`You need ${smsCount} sms to send text - ${smsText}`);
}


// sendSMS("This package is native ESM and no longer provides a CommonJS export.");

function reverse(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    return str === reverse(str);
}

function getPaired(arr) {
    const paired = arr.filter(num => num % 2 === 0);
    return paired.reverse();
}

console.log(reverse("Ihor")); 
console.log(isPalindrome("aba")); 
console.log(isPalindrome("abc")); 
console.log(getPaired([1, 2, 3, 4, 5, 6])); 

