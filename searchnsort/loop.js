//loop

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function loop(index) {

    if (index >= array.length) {
        return null;
    }
    else {
        console.log(array[index]);
    }

    index++;
    loop(index);
}

loop(0);
