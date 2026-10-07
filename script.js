function verificarIdade() {
    let nome = document.getElementById("campoNome").value;
    let idade = parseInt(document.getElementById("campoIdade").value);
    let resultado = document.getElementById("mensagemResultado");

    if (nome === "" || isNaN(idade) || idade < 0) {
        resultado.innerText = "Por favor, preencha o nome e digite uma idade numérica válida.";
        resultado.style.color = "red";
        return;
    }

    if (idade < 12) {
        let faltam = 18 - idade;
        resultado.innerText = `Acesso negado para ${nome}: você tem ${idade} anos e ainda não possui a idade mínima permitida. Faltam ${faltam} ano(s) para atingir a maioridade. Você é uma criança.`;
        resultado.style.color = "orange";
        console.log(`Verificação informativa: ${nome}, ${idade} anos (Criança)`);
    } 
    else if (idade < 18) {
        let faltam = 18 - idade;
        resultado.innerText = `Acesso negado para ${nome}: você tem ${idade} anos e ainda não possui a idade mínima permitida. Faltam ${faltam} ano(s) para atingir a maioridade. Você é um adolescente.`;
        resultado.style.color = "orange";
        console.log(`Verificação informativa: ${nome}, ${idade} anos (Adolescente)`);
    } 
    else if (idade < 60) {
        resultado.innerText = `Olá, ${nome}! Você tem ${idade} anos e seu acesso foi liberado com sucesso. Você é um adulto.`;
        resultado.style.color = "green";
        console.log(`Verificação aprovada: ${nome}, ${idade} anos (Adulto)`);
    } 
    else {
        resultado.innerText = `Olá, ${nome}! Você tem ${idade} anos e seu acesso foi liberado com sucesso. Você pertence à terceira idade (atendimento preferencial).`;
        resultado.style.color = "green";
        console.log(`Verificação aprovada: ${nome}, ${idade} anos (Terceira idade)`);
    }
}
