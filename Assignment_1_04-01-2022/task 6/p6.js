//Return True if element 1 is divisible 2 and vice versa else False

function myFunction(a,b) {
    if (a % b == 0 || b % a == 0) {
        return true;
      }  
    else {
        return false;
      }
}
console.log(myFunction(5,10));
console.log(myFunction(15,5));
console.log(myFunction(15,10));
