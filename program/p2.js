//Write a program to display the cube of the number for 1 to n

let n = 10;

function cube_of_number(x) {

    if (x > n) {
        return null;
    }
    else {
        let result = x * x * x;
        console.log("Cube of " + x + " is " + result);
    }

    x++;
    cube_of_number(x);
}

cube_of_number(1);
