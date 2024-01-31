const fibonacci = function(x) {

    if (!Number.isInteger(x)) {
        x = parseInt(x);
    }

    if (x === 0) return 0;
    if (x < 0) return "OOPS";
 
    let a = 0;
    let b = 1;

    for (let i = 1; i < x; i++) {
        b += a;
        a = (b - a);
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
