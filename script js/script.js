const perfis = [
    {
        id: 1,
        nome: "Engenheiro de Sistemas",
        categoria: "Construção",
        descricao: "Gosta de construir, corrigir falhas e encontrar soluções práticas.",
        imagem: "imagens/perfil-1.jpg"
    },

    {
        id: 2,
        nome: "Cientista Explorador",
        categoria: "Investigação",
        descricao: "Gosta de pesquisar, analisar evidências e descobrir como as coisas funcionam.",
        imagem: "imagens/perfil-2.jpg"
    },

    {
        id: 3,
        nome: "Explorador de Campo",
        categoria: "Exploração",
        descricao: "Gosta de descobrir lugares, experimentar alternativas e lidar com situações novas.",
        imagem: "imagens/perfil-3.jpg"
    },

    {
        id: 4,
        nome: "Estrategista da Missão",
        categoria: "Planejamento",
        descricao: "Gosta de organizar informações, coordenar pessoas e decidir os próximos passos.",
        imagem: "imagens/perfil-4.jpg"
    }
];


let formulario = document.getElementById("formulario");
let resultado = document.getElementById("resultado");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let nascimento = document.getElementById("nascimento").value;


    if (nome == "") {
        alert("Digite seu nome.");
        return;
    }

    if (nascimento == "") {
        alert("Digite sua data de nascimento.");
        return;
    }


    let dataNascimento = new Date(nascimento);
    let hoje = new Date();


    if (dataNascimento > hoje) {
        alert("A data de nascimento não pode ser futura.");
        return;
    }


    let idade = hoje.getFullYear() - dataNascimento.getFullYear();


    if (
        hoje.getMonth() < dataNascimento.getMonth() ||
        (hoje.getMonth() == dataNascimento.getMonth() &&
        hoje.getDate() < dataNascimento.getDate())
    ) {
        idade--;
    }


    let pontos = {
        engenheiro: 0,
        cientista: 0,
        explorador: 0,
        estrategista: 0
    };


    for (let i = 1; i <= 4; i++) {

        let resposta = document.querySelector(
            'input[name="pergunta' + i + '"]:checked'
        );


        if (resposta == null) {
            alert("Responda todas as perguntas.");
            return;
        }


        pontos[resposta.value]++;
    }


    let escolhido = "engenheiro";
    let maior = pontos.engenheiro;


    if (pontos.cientista > maior) {
        escolhido = "cientista";
        maior = pontos.cientista;
    }


    if (pontos.explorador > maior) {
        escolhido = "explorador";
        maior = pontos.explorador;
    }


    if (pontos.estrategista > maior) {
        escolhido = "estrategista";
        maior = pontos.estrategista;
    }


    let nomePerfil = "";


    if (escolhido == "engenheiro") {
        nomePerfil = "Engenheiro de Sistemas";
    }


    if (escolhido == "cientista") {
        nomePerfil = "Cientista Explorador";
    }


    if (escolhido == "explorador") {
        nomePerfil = "Explorador de Campo";
    }


    if (escolhido == "estrategista") {
        nomePerfil = "Estrategista da Missão";
    }


    let perfil = null;


    for (let i = 0; i < perfis.length; i++) {

        if (perfis[i].nome == nomePerfil) {
            perfil = perfis[i];
        }

    }


    resultado.innerHTML = "";


    let titulo = document.createElement("h2");
    titulo.textContent = "Resultado";

    resultado.appendChild(titulo);


    let nomeTexto = document.createElement("p");
    nomeTexto.textContent = "Nome: " + nome;

    resultado.appendChild(nomeTexto);


    let idadeTexto = document.createElement("p");
    idadeTexto.textContent = "Idade: " + idade + " anos";

    resultado.appendChild(idadeTexto);


    let perfilTexto = document.createElement("h2");
    perfilTexto.textContent = perfil.nome;

    resultado.appendChild(perfilTexto);


    let categoriaTexto = document.createElement("p");
    categoriaTexto.textContent = "Categoria: " + perfil.categoria;

    resultado.appendChild(categoriaTexto);


    let descricaoTexto = document.createElement("p");
    descricaoTexto.textContent = perfil.descricao;

    resultado.appendChild(descricaoTexto);


    let imagem = document.createElement("img");
    imagem.src = perfil.imagem;
    imagem.alt = perfil.nome;

    resultado.appendChild(imagem);


    let botao = document.createElement("button");
    botao.textContent = "faça o teste novamente.";


    botao.onclick = function() {
        refazer();
    };


    resultado.appendChild(botao);


    resultado.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


function refazer() {

    formulario.reset();

    resultado.innerHTML = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}