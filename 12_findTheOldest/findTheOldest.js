const findTheOldest = function(a) {
    const year = new Date().getFullYear();
    let b = a.map(x => (x.yearOfDeath || year) - x.yearOfBirth);
    b = b.sort((x, y) => x - y).pop();
    return a.find(x => (x.yearOfDeath || year) - x.yearOfBirth === b);

};

// Do not edit below this line
module.exports = findTheOldest;
