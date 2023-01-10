function mudaTexto() {
    novoTexto = prompt("Digite seu nome: ")
    const textoParagrafo = document.getElementById('texto')
    textoParagrafo.innerText = `E aí ${novoTexto} Você está deixando o seu site dinâmico.`
}