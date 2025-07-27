let temp = function(C){
    let fer = (C * 9/5) + 32;
    return fer;
}

let F = temp(31)
console.log("Fer is "+F);


function tipCalculator(total, percentage=0.2){
    return total * percentage
}

console.log('Tip is '+tipCalculator(undefined,0.3))       //(undefined, 0.3) it will override the percentage but o/p will be NaN
console.log('Tip is '+tipCalculator(100))                  // (100) it will use default percentage 0.2 mentioned in function signature             