const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está caminhando pelo parque quando encontra um novo dispositivo que promete reduzir o consumo de energia em sua casa. Qual é o seu pensamento inicial?",
        alternativas: [
            {
                texto: "Isso é promissor!",
                afirmacao: "Ficou animado com a ideia de economizar energia e contribuir para a preservação ambiental."
            },
            {
                texto: "Isso pode ser um truque.",
                afirmacao: "Ficou cético e decidiu pesquisar mais sobre a eficácia do dispositivo antes de adotá-lo."
            }
        ]
    },
    {
        enunciado: "Uma organização local oferece um curso sobre como usar tecnologias sustentáveis no cotidiano. Durante o curso, o instrutor pede para você escrever um relatório sobre o impacto dessas tecnologias na redução de resíduos. O que você faz?",
        alternativas: [
            {
                texto: "Utiliza dados fornecidos pelo instrutor e recursos online para compor um relatório detalhado.",
                afirmacao: "Aproveitou as informações disponíveis para criar um trabalho que destaca como tecnologias sustentáveis podem ajudar a reduzir resíduos."
            },
            {
                texto: "Escreve o relatório com base na sua própria pesquisa e experiências sobre práticas sustentáveis.",
                afirmacao: "Prefere usar seu conhecimento pessoal e experiências para refletir sobre o impacto das tecnologias sustentáveis."
            }
        ]
    },
    {
        enunciado: "Durante uma discussão em classe sobre as tecnologias verdes, a professora pergunta como essas tecnologias podem influenciar o mercado de trabalho. Qual é a sua posição?",
        alternativas: [
            {
                texto: "Defende que as tecnologias verdes criarão novas oportunidades de emprego e promoverão um mercado mais sustentável.",
                afirmacao: "Acredita que a inovação em tecnologias sustentáveis pode abrir novos caminhos para profissionais no campo ambiental."
            },
            {
                texto: "Preocupa-se com a possibilidade de que algumas profissões tradicionais possam ser ameaçadas por essas novas tecnologias.",
                afirmacao: "Considera importante pensar em formas de apoiar trabalhadores em transição para o novo mercado sustentável."
            }
        ]
    },
    {
        enunciado: "Você precisa criar um pôster para uma campanha de conscientização ambiental. Como você decide fazer isso?",
        alternativas: [
            {
                texto: "Usa um software de design gráfico para criar um pôster manualmente.",
                afirmacao: "Decide utilizar suas habilidades de design para criar um pôster impactante que promova a conscientização ambiental."
            },
            {
                texto: "Utiliza um gerador de imagens de IA para criar um pôster rapidamente.",
                afirmacao: "Escolhe usar a tecnologia para acelerar o processo e depois ajusta o resultado para garantir que a mensagem ambiental esteja clara."
            }
        ]
    },
    {
        enunciado: "Você está participando de um projeto em grupo sobre a sustentabilidade das práticas de reciclagem. Um dos membros usa uma IA para gerar o conteúdo do projeto, que acaba sendo muito parecido com o que foi encontrado online. Como você lida com isso?",
        alternativas: [
            {
                texto: "Aceita o trabalho gerado pela IA como está, já que foi feito com tecnologia avançada.",
                afirmacao: "Percebe que depender totalmente da IA pode levar a um trabalho menos autêntico e decide buscar um equilíbrio."
            },
            {
                texto: "Revê o conteúdo gerado pela IA e adiciona suas próprias ideias e informações para garantir que o trabalho reflita o que pensa sobre reciclagem.",
                afirmacao: "Reconhece o valor da IA, mas entende que a contribuição pessoal é essencial para um projeto genuíno sobre sustentabilidade."
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Em um futuro mais verde...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
