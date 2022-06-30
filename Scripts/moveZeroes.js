// * // Function to Move Zeroes to the End of Array //
function moveZeroes(nums = [], method = 1) {

    // * Return Array //
    let return_array = undefined;

    // * // Swtich Case //
    switch (method) {
        case 1:
            return_array = nums.sort((a, b) => {
                if (b === 0) {
                    return b - a
                } else {
                    return b
                }
            });
            break;
        case 2:
            return_array = nums.sort((a, b) => (b > 0 ? 1 : -1))
            break;
        case 3:
            const zeroes = nums.filter((num) => num === 0);
            const otherNums = nums.filter((num) => num !== 0);
            return_array = [...otherNums, ...zeroes];
            break;
        default:
            return_array = [{ status: false, message: 'Method Not Allowed!', method: undefined, result: [] }]
    }

    // ! // Return Array //
    return [{ status: true, message: 'Successfully Moved Zeroes !', method: method, result: return_array }];
}

console.log(moveZeroes([7, 2, 0, 0, 0, 13, 8, 0, 78, 9, 0], 1));
console.log(moveZeroes([0, 78, 9, 0, 13, 8], 1));
console.log(moveZeroes([0, 78, 9, 0, 13, 8], 2));
console.log(moveZeroes([0, 78, 9, 0, 13, 8], 3));
