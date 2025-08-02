/*Validação de dados do formulário*/

function validateForm(item) {
    
    //Verificar se os dados recebidos ja existem na lista
    if(listItems.find(prod => prod.productName == item.productName || prod.productCode == item.productCode)) {
        //Classe construtora do modal que exibe o aviso caso o produto já exista
        new Modal({
            title: "ATENÇÃO", //Titulo do modal
            text: "Produto com mesmo nome ou código já cadastrado. Por favor, verifique os dados e tente novamente.", //Mensagem do modal
            buttons: [ /*Botões do modal
                //Os botões do modal podem ser apenas strings, ou podem ser objetos com funções callbacks associadas a ele
                //O botão string tem um estilo CSS padrão e também possui o comportamento padrão de fechar o modal. Se quer apenas um botão que fecha o modal, use uma string
                //Se quiser um botão que execute uma função, use um objeto com a propriedade "callback" associada a ele
                //"Botão Padrão", Exemplo de botão string
                {
                    text: "Fechar", //Texto do botão
                    color: "red", //Cor do botão. Por padrão é verde, a menos que seja dito que é "red".
                    callback: () => {
                        alert("Botão funcionando!");
                    }
                },
                {
                    text: "Ok",
                    //color: "green"; como o botão ja é verde por padrão, podemos omiti-lo.
                    //Botões que são somente strings invés de objetos, tem o comportamento padrão de fechar o modal
                    //já botões objetos, pode ter uma função callback associada a ele, sendo assim, seu comportamento de fechar o modal é interrompido
                    callback: () => {
                        alert("Botão funcionando!");
                    }
                }*/
               'Ok'
            ]
        });
        return false;
    }else{
        showNotificationBox("Item cadastrado com sucesso!", 3000, "green");
        return true;
    }

}

/*-------------------------------------------------------------------------------------------------*/