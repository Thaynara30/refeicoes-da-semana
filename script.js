let refeicoes = [];

function adicionarRefeicoes(){
    const novaRefeicao = prompt("Digite uma nova refeição:");
if (novaRefeicao) {
    refeicoes.push(novaRefeicao);
    console.log("Refeição adicionada:" , novaRefeicao);
}
else {
    console.log("Nenhuma refeição foi adicionada.");
}
}
  //função para sortea uma refeição
function sortearRefeicoes(){
    const resultadoSorteio = document.getElementById("resultado-sorteio");
    if (refeicoes.length === 0){
        resultadoSorterio.innerHTML = "Não ha opções de refieçoes diponíveis."
    }else{
        const indiceSorteado = Math.floor(Math.random() * refeicoes.length);
        const refeicaoSorteada = refeicoes[indiceSorteado]
        resultadoSorteio.innerHTML = `Refeição sorteada: ${refeicaoSorteada}`;

    }
}//função para exibir todas as opções de refeição
function exibirRefeicoes(){
    const opcoesRefeicao = document.getElementById("opcoes-refeicoes");
    opcoesRefeicao.innerHTML = ""; //limpa oconteudo anterior
    if (refeicoes.length === 0){
        opcoesRefeicao.innerHTML = "Não  há opções de refeiçoes diponíveis."
    }
    else{
        let listaOpcoes = "";
        refeicoes.forEach((refeicao, indice) => {
            listaOpcoes += `<li>${indice + 1}. ${refeicao}</li>`;
        });
        opcoesRefeicao.innerHTML = listaOpcoes;
      
        
    }
    
}