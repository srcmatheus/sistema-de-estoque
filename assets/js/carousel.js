/*Funcionalidade do carrossel*/

/*Função carrossel*/
function initCarousel(){
    //Atribuindo a seleção dos elementos a uma variável
    const carousel = document.getElementById('carousel');
    const navButtons = document.querySelectorAll('.nav-button');
    let currentIndex = 0;

    /*Função que exibe o slide atual do carrossel*/
    function showSlide(index){
        
        //Toda vez que o evento for chamado, o carrossel irá se mover para o index atual vezes 100vw (tamanho da tela) utilizando a propriedade transform do CSS
        carousel.style.transform = `translateX(-${index * 100}vw)`;
        currentIndex = index; //Variável que armazena o índice do slide atual

        //A função forEach percorre o array de botões, removendo a classe de ativação de todos
        navButtons.forEach(btn => btn.classList.remove('active'));
        //Aqui, adicionamos ao botão a classe de ativação correspondente ao índice atual do slide
        navButtons[index].classList.add('active'); 
    };

    /*Esta função adiciona o evento de click para todos os botões de navegação do carrossel
    Quando clicado, chama a função showSlide com o indice do botão clicado, permitindo que o usúario navegue entre os slides do carrossel
    O forEach percorre todos os botões de navegação e adiciona o evento, com 2 parâmetros padrão, onde btn corresponde ao elemento e index corresponde ao índice do elemento no array
    O index é usado para identificar qual slide deve ser exibido quando o botão for clicado
    O evento de click chama a função showSlide passando o índice do botão clicado*/
    navButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            showSlide(index);
        });
    });

    /*Adicionando o evento de teclado para permitir a navegação utilizando as setas do teclado
    Quando a tecla 'ArrowRight' for pressionada e o indice  atual for menor que o indice do último botão, chama a função que avançará o slide
    O mesmo ocorre com 'ArrowLeft', porém verificando se o indice atual é maior que 0, se for, o slide retrocederá*/
    document.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowRight' && currentIndex < navButtons.length - 1){
            showSlide(currentIndex + 1)
        } else if(e.key === 'ArrowLeft' && currentIndex > 0){
            showSlide(currentIndex - 1)
        }
    });

    showSlide(0); // Exibe o primeiro slide ao carregar a página)
};

/*-------------------------------------------------------------------------------------------------*/