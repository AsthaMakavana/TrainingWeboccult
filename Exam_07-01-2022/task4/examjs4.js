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

var adultarray = [];
var teenagerarray = [];


for (i = 0; i < 100; i++) {

    let x = age[Math.floor(Math.random(age) * age.length)];
    let y = category[Math.floor(Math.random() * category.length)];
    let z = Math.floor(Math.random() * 100);

    var outputobj = { age: x, category: y, visitors: z };
    console.log(outputobj);
}


var input = outputobj;
var adultmovie=0, adultnews=0, adulteducation=0, adultsports=0, adultpolitics=0;
var teenagemovie=0, teenagenews=0, teenageeducation=0, teenagesports=0, teenagepolitics=0;

for(i=0;i<i.length;i++) {
    if(input[i].age == "adult") {
        adultmovie+= input[i].visitors;
    }
    else if (input[i].category == "movie") {
        adultmovie+= input[i].visitors;
    }
    else if (input[i].category == "news") {
        adultnews+= input[i].visitors;
    }
    else if (input[i].category == "education") {
        adulteducation+= input[i].visitors;
    }
    else if (input[i].category == "sports") {
        adultsports+= input[i].visitors;
    }
    else if (input[i].category == "politics") {
        adultpolitics+= input[i].visitors;
    }
}


