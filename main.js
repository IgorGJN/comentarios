// Função para salvar as classes dos elementos com classe "botao"
function salvarClasses() {
    // Seleciona todos os elementos com a classe "botao"
    const botoes = document.querySelectorAll('.botao');

    // Cria um objeto para armazenar as classes de cada botão
    const classesBotoes = {};

    // Itera sobre os elementos para salvar suas classes
    botoes.forEach((botao, index) => {
        // Usa o índice como identificador (pode-se usar ID também se disponível)
        classesBotoes[index] = botao.className;
    });

    // Salva o objeto de classes no localStorage como JSON
    localStorage.setItem('classesBotoes', JSON.stringify(classesBotoes));
}

// Função para recuperar as classes ao carregar a página
function recuperarClasses() {
    // Recupera o objeto de classes do localStorage
    const classesSalvas = JSON.parse(localStorage.getItem('classesBotoes'));

    // Se houver classes salvas, aplica-as aos elementos
    if (classesSalvas) {
        const botoes = document.querySelectorAll('.botao');

        botoes.forEach((botao, index) => {
            // Recupera e aplica as classes salvas ao botão correspondente
            if (classesSalvas[index]) {
                botao.className = classesSalvas[index];
            }
        });
    }
}

// Chama a função para recuperar as classes ao carregar a página
recuperarClasses();

// Exemplo: Salvar classes ao clicar em um botão (ou outro evento que preferir)
document.querySelectorAll('.botao').forEach(botao => {
    botao.addEventListener('click', salvarClasses);
});

/*
// Seleciona todos os elementos que deseja salvar as classes (exemplo: elementos com uma determinada classe)
const elements = document.querySelectorAll('.botao');

// Cria um objeto para armazenar as classes de cada elemento
const elementsClasses = {};

elements.forEach((element, index) => {
    // Usa um identificador único para cada elemento (pode ser o index ou um ID)
    const elementId = element.id || `element-${index}`;
    
    // Salva as classes do elemento no objeto
    elementsClasses[elementId] = element.className;
});

// Armazena o objeto no localStorage como string JSON
localStorage.setItem('elementsClasses', JSON.stringify(elementsClasses));// Seleciona todos os elementos que deseja restaurar as classes
const elements = document.querySelectorAll('.botao');

// Recupera o objeto com as classes do localStorage
const savedClasses = JSON.parse(localStorage.getItem('elementsClasses'));

if (savedClasses) {
    elements.forEach((element, index) => {
        // Usa o mesmo identificador que utilizou para salvar (ID ou index)
        const elementId = element.id || `element-${index}`;
        
        // Se as classes foram salvas para esse elemento, restaura-as
        if (savedClasses[elementId]) {
            element.className = savedClasses[elementId];
        }
    });
}
*/


/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4RXuQmXS4Wkvn0gEd6fjtTaEOXw4_ujw",
  authDomain: "r-comentarios.firebaseapp.com",
  projectId: "r-comentarios",
  storageBucket: "r-comentarios.appspot.com",
  messagingSenderId: "649338419517",
  appId: "1:649338419517:web:5e739f55aa66c762776d54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Inicializar o Firestore
const db = getFirestore(app);

// Função para salvar as classes de um elemento no Firestore
async function salvarClassesNoFirestore(id, classes) {
    try {
        await setDoc(doc(db, "elementos", id), {
            classes: classes.join(' ')
        });
        console.log("Classes salvas com sucesso!");
    } catch (e) {
        console.error("Erro ao salvar classes: ", e);
    }
}

// Chame essa função dentro da sua função de alteração de classe
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

    // Após alterar as classes, salve o estado no Firestore
    salvarClassesNoFirestore(id, Array.from(elemento.classList));
}


// Função para carregar as classes de um elemento do Firestore
async function carregarClassesDoFirestore(id) {
    const docRef = doc(db, "elementos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const classes = docSnap.data().classes.split(' ');
        const elemento = document.getElementById(id);
        elemento.className = ''; // Limpa as classes atuais
        classes.forEach(cls => elemento.classList.add(cls)); // Adiciona as classes salvas
    } else {
        console.log("Nenhum dado encontrado para o ID:", id);
    }
}

// Chame essa função para cada elemento ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const ids = [1, 2, 3, 4, 5]; // IDs dos elementos que você deseja restaurar
    ids.forEach(id => carregarClassesDoFirestore(id));
});

*/


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
        ];

        botoesIniciais.forEach((nome, index) => {
            // Cria um novo botão
            let novoBotao = document.createElement('button');
            novoBotao.className = 'botao';
            novoBotao.textContent = nome;

            // Define o ID e o atributo onclick para o botão
            novoBotao.id = index + 1;
            novoBotao.setAttribute('onclick', `comentario(${novoBotao.id})`);

            // Adiciona o botão ao container
            container.appendChild(novoBotao);
        });
    }


function comentario(id) {
    // Seleciona o elemento pelo ID (ou outro seletor)
    const elemento = document.getElementById(id);

    // Define uma lista de classes predefinidas
    const classes = ["um", "dois", "tres", "quatro", "cinco"];

    // Encontra a classe atual do elemento
    let classeAtual = classes.find(cls => elemento.classList.contains(cls));

    // Determina o índice da próxima classe, se houver
    if (classeAtual) {
        let indiceAtual = classes.indexOf(classeAtual);
        
        // Verifica se há uma próxima classe
        if (indiceAtual < classes.length - 1) {
            let proximaClasse = classes[indiceAtual + 1];
            elemento.classList.remove(classeAtual);
            elemento.classList.add(proximaClasse);
        }
    } else {
        // Se nenhuma classe estiver presente, começa pela primeira
        elemento.classList.add(classes[0]);
    }
    
}


// Função para adicionar um novo botão
function adicionarBotao() {
    const container = document.getElementById('button-container');
    const novoNome = document.getElementById('newButtonName').value.trim();

    if (novoNome) {
        // Cria um novo botão
        let novoBotao = document.createElement('button');
        novoBotao.className = 'botao';
        novoBotao.textContent = novoNome;

        // Adiciona o botão ao container
        container.appendChild(novoBotao);

        // Organiza os botões em ordem alfabética
        organizarBotoes();
        
             // Limpa o campo de entrada
        document.getElementById('newButtonName').value = '';
        
    }
}

// Função para organizar os botões em ordem alfabética
function organizarBotoes() {
    const container = document.getElementById('button-container');
    let botoes = Array.from(container.getElementsByClassName('botao'));

    // Ordena os botões pelo texto
    botoes.sort((a, b) => a.textContent.localeCompare(b.textContent));

    // Remove os botões existentes e os reinsere em ordem
    container.innerHTML = '';
    botoes.forEach((botao, index) => {
        botao.id = index + 1; // Atribui um novo ID com base na posição no array
        botao.setAttribute('onclick', `comentario(${botao.id})`);
        container.appendChild(botao);
    });
}

    // Chama a função para adicionar os botões iniciais
    adicionarBotoesIniciais();
    organizarBotoes();

    // Associando a função ao escopo global para que o HTML possa acessá-la
    window.adicionarBotao = adicionarBotao;
    window.comentario = comentario;
});



