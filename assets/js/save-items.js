/*Função para salvar e recuperar dados dos itens*/

function saveData(){
    localStorage.setItem("data-list", JSON.stringify(listItems)); //Transforma o array em uma string para ser armazenado no localStorage
}

function recoverData(){
    return JSON.parse(localStorage.getItem('data-list')) || [];
    //Recupera a string JSON salva no localStorage e converte em um array novamente. Se caso o JSON não existir, retorna uma array vazio
}

/*-------------------------------------------------------------------------------------------------*/