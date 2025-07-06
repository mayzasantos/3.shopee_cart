import * as Cart from './services/cart.js'
import createItem from './services/item.js'

const cart = []
const wishList = []

console.log("\nWelcome to the Shopee Cart!")

// Criando os itens
const item1 = await createItem("Mouse", 2, 20.99)
const item2 = await createItem("Monitor", 5, 97.99)
const item3 = await createItem("Teclado", 1, 35.99)

// Adcionando o item1 ao carrinho de compra
await Cart.addItem(cart, item1)
await Cart.addItem(cart, item2)

// Adicionando o item a lista de desejos
await Cart.addItem(wishList, item3)


// // Deletando um item do carrinho
// await Cart.deleteItem(cart, "Mouse")

// //Mostrando os itens do carrinho
// await Cart.cartList(cart)

await Cart.removeItem(cart, item2)

//Mostrando os itens do carrinho
await Cart.cartList(cart)

// Mostrando o total do carrinho
await Cart.calculateTotal(cart)


