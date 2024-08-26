let prev = document.getElementById('prev')
let next = document.getElementById('next')
let itens = document.querySelectorAll('.itens')

let contador = itens.length - 1
let ativado = 0

next.onclick = () => {
    let desativado = document.querySelector('.ativo')
    desativado.classList.remove('ativo')

    if(ativado >= contador){
        ativado = 0
    }else{
        ativado += 1
    }
 
    itens[ativado].classList.add('ativo')
}

prev.onclick = () => {
    let desativado = document.querySelector('.ativo')
    desativado.classList.remove('ativo')

    if(ativado <= 0){
        ativado = contador
    }else{
        ativado -= 1
    }

    itens[ativado].classList.add('ativo')
}