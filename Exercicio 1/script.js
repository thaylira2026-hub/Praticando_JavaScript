function mudarEstilo() {
    const titulo = document.getElementById("titulo-principal");
    const texto = document.getElementById("descricao");

    titulo.innerHTML = "Estilo alterado!";
    titulo.style.color = "red";
    titulo.style.fontSize = "50px";
    
    texto.style.backgroundColor = "pink";
    texto.style.padding = "10px";
    texto.style.border = "2px solid black";
}

function resetarEstilo() {
    const titulo = document.getElementById("titulo-principal");
    const texto = document.getElementById("descricao");

    titulo.innerHTML = "Olá!";
    titulo.style.color = "black";
    titulo.style.fontSize = "32px";

    texto.style.backgroundColor = "transparent";
    texto.style.border = "none";
}