/*Função de renderização de itens*/

function displayItems(listItems){

    let totalItems = 0; //Quantidade total de itens cadastrados
    let totalValue = 0; //Valor total da soma de todos os itens
    const displayItems = document.getElementById('display-items');
    const totItem = document.getElementById('totItems');
    const totValue = document.getElementById('totValue');
    
    //Verificando se não existe nenhum item cadastrado para exibir a mensagem
    if(!displayItems.children.length){
        const p = document.createElement('p');
        p.textContent = 'Itens cadastrados aparecerão aqui. No momento não há itens cadastrados.';
        p.classList.add('noItemsText');
        displayItems.appendChild(p);
    }else{
        displayItems.innerHTML = ''; //Limpando o container a cada renderização
    }

    /*Renzderizando itens 1 por 1 na lista*/
    listItems.forEach((prod, index) => {
        totalItems += prod.productQuantity;
        totalValue += prod.productPrice * prod.productQuantity;
        const ul = document.createElement('ul');
        ul.innerHTML = `
        <li><p>${prod.productName}</p></li>
        <li><p>${prod.productCode}</p></li>
        <li><p>${prod.productClass}</p></li>
        <li><p>${prod.productQuantity}</p></li>
        <li class="set-buttons">
        <button class="edit-button" id="edit-button"></button>
        <button class="delete-button" id="delete-button"></button>
        </li>
        `

        displayItems.appendChild(ul); //Adiciona o item a lista de itens
        
        const editButton = ul.querySelector('#edit-button');
        const deleteButton = ul.querySelector('#delete-button');

        editButton.addEventListener('click', () => { //Chama a função para editar as informações do item
            editItem(index);
        })

        deleteButton.addEventListener('click', () => { //Deleta o item
            deleteItem(index);
        })

    });

    totItem.innerText = `Quantidade total de items: ${totalItems} unidade(s)`;
    totValue.innerText = `Valor total de todos os itens: R$ ${totalValue.toFixed(2)}`;

}

/*-------------------------------------------------------------------------------------------------*/