//linear search

var search_array = [1, 2, 3, 4, 5, 6, 7, 8];
let value = 6;

function search(search_array, value) {

    for (let index = 0; index < search_array.length; index++) {
        if (search_array[index] == value) {
            return index;
        }
    }
}

let result = search(search_array, value);
console.log("The index of " + value + " is " + result);
