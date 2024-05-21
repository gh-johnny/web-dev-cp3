const notasAlunoDaVez = []
const quantasNotas = 2
let media = 0

function perguntarNotas(quantasNotas){
    let i = 0 
    let somaDasNotas = 0
    while (i < quantasNotas){
        i++
        const nota = prompt(`Por favor, digite a nota ${i} do aluno: `)
        notasAlunoDaVez.push(nota)
        somaDasNotas += Number(nota)
    }
    media = Number(somaDasNotas) / Number(quantasNotas) 
    return media.toFixed(1)
} 

function situacaoDoAluno(media){
    let output = ''
    const span = document.createElement("span")
    const p = document.createElement("p")
    span.style.color = 'white'
    if(media < 3){
        p.innerHTML = 'Com a média abaixo de 3.0, o aluno está '
        output = 'REPROVADO'
        span.style.backgroundColor = 'red'
    }else if(media <= 6){
        p.innerHTML = 'Com a média entre 3.0 e 6.0, o aluno está de '
        output = 'RECUPERAÇÃO'
        span.style.backgroundColor = 'yellow'
        span.style.color = 'black'
    } else {
        p.innerHTML = 'Com a média acima de 6.0, o aluno está '
        output = 'APROVADO'
        span.style.backgroundColor = 'green'
    }

    span.innerText = output
    p.appendChild(span)
    return p
}

function criarTextoResultado(nomeAluno, quantasNotas){

    const section = document.querySelector(".situacao-aluno-container")

    const h2 = document.createElement('h2')
    h2.innerText = `Analisando a situação de ${nomeAluno}`

    const pNota = document.createElement('p')
    pNota.innerText = "Com as notas "

    
    for(let i = 0; i < notasAlunoDaVez.length; i++){
       pNota.innerText += `${notasAlunoDaVez[i]} e ` 
    }

    pNota.innerText += `a média é ${media}`

    const pNotaSituacao = document.createElement('p')
    pNotaSituacao.appendChild(situacaoDoAluno(media))
    console.log(pNotaSituacao)

    section.appendChild(h2)
    section.appendChild(pNota)
    section.appendChild(pNotaSituacao)
    return
}



function entrarComAsNotas () {
    const nomeAluno = prompt("Por favor, digite o nome do aluno: ")

    const mediaDasNotas = perguntarNotas(quantasNotas)
    criarTextoResultado(nomeAluno, quantasNotas)

    return
}