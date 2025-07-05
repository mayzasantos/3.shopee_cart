
// Função criada para retorna um objeto contendo: nome do item, a quantidade, o preço e o subtotal que é uma arrow function responsável pelo calculo
async function createItem(name, quantity, price) {
    return {
        name,
        quantity,
        price,
        subtotal : () => quantity * price
    }
}

// Exportando a função como default
export default createItem