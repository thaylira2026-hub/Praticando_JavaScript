function expandir(elementoClicado) {
    
    const destaque = document.getElementById("imagem-principal");

    
    const novoCaminho = elementoClicado.src;

   
    destaque.setAttribute("src", novoCaminho);

    
    destaque.style.borderColor = "gold";
}