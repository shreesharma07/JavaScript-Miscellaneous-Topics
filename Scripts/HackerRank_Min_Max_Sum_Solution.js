function miniMaxSum(arr) {
    let lengths = arr.length;
    let rangeValues = []
    arr.forEach((el, index) => {
        let newArr = [...arr];
        delete newArr[index];
        let sum = newArr.reduce(function (x, y) {
            return x + y;
        }, 0);
        rangeValues.push(sum);
    })
    rangeValues.sort((a, b) => a - b)
    console.log(rangeValues[0], rangeValues[lengths - 1])
}
