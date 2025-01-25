/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
const question = [{
    type: 'input',
    name: 'url',
    message: 'Enter the URL:',
}];

inquirer.prompt(
    question
).then((answers) => {
    const ans = answers.url;
    console.log(`${answers.url}`);
    fs.writeFile("./userAns.txt", ans, (err) => {
        if (err) {
            return console.error('Error writing file', err);
        }
        console.log("User input written successfuly");

        const qr_png = qr.image(ans, { type: 'png' });
        qr_png.pipe(fs.createWriteStream('mine_qr.png'));

    });
});
