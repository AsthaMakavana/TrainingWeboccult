//Return True if given variable is string else return False

function isString(value) { 
	if (typeof value == "string") { 
		return true; 
	} 
    else {
        return false;
    }
} 
console.log(isString("Astha"));
console.log(isString(123));
