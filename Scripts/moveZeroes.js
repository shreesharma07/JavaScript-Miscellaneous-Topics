// * // Function to Move Zeroes to the End of Array //
function moveZeroes(nums = []) {
    return nums.sort((a, b) => {
        if (b === 0) {
            return b - a
        } else {
            return b
        }
    })
}

console.log(moveZeroes([7, 2, 0, 0, 0, 13, 8, 0, 78, 9, 0]));
console.log(moveZeroes([0, 78, 9, 0, 13, 8]));