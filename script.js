const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de marcação",
      "Um estilo de programação",
      "Uma linguagem de programação",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
    respostas: ["var", "let", "const"],
    correta: 1,
  },
  {
    pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
    respostas: ["// Comentário", "/* Comentário */", "# Comentário"],
    correta: 0,
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: ["Atribuição", "Comparação de valor e tipo", "Concatenação"],
    correta: 1,
  },
  {
    pergunta:
      "Qual método é usado para imprimir algo no console em JavaScript?",
    respostas: ["console.log()", "print()", "log.console()"],
    correta: 0,
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Documento de Objeto Móvel",
      "Modelo de Objetos Distribuídos",
      "Modelo de Objeto de Documento",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é a finalidade do operador ternário em JavaScript?",
    respostas: [
      "Atribuição de valor",
      "Comparação de dois valores",
      "Substituir o comando 'if-else'",
    ],
    correta: 0,
  },
  {
    pergunta: "Como você converte uma string para um número em JavaScript?",
    respostas: ["toNumber()", "parseInt()", "convertNumber()"],
    correta: 1,
  },
  {
    pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
    respostas: [
      "São iguais",
      "null é atribuído pelo programador, undefined é atribuído pelo sistema",
      "undefined é usado para valores nulos, null é usado para valores não definidos",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é uma função de callback em JavaScript?",
    respostas: [
      "Uma função que chama outra função",
      "Uma função que é passada como argumento para outra função",
      "Uma função que retorna um valor booleano",
    ],
    correta: 1,
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}