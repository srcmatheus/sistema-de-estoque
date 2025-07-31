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
        const buttons = this.options.buttons;

        /*Criação dos elemento principal*/
        this.modal = document.createElement("div");
        this.modal.classList.add("modal-content");

        /*Container interno do modal*/
        const modalBox = document.createElement("div");
        modalBox.classList.add("modal-box");
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
            buttonsArray.forEach((btnText) => {
                const button = document.createElement("button");
                button.classList.add("modalButton");
                button.textContent = btnText;
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

}

/*-------------------------------------------------------------------------------------------------*/