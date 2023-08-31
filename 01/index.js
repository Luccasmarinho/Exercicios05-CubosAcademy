function corrigirProva(prova) {
    
    let acertos = 0; 

    for (let i = 0; i < prova.questoes.length; i++) {
        if (prova.questoes[i].resposta === prova.questoes[i].correta) {
            acertos++
        }
    }
    const nota = acertos * prova.valor / prova.questoes.length; 
    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}.`);
};

const prova = {
    aluno: "Luccas",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "c"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "e"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

corrigirProva(prova);