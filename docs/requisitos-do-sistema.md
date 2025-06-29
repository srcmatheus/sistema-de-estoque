# Especificação de Requisitos do Sistema – Gestão de Estoque (Projeto pessoal)
________________________________________
## 1. Introdução
Objetivo do projeto: desenvolver um sistema simples de gestão de estoque utilizando apenas HTML, CSS e JavaScript. O sistema será executado no navegador, tendo como finalidade o desenvolvimento do conhecimento técnico, visando a prática de conceitos básicos de desenvolvimento front-end e lógica de programação.
Escopo: o sistema permitirá o cadastro, visualização, edição e exclusão de produtos. Cada produto terá nome, código, classificação (A, B ou C), quantidade e preço. Os dados serão armazenados localmente utilizando a API do LocalStorage, permanecendo disponíveis mesmo após o recarregamento da página. O sistema também exibirá informações complementares, como gráficos analíticos e totais de valores em estoque.
A interface será dividida em três seções principais apresentadas em formato de carrossel, acessíveis por meio de um menu de navegação, setas do teclado ou gestos de deslize na versão mobile. As seções são:
- Registro de itens
- Lista de itens
- Estatísticas do estoque
O sistema também conta com um modo escuro (dark mode), que pode ser ativado ou desativado clicando em um ícone disponível na barra de navegação. Em dispositivos móveis, há um menu hambúrguer responsivo, permitindo o acesso rápido e intuitivo às seções.
________________________________________
## 2. Funcionalidades do sistema
- Cadastrar produtos: permite inserir os dados de um produto: nome, código, classificação (A, B ou C), quantidade e preço.
- Listar produtos: mostra todos os produtos cadastrados em uma tabela com informações detalhadas.
- Editar produtos: permite alterar o preço e a quantidade de um produto já cadastrado.
- Excluir produto: remove um produto da lista.
- Gráfico de classificação: exibe um gráfico circular (pizza) com a quantidade de produtos classificados como A, B e C.
- Totais de estoque: mostra valor e quantidade total do estoque geral e o valor e quantidade total por classificação (A, B e C), calculando: quantidade x preço.
- Data e hora: mostra data e hora atual no sistema. Cada produto exibe a data e hora do último cadastro ou atualização.
- Carrossel de seções: navegação entre as três seções (registro, lista e estatísticas) utilizando botões do menu, setas do teclado ou gestos de deslize no mobile.
- Modo escuro: alternância entre os temas claro e escuro clicando no ícone de troca de tema na barra de navegação.
- Menu mobile: exibição de um menu hambúrguer para navegação intuitiva em dispositivos móveis.
________________________________________
## 3. Requisitos funcionais
- RF01 – O sistema deve permitir o cadastro de produtos com nome, código, classificação, quantidade e preço.
- RF02 – O sistema deve verificar se o código do produto já existe e, se sim, exibir uma mensagem indicando que o produto já existe.
- RF03 – O sistema deve exibir os produtos cadastrados em uma tabela.
- RF04 – O sistema deve permitir editar o preço e a quantidade dos produtos.
- RF05 – O sistema deve permitir excluir produtos da lista.
- RF06 – O sistema deve exibir um gráfico circular com a quantidade de produtos por classificação (A, B e C).
- RF07 – O sistema deve calcular e exibir o valor e quantidade total do estoque e o valor e quantidade total por classificação.
- RF08 – O sistema deve exibir a data e hora atual e registrar a data/hora de atualização de cada produto para o momento atual em que foi editado.
- RF09 – O sistema deve armazenar localmente todos os dados dos produtos utilizando a API do LocalStorage do navegador.
- RF10 – O sistema deve permitir a navegação entre as seções de cadastro, listagem e estatísticas por meio de botões no menu de navegação, teclas de seta do teclado e gestos de deslize na versão mobile.
- RF11 – O sistema deve permitir alternar entre os temas claro e escuro clicando no ícone de tema disponível na barra de navegação.
- RF12 – O sistema deve exibir um menu hambúrguer na versão mobile para acesso às seções do sistema.
________________________________________
## 4. Requisitos não funcionais
- RNF01 – O sistema deve ser desenvolvido utilizando apenas HTML, CSS e JavaScript.
- RNF02 – O sistema deve funcionar sem banco de dados externo, utilizando exclusivamente a API do LocalStorage para armazenar e recuperar os dados localmente no navegador.
- RNF03 – O sistema deve ser responsivo e funcionar em diferentes tamanhos de tela, com suporte completo a dispositivos móveis.
- RNF04 – O sistema deve ser intuitivo e de fácil navegação.
- RNF05 – O gráfico deve ser gerado utilizando o canvas do HTML e JavaScript.
- RNF06 – O sistema deve suportar navegação por teclado e gestos de toque na versão mobile.
- RNF07 – O sistema deve possuir uma interface com suporte ao modo escuro, acessível por meio de alternância de tema na interface.
________________________________________
## 5. Interface do usuário (UI)
A interface terá as seguintes áreas, organizadas em um carrossel de três páginas:
- Formulário de cadastro (Página: Registro de Itens):
Campos: nome, código, classificação (A, B, C), quantidade e preço.
- Tabela de produtos (Página: Lista de Itens):
Os produtos serão exibidos em uma listagem vertical, contendo as seguintes informações visíveis: nome, código, classificação, quantidade, preço unitário e um botão de edição e exclusão de itens.
Ao clicar no botão de edição de item, será exibida uma janela modal contendo dados adicionais do produto: código, nome, classificação, quantidade, preço unitário, valor total, última atualização e ações disponíveis (como editar ou excluir).
- Resumo do estoque (Página: Estatísticas de Itens):
Valor e quantidade total do estoque e valor e quantidade por classificação (A, B, C), onde será exibido também um gráfico “pizza” com a quantidade em porcentagem de cada classificação de item. Além disso, será exibida a data e hora atual do sistema.
- Menu de navegação:
Navegação entre as seções, com suporte ao clique, teclado (setas esquerda/direita) e gestos de toque no mobile.
- Modo escuro:
Ícone fixo na barra de navegação para alternar entre os temas claro e escuro.
- Menu mobile:
Menu hambúrguer acessível em dispositivos móveis, exibindo as opções de navegação entre as seções do sistema.
________________________________________
## 6. Considerações finais
Este projeto faz parte do meu desenvolvimento pessoal na área de programação e Engenharia de Software. Seu principal objetivo é aplicar, na prática, conhecimentos fundamentais como lógica de programação, estrutura de dados, manipulação do DOM e controle de interface por meio da construção de um sistema funcional de gestão de estoque.
Acredito que a prática é essencial para o aprendizado verdadeiro, pois é por meio dela que consolidamos o conhecimento e desenvolvemos as habilidades necessárias para nos tornarmos profissionais competentes e preparados para os desafios do mercado.
