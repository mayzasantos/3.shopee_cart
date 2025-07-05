import * as Cart from './services/cart.js'
import createItem from './services/item.js'

const cart = []
const wishList = []
console.log("🛒_______________________🛒")
console.log("Welcome to the Shopee Cart!\n")

// Criando os itens
const item1 = await createItem("Mouse", 2, 20.99)
const item2 = await createItem("Monitor", 5, 97.99)
const item3 = await createItem("Teclado", 1, 35.99)

// Adcionando o item1 ao carrinho de compra
await Cart.addCart(cart, item1)
await Cart.addCart(cart, item2)

// Adicionando o item a lista de desejos
await Cart.addCart(wishList, item3)

//Mostrando os itens do carrinho
await Cart.cartList(cart)
