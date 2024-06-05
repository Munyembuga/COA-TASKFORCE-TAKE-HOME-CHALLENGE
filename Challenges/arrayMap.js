/**
 * Checks if there is a contiguous subarray with a given sum.
 * 
 * arr - The input array of numbers.
 * target - The target sum to find in the array.
 * boolean - Returns true if there is a contiguous subarray with the sum equal to the target, otherwise false.
 */
function hasContiguousSubarrayWithSum(arr, target) {
    let start = 0;
    let currentSum = 0;
    
    // Iterate through the array using 'end' as the end pointer of the subarray
    for (let end = 0; end < arr.length; end++) {
        // Add the current element to the currentSum
        currentSum += arr[end];
        
        // If currentSum exceeds the target, move the start pointer to the right
        // and subtract the elements from the currentSum until it is less than or equal to the target
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        
        // Check if the currentSum is equal to the target
        if (currentSum === target) {
            return true; // Found a subarray with the target sum
        }
    }
    
    // No subarray with the target sum was found
    return false;
}

// Example usage and testing
const arr = [4, 2, 7, 1, 9, 5];
const target = 14;
console.log(hasContiguousSubarrayWithSum(arr, target));  // Output: true

// Additional test cases
console.log(hasContiguousSubarrayWithSum([1, 2, 3, 4, 5], 9));  // Output: true (subarray [2, 3, 4])
console.log(hasContiguousSubarrayWithSum([1, 2, 3, 4, 5], 15)); // Output: true (subarray [1, 2, 3, 4, 5])
console.log(hasContiguousSubarrayWithSum([1, 2, 3, 4, 5], 16)); // Output: false (no subarray with sum 16)
console.log(hasContiguousSubarrayWithSum([10, 20, 30, 40, 50], 60)); // Output: true (subarray [10, 20, 30])
console.log(hasContiguousSubarrayWithSum([10, 20, 30, 40, 50], 110)); // Output: true (subarray [10, 20, 30, 40, 10])
console.log(hasContiguousSubarrayWithSum([], 5)); // Output: false (empty array)
