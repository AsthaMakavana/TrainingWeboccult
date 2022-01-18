//Write a program to display the multiplication table of a given integer

function multiplication(x, y) {

    if (y > 10) {
        return null;
    }
    else {
        let result = x * y;
        console.log(x + " * " + y + " = " + result);
    }

    y++;
    multiplication(x, y);
}

multiplication(7, 1);
