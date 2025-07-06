

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
export async function removeItem(userCart, index){

}
//-> listar item do carrinho
export async function cartList(userCart){
    console.log("\n🛒 Itens no carrinho:")
    userCart.forEach((item) =>{
        const indexCart = userCart.findIndex((p)=> p.name === item.name) + 1

        console.log(`${indexCart}. ${item.name} - quantity:${item.quantity} - subtotal: R$${item.subtotal()}`)
    })
}

//-> Calcular o total do carrinho