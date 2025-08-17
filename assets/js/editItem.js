/*Funções de edição e exclusão de itens*/

function editItem(index){ //Função para editar o item

    const productIndex = listItems[index];

    new Modal({
        title: 'Editar Item',
        text: `
        <form class="registration-form form-edit" id="registration-form">
            <div class="width-100">
                <label for="product-name">Nome do produto</label><input type="text" id="product-name1" required autocomplete="off" value="${productIndex.productName}">
            </div>
            <div class="width-50">
                <label for="product-code">Código do produto</label><input type="number" min="1" name="product-code" id="product-code1" disabled style="cursor: not-allowed;" value="${productIndex.productCode}">
            </div>
            <div class="width-50">
            <label for="product-classification">Classificação</label><select name="product-classification" id="product-classification1" required>
                <option value="" disabled selected>Selecione uma categoria</option>
                <option value="A" ${productIndex.productClass === 'A' ? 'selected' : ''}>Classificação A</option>
                <option value="B" ${productIndex.productClass === 'B' ? 'selected' : ''}>Classificação B</option>
                <option value="C" ${productIndex.productClass === 'C' ? 'selected' : ''}>Classificação C</option>
            </select>
            </div>
            <div class="width-50">
                <label for="product-quantity">Quantidade</label><input type="number" name="product-quantity" id="product-quantity1" min="1" max="9999" required value="${productIndex.productQuantity}">
            </div>

            <div class="width-50">
                <label for="product-price">Preço</label><input type="number" name="product-price" id="product-price1" min="1" step="0.01" required value="${productIndex.productPrice}">
            </div>

            <div style="width: 100%; text-align: center;">
                <p>Último registro: ${productIndex.registrationDate} | ${productIndex.registrationTime}</p>
            </div>

        </form>
        `,
        size: 'large',
        buttons: [
            {
                text: 'Fechar',
                color: 'red'
            },
            {
                text: 'Salvar',
                color: 'green',
                callback: () => {
                    const productName = document.getElementById('product-name1').value.toLowerCase();
                    const productCode = document.getElementById('product-code1').value;
                    const productClass = document.getElementById('product-classification1').value;
                    const productQuantity = parseInt(document.getElementById('product-quantity1').value);
                    const productPrice = parseFloat(document.getElementById('product-price1').value);

                    listItems[index] = {
                        productName,
                        productCode,
                        productClass,
                        productQuantity,
                        productPrice,
                        registrationDate: new Date().toLocaleDateString("pt-BR"),
                        registrationTime: new Date().toLocaleTimeString("pt-BR")
                    };

                    displayItems(listItems);
                    renderStatistics();
                    showNotificationBox('Item Salvo com sucesso!');
                }
            }
        ]
    });

}

function deleteItem(index){

    const modal = new Modal({
        title: 'ATENÇÃO',
        text: 'Tem certeza que deseja excluir o tem?',
        buttons: [
            {
                text: 'Cancelar',
                color: 'red'
            },
            {
                text: 'Excluir',
                callback: () => {
                    listItems.splice(index, 1);
                    displayItems(listItems);
                    renderStatistics();
                    modal.closeThis();
                    showNotificationBox('Item excluído com sucesso.', 3000, 'red');
                }
            }
        ]
    });
}

/*-------------------------------------------------------------------------------------------------*/