const formulario = document.getElementById('formulario')

let nome = document.getElementById('nome')
let email = document.getElementById('email')
let telefone = document.getElementById('telefone')
let mensagem = document.getElementById('mensagem')

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    checandoInput()
})

function checandoInput() {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const telefoneValue = telefone.value.trim()
    const mensagemValue = mensagem.value.trim()

    // Validando o campo nome
    if (nomeValue === '') {
        validaErro(nome, 'Campo obrigatório')
    } else {
        validaSucesso(nome)
    }

    // validando o campo email
    if (emailValue == '') {
        validaErro(email, 'Campo obrigatório')
    } else if (!isEmail(emailValue)) {
        validaErro(email, 'Email inválido')
    } else {
        validaSucesso(email)
    }

    // validando o campo telefone
    if (telefoneValue === '') {
        validaErro(telefone, 'Campo obrigatório')
    } else {
        validaSucesso(telefone)
    }

    //validando o campo mensagem
    if (mensagemValue === '') {
        validaErro(mensagem, 'Campo obrigatório')
    } else {
        validaSucesso(mensagem)
    }
}

function validaErro(input, mensagem) {
    const formControl = input.parentElement;

    const small = formControl.querySelector('small')

    small.innerText = mensagem

    formControl.className = 'form-control erro'

}

function validaSucesso(input){
    const formControl = input.parentElement

    formControl.className = 'form-control sucesso'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}