function buscarCep (){
    fetch(`https://viacep.com.br/ws/${cep.value}/json`)
    .then(res => res.json())
    .then(conteudo => {
        logradouro.value = conteudo.logradouro
        bairro.value = conteudo.bairro
        cidade.value = conteudo.localidade
        estado.value = conteudo.uf
    
    });

    //.then(function (resposta) {
    //     return resposta.json(); <<<<- forma que funciona porém antiga. Acima se encontra a forma redudiza em forma de ARROW FUNCTION que é mais usada atualmente









    // document.getElementById('logradouro').value = "nome da rua" essa opção é a mais fácil
    // logradouro.value = "Av Santos Dumont"; // Essa opção é mais eficiente porque puxa o id de primeira
    // bairro.value = "Aldeota";
    // cidade.value = "Fortaleza";
    // estado.value = "Ceará";



}