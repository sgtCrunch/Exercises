function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let merged = [];

    while (i<arr1.length && j<arr2.length) {
        if(arr1[i] > arr2[j]){
            merged.push(arr2[j]);
            j++;
        }
        else{
            merged.push(arr1[i]);
            i++;
        }
    }

    if(i>=arr1.length){
        merged = merged.concat(arr2.slice(j));
    }
    else{
        merged = merged.concat(arr1.slice(i));
    }

    return merged;

}

function mergeSort(arr) {
    if(arr.length <2) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
}

module.exports = { merge, mergeSort};