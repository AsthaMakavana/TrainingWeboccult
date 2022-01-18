//Create 2D array of array and print all the element with it’s indexes

const array = [[21, 22], [23, 24]];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        console.log(array[i][j] + " " + [i] + [j]);
    };
}
