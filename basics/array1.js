// array sort

const orgArray = [5,3,4,1,9,1];

const copyArray = [...orgArray]; // Create a copy of the original array

for(let i = 0; i < copyArray.length - 1; i++) {             //0
    for(let j = 0; j < copyArray.length - i - 1; j++) {     //
        if(copyArray[j] < copyArray[j + 1]) {       //5 > 3    //
            // Swap elements
            let temp = copyArray[j];
            copyArray[j] = copyArray[j + 1];
            copyArray[j + 1] = temp;
        }
    }
}

console.log(copyArray);