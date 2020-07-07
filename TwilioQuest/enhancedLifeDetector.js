const lifeStatus = process.argv[2];

if (lifeStatus == 0) {
    console.log('alive');
} else if (lifeStatus == 1) {
    console.log('flowering');
} else if (lifeStatus == 2) {
    console.log('shedding');
} else {
    console.log('other');
}