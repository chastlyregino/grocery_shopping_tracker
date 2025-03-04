/*
This file serves as index.js or the entry point and other features/functions of the program
*/

// Import the readline module for handling user input in the console
const readline = require('readline')
const { item, addItem, removeItem, displayItems, buyItem } = require('./groceryActionFunctions.js')
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout, // Write to standard output (console)
  terminal: false
})

rl.once('close', () => {
     // end of input
     console.log('Thank you for using the Grocery Shopping List! Goodbye!'); // when user exits program
})

const welcomePage = () => {
    rl.question(`
Welcome to Grocery Shopping List!
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

let gItem

const itemName = () => {
    rl.question('What is the name of your Grocery item? :', (name) => {
        gItem = Object.create(item)
        gItem.gname = name
        itemQuantity()
    })
}

const itemQuantity = () => {
    rl.question('What is the quantity of the item? :', (quantity) => {
        gItem.quantity = Number(quantity)
        itemPrice()
    })
}

const itemPrice = () => {
    rl.question('What is the price of the item? :', (price) => {
        gItem.price = Number(price)
        gItem.bought = Boolean(false)
        addItem(gItem)
        isAddMore()
    })
}

const isAddMore = () => {
    rl.question('Do you want to add more grocery items? [y/n]: ', (more) => {
        if ( more.toLowerCase() === 'y' ) {
            itemName()
        } else {
            displayItems()
        }
    })
}

const itemToRemove = () => {
    rl.question('What is the name of the item you want to remove? :', (name) => {
        removeItem(name)
    })
}

const itemToBuy = () => {
    rl.question('What is the name of the item you are to buy? :', (name) => {
        buyItem(name)
    })
}

welcomePage()

module.exports = {
    welcomePage,
}