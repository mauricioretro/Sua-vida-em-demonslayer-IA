const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Você se depara com um caminho sinuoso na floresta escura. À sua esquerda, um brilho estranho no meio das árvores; à direita, um caminho estreito e íngreme que leva para baixo.",
        alternativas: [
            {
                texto: "Escolha a esquerda",
                afirmacao: "Você encontra uma adaga mística cravada em uma pedra antiga, pulsando com energia demoníaca."
            },
            {
                texto: "Escolha a direita:",
                afirmacao: "Desce pela trilha, encontrando vestígios frescos de uma criatura demoníaca recentemente passada."
            }
        ]
    },
    {
        enunciado: "Ao investigar um vilarejo abandonado, você ouve murmúrios vindos de uma casa escura. À sua frente, a entrada da casa está aberta; atrás de você, uma névoa densa começa a se formar.",
        alternativas: [
            {
                texto: "Escolha a frente",
                afirmacao: "Dentro da casa, você encontra um mapa antigo que revela a localização do covil do demônio que assola a região."
            },
            {
                texto: "Escolha atrás",
                afirmacao: "A névoa densa se transforma em um enxame de pequenos demônios que atacam você ferozmente."
            }
        ]
    },
    {
        enunciado: "Durante a noite, você é acordado por um som estranho vindo da floresta. À esquerda, você vê uma sombra movendo-se entre as árvores; à direita, um brilho suave em um lago próximo.",
        alternativas: [
            {
                texto: "Escolha a esquerda",
                afirmacao: "Segue a sombra e descobre um demônio disfarçado prestes a atacar uma criança perdida na floresta."
            },
            {
                texto: "Escolha a direita",
                afirmacao: "Você encontra uma espada sagrada, capaz de banir demônios com um simples toque."
            }
        ]
    },
    {
        enunciado: "Enquanto atravessa um desfiladeiro, você percebe uma estátua antiga que parece observar você. À esquerda, uma trilha coberta de musgo desce em direção ao rio; à direita, um túnel escuro corta a rocha.",
        alternativas: [
            {
                texto: "Escolha a esquerda",
                afirmacao: "Segue a trilha até o rio, onde encontra vestígios de um ritual demoníaco recente."
            },
            {
                texto: "Escolha a direita",
                afirmacao: "Explora o túnel escuro e encontra uma passagem secreta que leva diretamente ao covil do demônio."
            }
        ]
    },
    {
        enunciado: "Você chega a uma encruzilhada na estrada, sem sinal de vida por perto. À esquerda, um caminho coberto de névoa negra que desce em direção a uma caverna escura; à direita, um campo aberto com um santuário antigo no centro.",
        alternativas: [
            {
                texto: "Escolha a esquerda",
                afirmacao: "Desce pela trilha até a caverna, onde encontra artefatos demoníacos guardados por uma criatura demoníaca."
            },
            {
                texto: "Escolha a direita",
                afirmacao: "Visita o santuário antigo e recebe uma bênção ancestral que fortalece sua habilidade de lutar contra os demônios."
            }
        ]
    },
];




let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}


function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}


function mostraResultado() {
    caixaPerguntas.textContent = "Apos suas decisões de caminho você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();


