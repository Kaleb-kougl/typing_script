/**
 * Please ensure you have the required dependencies before installing:
 * 
 *  Windows
 *      windows-build-tools npm package (npm install --global --production windows-build-tools from an elevated PowerShell or CMD.exe)
 *  Mac
 *      Xcode Command Line Tools.
 * 
 * Setup -
 * 1. Dowload your OS dependecies. 
 * 2. npm i
 * 
 * Running script - 
 * node matt_type_script.js
 * 
 * Exiting -
 * To exit the script hit ^c (ctrl + c). 
 * The script will run indefinetly until you kill the process using ctrl + c. 
*/

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'//Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
var robot = require("robotjs");

async function task(i) { // 3
    await timer(1000);
    robot.typeString(loremIpsum[i]+ '');
}

function logInstructions(timeLeft){
    console.log(`${timeLeft}. To exit hit ^c (ctrl + c)`);
}
  
async function main() {
    logInstructions(`Typing script will start in 10`);
    await timer(1000);
    logInstructions(9);
    await timer(1000);
    logInstructions(8)
    await timer(1000);
    logInstructions(7);
    await timer(1000);
    logInstructions(6);
    await timer(1000);
    logInstructions(5);
    await timer(1000);
    logInstructions(4);
    await timer(1000);
    logInstructions(3);
    await timer(1000);
    logInstructions(2);
    await timer(1000);
    logInstructions(1);

    for(let i = 0; i < loremIpsum.length; i = (i + 1) % loremIpsum.length) {
        await task(i);
    }
}
      
main();
  
function timer(ms) { return new Promise(res => setTimeout(res, ms)); }