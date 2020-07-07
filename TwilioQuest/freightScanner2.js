function scan(cargo) {
    let contrabandFound = [];
    for (let i = 0; i < cargo.length; i++) {
        if(cargo[i] == 'contraband'){
            contrabandFound.push(i);
        };
    }
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