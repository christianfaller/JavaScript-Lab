function calculatePower(powerSettings) {
    let totalPower = 0;
    for (i = 0; i < powerSettings.length; i++) {
        increasedPower = powerSettings.map(item => item * 2); // multiply by two 
        totalPower = increasedPower.reduce((sum, item) => sum + item, 0); // sum up
        }
    return totalPower;
  }
  const laserPower = calculatePower([1, 3, 8]);
  console.log('Required laser power is ' + laserPower); // should be 24