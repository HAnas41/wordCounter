import inquirer from "inquirer"

//Declare a constant answer and assign it to the result of inquirer.prompt function

const answers: {
    sentence: string 
} = await inquirer.prompt([
    {
         name: "sentence",
         type: "input",
         message: "Enter your sentence to count the word:"
    }
])
const words = answers.sentence.trim().split(" ")

//print the array of word to the console
console.log(words);

//print the word count of sentence to the console

console.log(`your sentence word count is ${words.length}`);
