// ! // Import Module Specific Function //
const proc = require('child_process').spawn('pbcopy');

// * // Set of Alphanumeric Characters along with Symbols //
const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

// @ // Writing Statement to Console //
process.stdout._write('Enter Your Password Length: ', 'utf8', (err, res) => {
    try {

        // ! // Check for Errors //
        if (err) {
            throw new Error('Error Occured :', {
                cause: err
            })
        }

        // @ // Reading Number from Console //
        process.stdin.on('data', data => {

            // * // Password Container //
            let ps = ''

            while (ps.length <= parseInt(data)) {
                ps += alpha.charAt(Math.floor(Math.random() * alpha.length))
            }

            proc.stdin.write(ps); proc.stdin.end();
            console.log(`Your Password is copied to clipboard!`);
            process.exit();

        });

    } catch (error) {

        if (error) {
            throw new Error('Error Occured :', {
                cause: error
            })
        }

    }
})
