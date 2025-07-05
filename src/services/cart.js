//-> Adicionar item no carrinho
export async function addItem(userCart, item){
    userCart.push(item)
}

//-> Remover item do carrinho(quantidade de item)
export async function removeItem(userCart, index){

}
//->  deletar item do carrinho
export async function deleteItem(userCart,name){

}
//-> listar item do carrinho
export async function cartList(userCart){
    
    userCart.forEach((item) =>{
        const indexCart = userCart.findIndex((p)=> p.name === item.name) + 1

        console.log(`${indexCart}. ${item.name} - quantity:${item.quantity} - subtotal: R$${item.subtotal()}`)
    })
}

//-> Calcular o total do carrinho