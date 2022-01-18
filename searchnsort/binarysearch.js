//binary search

function binarySearch(array, first_position, last_position, value) {

    let mid = first_position + Math.floor((last_position - first_position) / 2);

    if (array[mid] == value) {
        return mid;
    }

    else if (array[mid] > value) {
        return binarySearch(array, first_position, mid - 1, value);
    }

    else if (array[mid] < value) {
        return binarySearch(array, mid + 1, last_position, value);
    }

    else {
        console.log("Not Present");
    }
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = array.length;
let value = 7;

let result = binarySearch(array, 0, n - 1, value);
console.log("The index of " + value + " is " + result);
