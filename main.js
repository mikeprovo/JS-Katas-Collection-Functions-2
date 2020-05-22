// Kata 01

function add (x, y) {
    return x + y
}

console.log(add(2,4))

//kata 02

function multiply (x, y) {
    let currentValue = 0
    for (let i = 0; i < y; i+=1) {
       let z = add(x, 0)
       currentValue = add(z, currentValue)
    }

    return currentValue
}

 console.log(multiply(6,4))

 //Kata 3

 function power (x, n) {
    let currentValue = 1
    for (let i = 0; i < n; i+=1) {
       let z = multiply(x, 1)
       currentValue = multiply(z, currentValue)
    }

    return currentValue
}

 console.log(power(2,8))
 console.log(power(3,4))

 //Kata 4

 function factorial (x) {
    let currentValue = 1
    let exponet = x
    for (let i = 0; i < x; i+=1) {
       let z = multiply(exponet, 1)
       exponet = add(exponet,-1)
       currentValue = multiply(z, currentValue)
    }

    return currentValue
}

console.log(factorial(5))