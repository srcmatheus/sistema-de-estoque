/*Validação de dados do formulário*/

function validateForm(item) {
    
    //Verificar se os dados recebidos ja existem na lista
    if(listItems.find(prod => prod.productName == item.productName || prod.productCode == item.productCode)) {
        alert("Produto com nome ou código igual a de um produto ja cadastrado. Por favor, verifique os dados e tente novamente.");
        return false;
    }else{
        alert("Produto cadastrado com sucesso!");
        return true;
    }

}

/*-------------------------------------------------------------------------------------------------*/