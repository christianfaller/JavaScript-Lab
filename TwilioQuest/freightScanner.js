function scan(cargo) {
    let contrabandFound = 0;
    cargo.forEach( cargo => {
        if(cargo == 'contraband') {
            contrabandFound++;
        };
    });
 return contrabandFound;
};

console.log(scan([
    'shoes',
    'contraband',
    'other stuff',
    'fruit',
    'contraband',
    'contraband',
    'mapur',
    'water',
    'contraband',
]));