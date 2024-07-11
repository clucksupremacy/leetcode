function twoSum(nums, target) {
    let map = new Map();
    for (i = 0; i < nums.length; i++) {
        addend = target - nums[i];
        index_addend = map.get(addend);

        map.set(nums[i], i);
    
        if ((index_addend != undefined) && (i !== index_addend)) {
            return [i, index_addend];
        }
    }
}