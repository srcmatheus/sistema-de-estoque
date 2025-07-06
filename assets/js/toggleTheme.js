/*Funcionalidade de troca de tema do layout*/
function toggleTheme(){

    //Atribuindo os elementos para troca de tema a uma variável
    const buttonTheme = document.getElementById('toggle-theme');
    const imgTheme = buttonTheme.querySelector('img');

    /*Adicionando um evento de click para troca de tema do layout
    Quando o botão for clicado, a classe 'dark' será adicionada ou removida do elemento <html>, alterando o tema do layout
    Se o botão clicado for igual a seta do teclado, o tema e o icone do botão será alterado
    toggle é um método que adiciona ou remove uma classe do elemento, dependendo se ela já existe ou não
    includes é um método que verifica se uma string contém outra string, retornando true ou false*/
    buttonTheme.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        if(imgTheme.src.includes('first-theme.svg')){
            imgTheme.src = 'assets/icons/second-theme.svg';
        }else{
            imgTheme.src = 'assets/icons/first-theme.svg';
        }
    });
};
/*-------------------------------------------------------------------------------------------------*/