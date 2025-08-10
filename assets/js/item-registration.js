/*Função de registo de dados do formulário*/

let listItems = []; // Lista para armazenar os itens registrados

function registerItem() {

    // Adiciona um evento de submit ao formulário, que será acionado quando o usuário tentar enviar os dados
    document.querySelector('#registration-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtendo os valores dos campos do formulário
        const productName = document.getElementById('product-name').value.toLowerCase();
        const productCode = document.getElementById('product-code').value;
        const productClass = document.getElementById('product-classification').value;
        const productQuantity = document.getElementById('product-quantity').value;
        const productPrice = document.getElementById('product-price').value;

        // Criando um objeto item com os valores do formulário
        const item = {
            productName: productName,
            productCode: productCode,
            productClass: productClass,
            productQuantity: parseInt(productQuantity, 10),
            productPrice: parseFloat(productPrice),
            registrationDate: new Date().toLocaleDateString("pt-BR"), //Registrando data do cadastro
            registrationTime: new Date().toLocaleTimeString("pt-BR") //Registrando hora do cadastro
        };

        // Validando o formulário antes de adicionar o item à lista
        if(validateForm(item)) {
            listItems.push(item); // Adiciona o item à lista
            this.reset(); // Limpa o formulário após o registro
        }

        displayItems(listItems);
        renderStatistics();

    })

}

/*-------------------------------------------------------------------------------------------------*/