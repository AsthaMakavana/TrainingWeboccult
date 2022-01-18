varr = " ";

function add(index) {
    if (index > 3) {
        return index;
    }
    console.log("B");
    varr = add(index + 1);
    console.log("A");
    return varr;
}
add(0)
