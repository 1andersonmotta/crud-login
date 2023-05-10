/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */


function enviarEmail() {
    const email = document.querySelector('#email')
    const emailLabel = document.querySelector('#emailLabel')


    const msgError = document.querySelector('#msgError')
    let listaUser = []

    let emailValid = {
        email: null,
    }

    //substituir pela consulta ao banco de dados real
    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser?.forEach((item) => {
        if (email.value == item.emailCad) {

            emailValid = {
                email: item.emailCad,
            }
        }
    })

    if (email.value == emailValid.email) {
        msgError.setAttribute('style', 'display: none')
        const mathRandom = Math.random().toString(16).substring(2)
        const token = mathRandom + mathRandom
        emailLabel.setAttribute('style', 'color: green')
        email.setAttribute('style', 'border-color: green')
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = 'E-mail enviado'
        //enviar email

    } else {

        emailLabel.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')
        msgSuccess.setAttribute('style', 'display: none')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'E-mail de cadastro incorreto'
        email.focus()
    }


}

function voltar() {
    window.location.href = './signin.html';

}