//Write a program to determine whether a given number is prime or not

function prime_number(number, index) {

    if (index > Math.sqrt(number)) {
        console.log(number + " is a Prime number");
        return null;
    }
    else if (number % index == 0) {
        console.log(number + " is not a Prime number");
        return null;
    }

    index += 1;
    return prime_number(number, index);
}

prime_number(49, 2);
