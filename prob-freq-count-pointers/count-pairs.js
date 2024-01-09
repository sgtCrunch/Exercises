// add whatever parameters you deem necessary
function countPairs(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let count = 0;
    nums.sort((a,b) => a-b);

    while(left < right) {
        let sum  = nums[left] + nums[right];
        if(sum === target){
            count++;
            left++;
            right--;
        }
        if(sum < target){
            left++;
        }
        if(sum > target){
            right--;
        }

    }

    return count;
}
