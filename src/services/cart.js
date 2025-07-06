//-> Adicionar item no carrinho
export async function addItem(userCart, item){
    userCart.push(item)

}

//->  deletar item do carrinho
export async function deleteItem(userCart,name){
    const itemIndex = userCart.findIndex((p)=> p.name === name)

    if(itemIndex == -1){
        console.log("Item não foi encontrado no carrinho.🚨")
        return
    }

    userCart.splice(itemIndex,1)
    console.log(`\n❌ Produto ${name} deletado com sucesso!`)
}

//-> Remover item do carrinho(quantidade de item)
export async function removeItem(userCart, item){
    const indexCart = userCart.findIndex((p)=> p.name === item.name)
    item = userCart[indexCart]
    // Caso o item não seja encontrado
    if(indexCart == -1){
        console.log("Item não encontrado")
        return
    }

    // Caso o item tenha a quantidade maior que 1
    if(item.quantity > 1){
        item.quantity -= 1
        return
    }

    // Caso a quantidade for igual a 1
    if(item == 1){
        userCart.splice(indexCart,1)
    }

    
}
//-> listar item do carrinho
export async function cartList(userCart){
    console.log("\n🛒 Shopee cart list:")
    userCart.forEach((item,index) =>{
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | subtotal: R$${item.subtotal()}`)
    })
}

//-> Calcular o total do carrinho
export async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item)=> total + item.subtotal(),0)
    console.log(`\n💸 Total: R$ ${result}`)
}