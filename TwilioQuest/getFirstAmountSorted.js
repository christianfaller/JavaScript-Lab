function getFirstAmountSorted(inputArray, numberOfItems) {
    inputArray.sort(); // sort inputArray alphabetically
    const firstItems = inputArray.splice(0, numberOfItems); //create an array which contains the first N items of the sorted 
    return firstItems; 
};

const outputArray = getFirstAmountSorted(['bird', 'dog', 'cat', 'ant'], 2);

console.log(outputArray);
