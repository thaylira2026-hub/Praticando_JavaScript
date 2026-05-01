function validar(elemento) {
    if (!elemento.value.includes('@')) {
        elemento.style.border = '2px solid red';
    } else {
        elemento.style.border = '2px solid green';
    }
}

function exibirDados(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('mensagem').value;
    const painel = document.getElementById('painel-resumo');
    
    painel.innerHTML = `
        <hr>
        <h3>Dados Enviados com Sucesso:</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${msg}</p>
    `;
    
    painel.style.color = "green";
}