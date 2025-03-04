// Import the readline module for handling user input in the console
const readline = require('readline')
const { itemName, itemToRemove, itemToBuy } = require('./groceryQuestions.js')
const { displayItems } = require('./groceryActionFunctions.js')
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout, // Write to standard output (console)
  terminal: false
})

// rl.on('line', (userInputLine) => {
//     console.log(userInputLine); // this is returns the input of user after entering
// })

rl.once('close', () => {
     // end of input
     console.log('Thank you for using the Grocery Shopping List! Goodbye!'); // when user exits program
 })


function welcomePage() {
    rl.question(`Welcome to Grocery Shopping List!
    Enter the corresponding letter in which I can help you with today.
    [A] Add item into grocery list
    [R] Remove item from grocery list
    [D] Display grocery list
    [C] Check item if it has bought
    [E] Exit the program
    :`, (card) => {
        switch (card.toLowerCase()) {
            case 'a':
                itemName()
                break
            case 'r':
                itemToRemove()
                break
            case 'd':
                displayItems()
                break
            case 'c':
                itemToBuy()
                break
            case 'e':
                rl.close()
                break
            default:
                console.log('\nYou have entered an invalid key')
                welcomePage()
        }
    })
} 

welcomePage()

module.exports = {
    welcomePage
}