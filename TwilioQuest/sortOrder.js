const stringOne = process.argv[2].toLowerCase();
const stringTwo = process.argv[3].toLowerCase();

if (stringOne < stringTwo) {
    console.log(-1);
} 

if (stringOne == stringTwo) {
    console.log(0);
} 

if (stringOne > stringTwo) {
    console.log(1);
}
