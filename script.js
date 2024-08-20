document.addEventListener('DOMContentLoaded', function() {
    // Função para adicionar botões iniciais
    function adicionarBotoesIniciais() {
        const container = document.getElementById('button-container');
        const botoesIniciais = [
'Fabiano Côrtes', 
'Luciano Rezende', 
'Diego', 
'Breno',
'Aryadna',
'Antônia Azevedo', 
'Ambrosia',
'Alexandre',
'Davi', 
'Brenda', 
'Ana Paula', 
'Amanda',
'Geovana', 
'Cássia', 
'Arlete', 
'Aureni',
'Ieda', 
'Dirce', 
'Daniela', 
'Cida',
'Ivanete', 
'Ereni', 
'Edineuza', 
'Dalila',
'Juliana Ferraz', 
'Ivalnei', 
'Florisvaldo', 
'Débora',
'Júnio César', 
'Jailda', 
'Gustavo', 
'Edinaldo',
'Juracy',
'Jardel Lemos', 
'Hanna', 
'Eliene',
'Laurinda', 
'Josélio', 
'Hêlanio', 
'Emily',
'Leia Carvalho', 
'Liane', 
'Igor Gabriel', 
'Genicleide',
'Leia Reis', 
'Lilia', 
'Isauri', 
'Glaucinei',
'Marcela', 
'Manoel Santos', 
'Jailce', 
'Ilma',
'Miguel', 
'Nilton', 
'Joana', 
'Maria Helena',
'Poliana', 
'Robson', 
'José Morais', 
'Maria Pires',
'Rebeca', 
'Saulo', 
'Juliana Santos', 
'Maria Rodrigues',
'Sirlene', 
'Sônia', 
'Luana', 
'Marineide',
'Rosimeire', 
'Mila',
'Sinvalda', 
'Sara',
'Tatiana', 
'Taise',
'Zenilda', 
'Uiliam',
'Zoraildes', 
'Viviam'
            // Adicione mais nomes conforme necessário...
        ];

        botoesIniciais.forEach((nome, index) => {
            let novoBotao = document.createElement('button');
            novoBotao.className = 'botao';
            novoBotao.textContent = nome;
            novoBotao.id = index + 1;
            novoBotao.setAttribute('onclick', `comentario(${novoBotao.id})`);
            container.appendChild(novoBotao);
        });
    }

    // Função para alternar entre classes
    function comentario(id) {
        const elemento = document.getElementById(id);
        const classes = ["um", "dois", "tres", "quatro", "cinco"];
        let classeAtual = classes.find(cls => elemento.classList.contains(cls));

        if (classeAtual) {
            let indiceAtual = classes.indexOf(classeAtual);
            if (indiceAtual < classes.length - 1) {
                let proximaClasse = classes[indiceAtual + 1];
                elemento.classList.remove(classeAtual);
                elemento.classList.add(proximaClasse);
            }
        } else {
            elemento.classList.add(classes[0]);
        }
        salvarClasses(); // Salva o estado após alteração
    }
    
    window.comentario = comentario;

    // Função para salvar as classes no localStorage
    function salvarClasses() {
        const botoes = document.querySelectorAll('.botao');
        const classesBotoes = {};

        botoes.forEach(botao => {
            classesBotoes[botao.textContent] = botao.className;
        });

        localStorage.setItem('classesBotoes', JSON.stringify(classesBotoes));
    }

    // Função para recuperar as classes do localStorage
    function recuperarClasses() {
        const classesSalvas = JSON.parse(localStorage.getItem('classesBotoes'));
        if (classesSalvas) {
            const botoes = document.querySelectorAll('.botao');
            botoes.forEach(botao => {
                if (classesSalvas[botao.textContent]) {
                    botao.className = classesSalvas[botao.textContent];
                }
            });
        }
    }

    // Função para adicionar um novo botão
    function adicionarBotao() {
        const container = document.getElementById('button-container');
        const novoNome = document.getElementById('newButtonName').value.trim();

        if (novoNome) {
            let novoBotao = document.createElement('button');
            novoBotao.className = 'botao';
            novoBotao.textContent = novoNome;
            container.appendChild(novoBotao);

            organizarBotoes(); // Organiza os botões em ordem alfabética
            salvarClasses(); // Salva o estado após adicionar um novo botão

            // Limpa o campo de entrada
            document.getElementById('newButtonName').value = '';
        }
    }

    // Função para organizar os botões em ordem alfabética
    function organizarBotoes() {
        const container = document.getElementById('button-container');
        let botoes = Array.from(container.getElementsByClassName('botao'));

        botoes.sort((a, b) => a.textContent.localeCompare(b.textContent));

        container.innerHTML = '';
        botoes.forEach((botao, index) => {
            botao.id = index + 1;
            botao.setAttribute('onclick', `comentario(${botao.id})`);
            container.appendChild(botao);
        });

        // Após organizar, recupera as classes para garantir a correspondência correta
        recuperarClasses();
    }

    // Executa as funções ao carregar a página
    adicionarBotoesIniciais();
    organizarBotoes(); // Organiza e, em seguida, recupera as classes
});