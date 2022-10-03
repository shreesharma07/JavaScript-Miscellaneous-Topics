// ! // Importing Moment Module //
const moment = require('moment-timezone');

// % // Function to Calculate Time Using Symbols //
const calculateTimeWithSymbols = (symbol, amount, unit = 'hours', format = 'YYYY-MM-DD HH:mm:ss') => {

    // * // Calculator Object //
    const symbolBasedCalculation = {
        "-": moment().tz('Asia/Kolkata').subtract(parseInt(amount), unit).format(format),
        "+": moment().tz('Asia/Kolkata').add(parseInt(amount), unit).format(format),
    }

    // ! // Return Calculated Time //
    return symbolBasedCalculation[`${symbol}`]
}

// * // Print Result //
console.log({
    currentDate: moment().tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss'),
    subHours: calculateTimeWithSymbols('-', 1, 'hours'),
    addHours: calculateTimeWithSymbols('+', 1, 'hours'),
    addMinutes: calculateTimeWithSymbols('+', 60, 'minutes')
});
