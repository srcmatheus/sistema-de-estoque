/*Funções para exibir informações sobre os itens cadastrados e exibir gráfico*/

function renderStatistics(){
 
    /*Cariáveis de elementos e valores*/
    const amountA = document.getElementById('amountA');
    const amountB = document.getElementById('amountB');
    const amountC = document.getElementById('amountC');
    const valueA = document.getElementById('valueA');
    const valueB = document.getElementById('valueB');
    const valueC = document.getElementById('valueC');

    const spanPercentageA = document.getElementById('percentageA');
    const spanPercentageB = document.getElementById('percentageB');
    const spanPercentageC = document.getElementById('percentageC');

    let percentageA = 0;
    let percentageB = 0;
    let percentageC = 0;

    let totalAmountA = 0;
    let totalAmountB = 0;
    let totalAmountC = 0;

    let totalValueA = 0;
    let totalValueB = 0;
    let totalValueC = 0;

    /*Percorrendo o array para agrupar todos os itens de categorias iguais*/
    listItems.forEach(prod => {

        if(prod.productClass === 'A'){
            totalAmountA += prod.productQuantity;
            totalValueA += prod.productQuantity * prod.productPrice;
        } else if(prod.productClass === 'B'){
            totalAmountB += prod.productQuantity;
            totalValueB += prod.productQuantity * prod.productPrice;
        } else if(prod.productClass === 'C'){
            totalAmountC += prod.productQuantity;
            totalValueC += prod.productQuantity * prod.productPrice;
        }

    })

    /*Calculo de porcentagem de cada categoria*/
    function percentageCalc(){
        let totalItems = totalAmountA + totalAmountB + totalAmountC;
        percentageA = (totalAmountA/totalItems) * 100 || 0;
        percentageB = (totalAmountB/totalItems) * 100 || 0;
        percentageC = (totalAmountC/totalItems) * 100 || 0;

        spanPercentageA.innerText = `${percentageA.toFixed(2)}%`;
        spanPercentageB.innerText = `${percentageB.toFixed(2)}%`;
        spanPercentageC.innerText = `${percentageC.toFixed(2)}%`;
    }

    /*Renderizando os valores*/
    amountA.innerText = `${totalAmountA} un.`;
    amountB.innerText = `${totalAmountB} un.`;
    amountC.innerText = `${totalAmountC} un.`;

    valueA.innerText = `R$${totalValueA.toFixed(2)}`;
    valueB.innerText = `R$${totalValueB.toFixed(2)}`;
    valueC.innerText = `R$${totalValueC.toFixed(2)}`;

    /*Função para renderizar gráfico*/
    function renderGraph(a, b, c){

        const canvas = document.getElementById('chart');
        const getCanvas = canvas.getContext('2d'); //Obtendo o conteudo de renderização 2D
        getCanvas.clearRect(0, 0, canvas.width, canvas.height); //Limpando a área do gráfico. Inicia na posição 0, 0 e a largura e altura total a ser limpada

        let total = a + b + c; //Somando todas as quantidades recebidas

        if(total === 0){ //Verificando se o gráfico esta vazio, se sim, exibe uma mensagem
            getCanvas.fillStyle = '#fff'; //Cor do texto
            getCanvas.font = '24px oswald-font'; //Fonte e tamanho
            getCanvas.textAlign = 'center'; //Centralizado
            getCanvas.fillText('Sem dados para exibir', canvas.width/2, canvas.height/2); //Texto e sua posição dentro do canvas
            return //Encerra a condição imediatamente
        }

        //Array de valores e cores que serão renderizados
        const division = [
            { value: a, color: '#ff5252ff' },
            { value: b, color: '#4dff74ff' },
            { value: c, color: '#4abdffff' }
        ]

        let init = 0; //Inicio do gráfico

        division.forEach(item => { //Percorrendo o array e seus valores
            const angle = (item.value / total) * 2 * Math.PI; //Calculo anguler de cada fatia
            getCanvas.beginPath(); //Iniciando uma nova forma (desenho)
            getCanvas.moveTo(canvas.width / 2, canvas.height / 2); //Movendo para o ponto de partida da forma
            getCanvas.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, init, init + angle); //Desenhando o arco da fatia
            getCanvas.closePath(); //Fecha o caminho da forma
            getCanvas.fillStyle = item.color; //Cor de preenchimento da forma
            getCanvas.fill(); //Preenche toda a forma
            init += angle; //Atualiza o angulo inicial para a próxima forma
        })

    }

    percentageCalc(); //Chamando a função para calcular
    renderGraph(totalAmountA, totalAmountB, totalAmountC); //Chamando a função para renderizar o gráfico

}

/*-------------------------------------------------------------------------------------------------*/