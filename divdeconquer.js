function countZeros(nums){

    let middle = Math.floor(nums.length/2);

    if(nums.length == 1) return +(!nums[0]);

    if(nums.length < 3){

        if(nums[0] + nums[1] == 2) return 0;
        if(nums[0] + nums[1] == 1) return 1;
        if(nums[0] + nums[1] == 0) return 2;
    
    }

    console.log("middle Next: ", nums[middle+1]);

    if(nums[middle] === 1 && nums[middle + 1] === 0) return nums.length - middle - 1;
    if(nums[middle] === 1 && nums[middle + 1] === 1) return countZeros(nums.slice(middle+1));
    if(nums[middle] === 0 && nums[middle + 1] === 0) return (nums.length - middle) + countZeros(nums.slice(0,middle));
}

console.log(countZeroes([1,1,1,1,0,0])); // 2
console.log(countZeroes([1,0,0,0,0])); // 4
console.log(countZeroes([0,0,0])); // 3
console.log(countZeroes([1,1,1,1])); // 0


function sortedFrequency(nums, num){
    
    let first = findFirst(nums, num);
    if(first == -1) return first;
    let last = findLast(nums, num);
    return last - first + 1;
    
}


function findFirst(arr, num, low = 0, high = arr.length - 1){
    if(high >= low){
        let middle = Math.floor((low + high) / 2);
        if((middle === 0 || num > arr[middle -  1]) && arr[middle] === num){
            return middle;
        }else if(num > arr[middle]){
            return findFirst(arr, num, middle + 1, high);
        }else {
            return findFirst(arr, num, low, middle - 1);
        }
    }
    return -1;
}

function findLast(arr, num, low = 0, high = arr.length - 1){
    if(high >= low){
        let middle = Math.floor((low + high) / 2);
        if((middle === arr.length - 1 || num < arr[middle -  1]) && arr[middle] === num){
            return middle;
        }else if(num < arr[middle]){
            return findFirst(arr, num, low, middle - 1);
        }else {
            return findFirst(arr, num, middle + 1, high);
        }
    }
    return -1;
}


function findRotatedIndex(arr, num){

    let pivot = findPivotPoint(arr);
    console.log(pivot);

    if(arr[arr.length - 1] < num){
        return binarySearch(arr, num, 0, pivot - 1);
    }

    return binarySearch(arr, num, pivot, arr.length - 1);

}

function binarySearch(array, num, start, end) {
    if (array.length === 0) return -1;
    if (num < array[start] || num > array[end]) return -1;
  
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (array[mid] === num) {
        return mid;
      } else if (num < array[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
}

function findPivotPoint(arr, low = 0, high = arr.length - 1){
    if(high >= low){
        let middle = Math.floor((low + high) / 2);
        if(middle === 0){
            return 0;
        }else if(arr[middle - 1] > arr[middle]){
            return middle;
        }
        return findPivotPoint(arr, middle + 1, high) + findPivotPoint(arr, low, middle - 1);
    }
    return 0;
}


function findRotationCount(arr){
    return findPivotPoint(arr);
}


function findFloor(array, num, start = 0, end = array.length - 1) {
    if (array.length === 0) return -1;
    let ans = -1;
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (array[mid] == num) {
        return array[mid];
      } else if (num < array[mid]) {
        end = mid - 1;
        if(ans > -1) return ans;
      } else if (num > array[mid]){
        start = mid + 1;
        ans = array[mid];
      }
    }
    return ans;
}