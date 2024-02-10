const perguntas = [
    {
      pergunta: "O que significa a sigla DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Output Management",
        "Dynamic Object Mechanism",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "log()",
        "print()",
        "display()",
      ],
      correta: 0
    },
    {
      pergunta: "Como se faz um comentário de uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "# Comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "addToEnd()",
      ],
      correta: 0
    },
    {
      pergunta: "Em JavaScript, qual função é usada para converter uma string para um número inteiro?",
      respostas: [
        "parseInt()",
        "stringToInteger()",
        "toInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "Como se chama a estrutura de controle que permite executar repetidamente um bloco de código em JavaScript?",
      respostas: [
        "if-else",
        "for loop",
        "switch case",
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes não é um tipo de dado em JavaScript?",
      respostas: [
        "Number",
        "Boolean",
        "Float",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para um condicional 'if' em JavaScript?",
      respostas: [
        "if (condicao) { código }",
        "if {condicao => código}",
        "if condicao: código",
      ],
      correta: 0
    },
    {
      pergunta: "Como se acessa o primeiro elemento de um array em JavaScript?",
      respostas: [
        "array.first()",
        "array[0]",
        "getFirst(array)",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição",
        "Igualdade estrita",
        "Menor ou igual",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const templete = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  for (const item of perguntas) {
    const quizItem = templete.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }