/*Modal dinâmico*/

/*Classe construtora*/
class Modal {
    constructor(options) {
        
        /*Variavél para armazenar os argumentos recebidos*/
        this.options = options;

        /*Criando o elemento principal do modal*/
        this.modal = null;

        /*Criando o modal e seus filhos*/
        this.createModal();

        /*Exibir modal dinamicamente*/
        this.show();

        /*Fechar modal dinamicamente*/
        this.close();


    }

    /*Método que criará o modal*/
    createModal() {

        //O array recebido como argumento será destruido em partes menores
        //const {title, text, buttons} = this.options; ***forma "abreviada" de desestruturação chamada object destructuring***
        const title = this.options.title;
        const text = this.options.text;
        const size = this.options.size;
        const buttons = this.options.buttons;

        /*Criação dos elemento principal*/
        this.modal = document.createElement("div");
        this.modal.classList.add("modal-content");

        /*Container interno do modal*/
        const modalBox = document.createElement("div");
        modalBox.classList.add("modal-box");
        if(size == 'large') modalBox.classList.add('large');
        this.modal.appendChild(modalBox);

        /*Verificando se os argumentos existem, se sim, cria os elementos correspondentes*/
        if(title) {
            const modalTitle = document.createElement("div");
            modalTitle.classList.add("modal-title");
            const h2 = document.createElement("h2");
            h2.textContent = title;
            modalTitle.appendChild(h2);
            modalBox.appendChild(modalTitle);
        }

        if(text){
            const modalText = document.createElement("div");
            modalText.classList.add("modal-text");
            const p = document.createElement("p");
            p.innerHTML = text;
            modalText.appendChild(p);
            modalBox.appendChild(modalText);
        }

        if(buttons){
            const modalButtons = document.createElement("div");
            modalButtons.classList.add("modal-buttons");

            //Verificando se o argumento recebido é um array ou uma string, se for uma string, transforma em array
            const buttonsArray = Array.isArray(buttons) ? buttons : [buttons];

            //Para cada botão no array, cria um elemento button e adiciona ao modal
            buttonsArray.forEach((btnConfig) => {
                const button = document.createElement("button");
                button.classList.add("modalButton");

                if(btnConfig.color == "green") button.classList.add("green");
                if(btnConfig.color == "red") button.classList.add("red");

                if(typeof btnConfig === "string") { //Se for uma string, define apenas o texto do botão
                    button.textContent = btnConfig;
                }else{  //Se for um objeto, define o texto do botão e a função callback associada a ele
                    button.textContent = btnConfig.text || "Botão"; 
                    if(typeof btnConfig.callback === "function") { //Se a função callback existir, adiciona um evento de clique ao botão
                        button.addEventListener('click', (e) =>{
                            e.stopPropagation(); //Evita que o evento de click feche o modal
                            btnConfig.callback(); //Chama a função de callback se existir
                        });
                }
            
                }
                modalButtons.appendChild(button);
                modalBox.appendChild(modalButtons);
            });
    }
        //Adicionando o modal ao body do documento
        document.body.appendChild(this.modal);

    }

    //Exibindo o modal
    show(){
        setTimeout(() => {
            this.modal.classList.add("show");
        }, 10);
    }

    //Fechando o modal e exliminando-o do DOM
    close(){
        this.modal.addEventListener("click", (e) => {
            if(e.target.classList.contains('modal-content') || e.target.classList.contains('modalButton')){
                document.body.removeChild(this.modal);
            }
        });
    }

    closeThis(){
        document.body.removeChild(this.modal);
    }

}

/*Função para animar entrada, saída e conteudo da caixa de notificação*/

function showNotificationBox(message = "Mensagem padrão", duration = 2000, color = "green"){ // Definindo valores padrão para os parâmetros

    /*Alterando o tempo de exibição da caixa de notifição*/
    document.documentElement.style.setProperty('--duration', `${duration/1000}s`); //O valor deve ser em segundos
    
    /*Selecionado o container que será criado*/
    let container = document.querySelector('.notification-container');

    /*Verifica se o container existe para criar um novo*/
    if (!container) {
        container = document.createElement('div');
        container.classList.add('notification-container');
        document.body.appendChild(container);
    }

    /*Elemento que receberá o conteúdo*/
    const notificationBox = document.createElement('div');
    notificationBox.classList.add('notification-box');
    
    /*Conteudo da caixa de notificação*/
    const p = document.createElement('p');
    p.textContent = message;

    /*Adicionando o conteudo a caixa de notificação*/
    notificationBox.appendChild(p);
    container.appendChild(notificationBox);

    /*Definindo a cor de fundo da caixa de notificação com base no parâmetro color*/
    if (color == "green") notificationBox.style.backgroundColor = "var(--bg-color-green)";
    if (color == "red") notificationBox.style.backgroundColor = "var(--bg-color-red)";

    //Temporizador para remover a notificação após o tempo definido
    setTimeout(() => {
        container.classList.add('hide');
        setTimeout(() => {
            container.remove(); //remove
        }, 300);
    }, duration);
}

/*-------------------------------------------------------------------------------------------------*/