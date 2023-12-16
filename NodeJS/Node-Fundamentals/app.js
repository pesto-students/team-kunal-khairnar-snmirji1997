const fs = require('fs');
const readLine = require('readline');
const { generateGreeting } = require('./greeting');
const { error } = require('console');


const rl = readLine.createInterface({
    input : process.stdin,
    output: process.stdout
})


rl.question("Please enter your name: ",(name)=>{
    const greeting = generateGreeting(name);
    fs.writeFile('output.txt', greeting,error => {
        if(error){
            console.error("error",error)
        }else{
            console.log('Greeting saved')
        }
    })

    rl.close();
})