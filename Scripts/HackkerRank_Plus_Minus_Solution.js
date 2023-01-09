function plusMinus(arr) {
    let lengths = arr.length;
    let [positive, negative, zeros] = [0, 0, 0];

    arr.forEach((el, index) => {
        let num = Number(el);
        (num === 0) ? zeros++ : ((num > 0) ? positive++ : negative++);
    })

    console.log((positive / lengths).toFixed(6));
    console.log((negative / lengths).toFixed(6));
    console.log((zeros / lengths).toFixed(6));

}
