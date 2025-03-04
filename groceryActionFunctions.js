/*
This file handles the Array and Object
*/

const item = () => {
    this.gname = gname,
    this.quantity = quantity,
    this.price = price,
    this.bought = bought
}

let groceryArray = []

const addItem = (item) => {
    groceryArray.push(item)
}

const removeItem = (name) => {
    groceryArray = groceryArray.filter(item => item.gname !== name)
    displayItems()  
}

const displayItems = () => {
    const { welcomePage } = require("./groceryShoppingList.js")
    console.log('Grocery List:')
    groceryArray.forEach(element => {
        console.log(`
        name:${element.gname}
        quantity: ${element.quantity}
        price: ${element.price}
        bought: ${element.bought}`)
    })
    welcomePage()
}

const buyItem = (name) => {
    for (const groceryItem of groceryArray) {
        if (groceryItem.gname.toLowerCase() === name.toLowerCase()) {
            groceryItem.bought = true
        }
    }  
    displayItems()
}

module.exports = {
    item,
    addItem,
    removeItem,
    displayItems,
    buyItem
}