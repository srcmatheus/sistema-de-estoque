/*Função data e hora*/

function displayCurrentDate() {
    const currentDateElement = document.getElementById("current-date"); // Obtém o elemento onde a data e hora serão exibidas
    const now = new Date(); // Obtém a data e hora atual
    const date = now.toLocaleDateString("pt-BR"); // Formata a data no padrão brasileiro (dd/mm/yyyy)
    const hour = now.toLocaleTimeString("pt-BR"); // Formata a hora no padrão brasileiro (hh:mm:ss)

    currentDateElement.textContent = `Data: ${date} | Hora: ${hour}`; // Atualiza o conteúdo do elemento com a data e hora formatadas

}

/*-------------------------------------------------------------------------------------------------*/