//addition

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

function addition(index) {

    if (index >= array.length) {
        return null;
    }

    index++;
    sum = sum + index;
    addition(index);
}

addition(0);
console.log(sum);
