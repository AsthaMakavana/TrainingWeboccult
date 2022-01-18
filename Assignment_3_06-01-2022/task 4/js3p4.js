//Do multiplication elements of two array with same length and create 3rd array

const array1 = [2, 4, 8, 1];
const array2 = [3, 5, 7, 9];
const array3 = [];

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (i == j) {
            array3.push(array1[i] * array2[j]);

        }
    }

}
console.log("Multiplication of two array is:");
console.log(array3);