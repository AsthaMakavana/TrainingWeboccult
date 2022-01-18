//

var category = [
    "movie",
    "news",
    "education",
    "sports ",
    "politics"
]

var age = [
    "teenager",
    "adult"
]

var outputarray = [];


for (i = 0; i < 100; i++) {

    let x = age[Math.floor(Math.random(age) * age.length)];
    let y = category[Math.floor(Math.random() * category.length)];
    let z = Math.floor(Math.random() * 100);

    var outputobj = { age: x, category: y, visitors: z };
    console.log(outputobj);
}


