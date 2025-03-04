/*
This file has the features/functions of the program
*/

const readline = require('readline')
const { item, addItem, removeItem, displayItems, buyItem } = require('./groceryActionFunctions.js')
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout, // Write to standard output (console)
  terminal: false
})

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

module.exports = {
    itemName,
    itemToRemove,
    itemToBuy
}