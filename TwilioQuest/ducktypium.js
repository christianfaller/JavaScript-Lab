class Ducktypium {

    constructor(crystalColor) {
        this.calibrationSequence = [];
        if (crystalColor === 'red' || crystalColor === 'blue' || crystalColor === 'yellow' ) { //throw error if wrong color
            this.color = crystalColor;
        } else {
            throw new Error('Invalid color');
        }
    }



    refract(refractColor) {
        if (refractColor === 'red' || refractColor === 'blue' || refractColor === 'yellow' ) { //throw error if wrong color
            if (refractColor === this.color) {
                return this.color;
            } else if (refractColor === 'blue' && this.color === 'red') {
                return 'purple';
            } else if (refractColor === 'blue' && this.color === 'red') {
                return 'purple';
            } else if (refractColor === 'yellow' && this.color === 'blue') {
                return 'green';
            } else if (refractColor === 'blue' && this.color === 'yellow') {
                return 'green';
            } else if (refractColor === 'yellow' && this.color === 'red') {
                return 'orange';
            } else if (refractColor === 'yellow' && this.color === 'red') {
                return 'orange';
            } 
        } else {
            throw new Error('Invalid color');
        }
    }


    calibrate(calibrationNumbers) {
        calibrationNumbers.sort(); // Sort the numbers from smallest to largest
        this.calibrationSequence = calibrationNumbers.map(item => item * 3); //Multiply each number in the array by 3 and assign the resulting array to calibrationSequence variable.
    }
}

const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]