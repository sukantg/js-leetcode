/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = (nums, target) => {

    let storage = {} 
    //dictionary stores difference from target and index


    for(let[index,num] of nums.entries()) {
        // check if any of the differences stored matches current number
        if (storage[num] !== undefined) return [storage[num],index];
        storage[target-num] = index;

    }

}