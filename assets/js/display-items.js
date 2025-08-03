/*Função de renderização de itens*/

function displayItems(list){

    let totalItems = 0; //Quantidade total de itens cadastrados
    let totalValue = 0; //Valor total da soma de todos os itens
    const displayItems = document.getElementById('display-items');
    const totItem = document.getElementById('totItems');
    const totValue = document.getElementById('totValue');

    displayItems.querySelectorAll('ul').forEach(ul => ul.remove()); //Limpando o container a cada renderização
    displayItems.querySelectorAll('p').forEach(p => p.remove());
    
    //Verificando se não existe nenhum item cadastrado para exibir a mensagem
    if(list.length == 0){
        const p = document.createElement('p');
        
        if(list === listItems){
            p.textContent = 'Itens cadastrados aparecerão aqui. No momento não há itens cadastrados.';
        }else{
            p.textContent = 'Nenhum item encontrado.';
        }

        p.classList.add('noItemsText');
        displayItems.appendChild(p);
    }

    /*Renzderizando itens 1 por 1 na lista*/
    list.forEach((prod, index) => {
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

/*Função da barra de pesquisa de itens cadastrados*/

    const searchBar = document.getElementById('search-input');

    searchBar.addEventListener('input', function() { //Adicionando evento de input ao elemento
    const term = this.value.toLowerCase(); //Armazenando o termo digitado no input

    const listItemsCopy = [...listItems];

    const filter = listItemsCopy.filter(product => { //Filtrando os dados do array
        return product.productName.toLowerCase().includes(term) || product.productCode.toString().includes(term); //Retorna o(s) que correspondem ao termo
    });

    displayItems(filter); //Exibindo os itens filtrados

     if(searchBar.value === '') displayItems(listItems);

});

/*-------------------------------------------------------------------------------------------------*/