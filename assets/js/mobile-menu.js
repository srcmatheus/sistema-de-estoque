/*Funcionalidade do menu para mobile*/

function initMobileMenu() {

    //Variáveis que armazenam os elementos do menu e o botão de menu mobile
    const mobileMenu = document.getElementById('mobile-menu');
    const navBar = document.getElementById('nav-bar');

    //Adicionando evento de clique para ativar ou desativar o menu mobile
    //Quando o botão de menu mobile for clicado, ele alterna a classe 'active' no botão e a classe 'show' na barra de navegação
    //Isso permite que o menu seja exibido ou ocultado
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navBar.classList.toggle('show');
    });
};

/*-------------------------------------------------------------------------------------------------*/