/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

const btn = document.querySelector('#verSenha')
btn.addEventListener('click', () => {
    const inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar() {

    const usuario = document.querySelector('#usuario')
    const usuarioLabel = document.querySelector('#usuarioLabel')

    const email = document.querySelector('#email')
    const emailLabel = document.querySelector('#emailLabel')

    const senha = document.querySelector('#senha')
    const senhaLabel = document.querySelector('#senhaLabel')

    const msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        CNPJ: null,
        email: null,
        senha: null
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser?.forEach((item) => {
        if (usuario.value == item.CNPJCad && senha.value == item.senhaCad || usuario.value == item.emailCad && senha.value == item.senhaCad) {

            userValid = {
                nome: item?.userCad,
                CNPJ: item?.CNPJCad || '',
                email: item?.emailCad || '',
                senha: item?.senhaCad
            }
        }
    })

    if (usuario.value == userValid.CNPJ && senha.value == userValid.senha || usuario.value == userValid.email && senha.value == userValid.senha) {
        window.location.href = '../../index.html'

        const mathRandom = Math.random().toString(16).substring(2)
        const token = mathRandom + mathRandom

        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'CNPJ (coloque somente os números), email ou senha incorretos'
        usuario.focus()
    }


}