//print 10 odd and even numbers

let n = 20;

function oddeven(x) {

    if (x > n) {
        return null;
    }
    else if (x % 2 != 0) {
        console.log(x + " is odd number")
    }
    else if (x % 2 == 0) {
        console.log(x + " is even number")
    }

    x++;
    oddeven(x);
}

oddeven(1);


// function recursive_function(argument1)  //argument1 is the argument which changes after iterations
// {
//     if (condition) //Breaking Condition
//     {
//         return result/null
//     }
//     argument1++/argument1-- //Chages in argument
//     //
//     //Action which needed to do store in output , print ,return etc...
//     //
//     recursive_function(argument1) //Recursion with new argument
// }