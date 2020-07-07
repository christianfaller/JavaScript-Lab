function getLaserSetting(magicWord) {
 if(magicWord === 'please') {
     return 'OFF';
 } else {
     return 'ON';
 }
}

console.log('The current laser setting is: ' + getLaserSetting('please'));