let num1 = 10, num2 = 35, num3 = 23
let largest = Math.max(num1, num2, num3)
console.log(largest)

let str = 'Akash'
let reversed = str.split('').reverse().join('')
console.log(reversed)

let number = 18;
let isPrime = true;

if (number === 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if(isPrime){
    console.log('prime number')
}
else{
    console.log('not a prime number')
}

let number1 = 15

function factorial(n){
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n-1)
}
console.log(factorial(number1))

let n = 10;
let fib = [0, 1];

for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log("Fibonacci Series: " + fib.join(", "));

let num = 12321
let string = num.toString()

let reversed1 = string.split('').reverse().join('')
if (reversed1 === string){
    console.log('it is palindrome')
}

let number2 = 1234;
let sum = 0

while(number2 > 0){
    sum += number2%10
    number2 = number2/10
}
console.log("sum of digits: " + sum)

let string1 = 'Akaaaaaaash123'
let finalString = string1.replace(/\D/g, '')
console.log(finalString)

