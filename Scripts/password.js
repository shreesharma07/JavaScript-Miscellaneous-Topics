// * // Set of Alphanumeric Characters along with Symbols //
const CHARACTER_SET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

// @ // Writing Statement to Console //
process.stdout._write("Enter Your Password Length: ", "utf8", (err, res) => {
    try {
        // ! // Check for Errors //
        if (err) {
            throw new Error("Error Occured :", {
                cause: err,
            });
        }

        // @ // Reading Number from Console //
        process.stdin.on("data", (data) => {
            // * // Password Container //
            let ps = "";

            while (ps.length <= parseInt(data)) {
                ps += CHARACTER_SET.charAt(Math.floor(Math.random() * CHARACTER_SET.length));
            }

            // * // Getting Os Type //
            const os_type = require("os").type();

            // ! // Checking OS Type //
            if (os_type === "Windows_NT") {
                // ! // Import Module //
                const clipBoard = require("node-clipboardy");
                clipBoard.writeSync(ps);
            } else {
                // ! // Import Module //
                const proc = require("child_process").spawn("pbcopy");
                // * // Copy Token to Clipboard //
                proc.stdin.write(ps);
                proc.stdin.end();
            }

            console.log(`Your Password : ${ps}`);
            process.exit();
        });
    } catch (error) {
        if (error) {
            throw new Error("Error Occured :", {
                cause: error,
            });
        }
    }
});
