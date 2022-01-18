//Write program for given formula in attached image

let a=1, b=5, c=4;
let d = (b*b) - (4*a*c);

if (d>0) {
    
    p = (-b + Math.sqrt(d))/(2*a);
    q = (-b - Math.sqrt(d))/(2*a);

    console.log("For positive: " +p);
    console.log("For negative: " +q);
}
