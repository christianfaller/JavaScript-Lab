function calculateMass(cargo) {
    // take every string, find out lenght of each, add total length of all strigs in array
    let totalMass = cargo.reduce((sum, item) => sum + item.length, 0);
    return totalMass;

}

const cargo = ['cat', 'dog', 'bird'];
console.log(calculateMass(cargo));
