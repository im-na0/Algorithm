function solution(nums) {
    const numSet = new Set(nums);
    const k = nums.length / 2;
    return Math.min(k, numSet.size);
}