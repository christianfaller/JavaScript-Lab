function mutate(cargo) {
    let mutatedArray = cargo.map(item => item.toUpperCase());
    return mutatedArray;
}

const cargo = ['apples', 'ray guns', 'oranges'];

console.log(mutate(cargo));