//factorial number

function factorial(number) {
    if (number == 0) {
        return 1;
    }
    return number * factorial(number - 1);
}

//console.log("Factorial of " + number + " is " + (number * factorial(number - 1)));
console.log(factorial(5));