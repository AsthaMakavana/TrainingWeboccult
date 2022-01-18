// Return True if given variable is float else return False

function isFloat(num){
    if (Number(num)==num && num%1!==0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isFloat(10.3546));
console.log(isFloat(25));
console.log(isFloat(59.20));
