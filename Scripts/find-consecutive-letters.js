const findConsecutiveLetters = (word = '', count = 0) => {
    try {
        if (count === 0 || word === '') {
            throw new Error('Empty String or Invalid Number!')
        } else {

            const str = (word + '').toLowerCase();

            // ! // Check for Common String in LowerCase //
            if (str === word) {

                const pattern = /([a-z])\1+/g;
                const matches = str.match(pattern);
                let copyString = '';

                if (matches === null) {
                    // ! // Return Original String //
                    return word;
                } else if (matches !== null) {
                    // @ // Iterate Loop on Matches //
                    matches.forEach((element, index) => {
                        if ((element.split('').length === count)) {
                            if (copyString === '') {
                                copyString = str.replace(element, '');
                            } else {
                                copyString = copyString.replace(element, '');
                            }
                        }
                    });

                    // ! // Return Processed String //
                    return copyString;
                }


            } else {
                throw new Error('Invalid Word!')
            }
        }
    } catch (error) {
        console.log('Error:', { cause: error });
    }
}

console.log({ processed: findConsecutiveLetters('understanding', 2) });
