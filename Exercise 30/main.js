const Oparate = (a, b,callback) => {
    return callback(a , b)
}

function Multiply(a,b){
    return a * b
}

function Division(a , b){
     if (b === 0) {
       return "Cannot divide by zero!";
     }
    return a / b
}

console.log("Multiply : ", Oparate(10, 5, Multiply))
console.log("Division : ", Oparate(10, 5, Division))