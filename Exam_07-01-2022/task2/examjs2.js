//

numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
letterArray = ["a", "b", "c", "d", "e"]

randomArray = []

let concArray = numberArray.concat(letterArray);

//console.log(concArray);

for (i = 0; i < 10; i++) {
    let x = Math.floor(Math.random(numberArray) * 15);
    let y = Math.floor(Math.random(letterArray) * 15);
    let z = Math.floor(Math.random(concArray) * 15);
    randomArray.push(concArray[x] + " " + concArray[y] + " " + concArray[z]);
}

console.log(randomArray);
