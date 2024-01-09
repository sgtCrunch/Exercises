// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {

    //if(num1+"".length !== num2+"".length) return false;

    let num1Count = digitFreq(num1);
    let num2Count = digitFreq(num2);


    for(let key of num1Count.keys()){
        if(num1Count.get(key) !== num2Count.get(key)) return false;
    }

    return true;

}

function digitFreq(num) {
    let count = new Map();

    while(num !== 0) {
        let digit = num%10;
        count.set(digit, count.get(digit) + 1 || 1);
        num = Math.floor(num/10);
    }

    return count;
}
