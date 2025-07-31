/*Validação de dados do formulário*/

function validateForm(item) {
    
    //Verificar se os dados recebidos ja existem na lista
    if(listItems.find(prod => prod.productName == item.productName || prod.productCode == item.productCode)) {
        //Classe construtora do modal que exibe o aviso caso o produto já exista
        new Modal({
            title: "ATENÇÃO",
            text: "Produto com mesmo nome ou código já cadastrado. Por favor, verifique os dados e tente novamente.",
            buttons: ["OK"]
        });
        return false;
    }else{
        alert("Produto cadastrado com sucesso!");
        return true;
    }

}

/*-------------------------------------------------------------------------------------------------*/