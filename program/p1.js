//Write a program to find all the numbers which are divisible by 7 and 9

function divisible_number(x) {

    if (x > 10) {
        return null;
    }
    else if (x % 7 == 0) {
        console.log(x + " is divisible");
    }
    else if (x % 9 == 0) {
        console.log(x + " is divisible");
    }

    x++;
    divisible_number(x);
}

divisible_number(7);
