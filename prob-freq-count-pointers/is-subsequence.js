// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let count = 0;
    for(let letter of str2){
        if(str1.charAt(count)===letter) count++;
        if(count===str1.length) return true;
    }
    return false;
}
