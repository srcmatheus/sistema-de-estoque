/*Arquivo principal, que inicializa todo o sistema organizando a ordem de execução*/

/*Adicionando um evento ao documento. Quando a página terminar de carregar, as funções do sistema serão inicializadas*/
document.addEventListener("DOMContentLoaded", () => {
    initCarousel(); // Inicializa o carrossel
    toggleTheme(); // Inicializa a funcionalidade de troca de tema
    initMobileMenu(); // Inicializa o menu para mobile
});

/*-------------------------------------------------------------------------------------------------*/