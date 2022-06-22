const moment = require('moment-timezone')

const separate_time = (time) => {

    // ! // Check Type and Length //
    if (typeof time === 'object' && time.length > 0) {

        // * // Empty Object //
        let time_obj = {};

        // * // Extract Values and Assign them to Object //
        time.map((value, index) => {
            if (index === 0) {
                time_obj.hours = parseInt(value)
            } else if (index === 1) {
                time_obj.minutes = parseInt(value)
            } else if (index === 2) {
                time_obj.seconds = parseInt(value)
            }
        })

        return {
            status: true,
            result: time_obj
        }

    } else {
        return { status: false, result: {} }
    }
}

const timeMath = (time1, op, time2) => {

    let default_time = separate_time(time1.split(':'))
    let calc_time = separate_time(time2.split(':'))

    // ! // Check Status //
    if (default_time.status === false || calc_time.status === false) {
        return {
            status: false,
            message: 'Invalid Time Data Received!',
            result: []
        }
    } else {
        let seconds = ((calc_time.result.hours * 60) * 60) + (calc_time.result.minutes * 60) + (calc_time.result.seconds);
        let return_time = new Date(0, 0, 0, default_time.result.hours, default_time.result.minutes, default_time.result.seconds)
        // ! // Check for Operator //
        if (op === '+') {
            return moment(return_time).add(seconds, 'seconds').format('HH:mm:ss')
        } else if (op === '-') {
            return moment(return_time).subtract(seconds, 'seconds').format('HH:mm:ss')
        } else {
            return {
                status: false,
                message: 'Invalid Operator Received!',
                result: []
            }
        }
    }

}

console.log(timeMath('10:24:00', '+', '02:16:05'));