// add whatever parameters you deem necessary
function constructNote(msg, letters) {

    if(msg.length > letters.length) return false;
    let msgCount = createFreq(msg);
    let letCount = createFreq(letters);

    for(let key of msgCount.keys()){
        if(msgCount.get(key) > letCount.get(key)) return false;
    }

    return true;

}

function createFreq(str) {
    let counts = new Map();

    for(let l of str){
        counts.set(l, counts.get(l) + 1 || 1);
    }

    return counts;
}

