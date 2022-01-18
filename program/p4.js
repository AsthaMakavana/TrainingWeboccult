//Write a program to write sqrt of first n numbers

function squareroot(number) {

    if (number > 10) {
        return null;
    }
    else {
        console.log("Squareroot of " + number + " is " + Math.floor(Math.sqrt(number)));
    }

    number++;
    squareroot(number);
}

squareroot(1);
