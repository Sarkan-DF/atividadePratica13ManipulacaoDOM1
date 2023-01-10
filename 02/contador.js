let contador = 0

function incrementaContador() {
    const somar = document.getElementById("incrementar")
    contador ++
    somar.innerText = `O contador está com ${contador} cliques`
}

function zeraContador() {
    contador = 0
    const somar = document.getElementById("incrementar")
    somar.innerText = ``
}