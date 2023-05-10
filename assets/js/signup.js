/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */


let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let razaoSocial = document.querySelector('#razaoSocial')
let labelRazaoSocial = document.querySelector('#labelRazaoSocial')
let validRazaoSocial = false

let tipo = document.querySelector('#tipo')
let labelTipo = document.querySelector('#labelTipo')
let validTipo = false

let nomeFantasia = document.querySelector('#nomeFantasia')
let labelNomeFantasia = document.querySelector('#labelNomeFantasia')
let validNomeFantasia = false

let CNPJ = document.querySelector('#CNPJ')
let labelCNPJ = document.querySelector('#labelCNPJ')
let validCNPJ = false

let endereco = document.querySelector('#endereco')
let labelEndereco = document.querySelector('#labelEndereco')
let validEndereco = false

let bairro = document.querySelector('#bairro')
let labelBairro = document.querySelector('#labelBairro')
let validBairro = false

let numero = document.querySelector('#numero')
let labelNumero = document.querySelector('#labelNumero')
let validNumero = false

let complemento = document.querySelector('#complemento')
let labelComplemento = document.querySelector('#labelComplemento')
let validComplemento = false

let CEP = document.querySelector('#CEP')
let labelCEP = document.querySelector('#labelCEP')
let validCEP = false

let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')
let validTelefone = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let inscricaoEstadual = document.querySelector('#inscricaoEstadual')
let labelInscricaoEstadual = document.querySelector('#labelInscricaoEstadual')
let validInscricaoEstadual = false

let inscricaoMunicipal = document.querySelector('#inscricaoMunicipal')
let labelInscricaoMunicipal = document.querySelector('#labelInscricaoMunicipal')
let validInscricaoMunicipal = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

function checkContainsAnyLowerCase(value) {
    return /[a-z]/g.test(value);
}

function checkContainsAnyUppercaseletter(value) {
    return /[A-Z]/g.test(value);
}

function checkContainsAnyBlankSpace(value) {
    return /[\s]/i.test(value);
}

function checkContainsAnyNumber(value) {
    return /[\d]/i.test(value);
}

function checkContainsPunctuationAccentuationCharacter(value) {
    return /(?=.*[}{~'ãáâêàẽéêĩíîìõóôòũúûù])/.test(value);
}

function checkAllowedSpecialCharacters(value) {
    return /(?=.*[ç!@#$%*()=+¨&*()<>:;.,?^`'\-_\|/])/.test(value);
}

function validatePassword(value) {
    let msg = ''
    let checkPasswordLenght =
        value.length >= 8 && value.length <= 32;
    if (!checkPasswordLenght) {
        return this.msg = 'Senha Inválida, deve conter de 8 a 32 caracteres!'
    }
    if (!checkContainsAnyLowerCase(value)) { return msg = 'Senha Inválida, acrescente uma letra minúscula!'; }
    if (!checkContainsAnyUppercaseletter(value)) { return msg = 'Senha Inválida, acrescente uma letra Maiúscula!'; }
    if (checkContainsAnyBlankSpace(value)) { return msg = 'Senha Inválida, não deixe espaço em branco!'; }
    if (!checkContainsAnyNumber(value)) { return msg = 'Senha Inválida, acrescente um número!'; }
    if (checkContainsPunctuationAccentuationCharacter(value)) { return msg = 'Senha Inválida, caractere não permetido!'; }
    if (!checkAllowedSpecialCharacters(value)) { return msg = 'Senha Inválida, insira um caractere especial!'; }

    return msg = 'Senha Válida!!';
}

function FormataCnpj(campo, teclapres) {
    let tecla = teclapres.keyCode;
    let vr = new String(campo.value);
    vr = vr.replace(".", "");
    vr = vr.replace("/", "");
    vr = vr.replace("-", "");
    tam = vr.length + 1;
    if (tecla != 14) {
        if (tam == 3)
            campo.value = vr.substr(0, 2) + '.';
        if (tam == 6)
            campo.value = vr.substr(0, 2) + '.' + vr.substr(2, 5) + '.';
        if (tam == 10)
            campo.value = vr.substr(0, 2) + '.' + vr.substr(2, 3) + '.' + vr.substr(6, 3) + '/';
        if (tam == 15)
            campo.value = vr.substr(0, 2) + '.' + vr.substr(2, 3) + '.' + vr.substr(6, 3) + '/' + vr.substr(9, 4) + '-' + vr.substr(13, 2);
    }
}


function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    if (cnpj.length != 14)
        return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    // Valida DVs
    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;

    return true;
}



usuario.addEventListener('keyup', () => {
    if (!usuario.value.length) {
        labelUsuario.setAttribute('style', 'color:red')
        labelUsuario.innerHTML = 'Insira um nome para o usuario'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color:green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})

razaoSocial.addEventListener('keyup', () => {
    if (!razaoSocial.value.length) {
        labelRazaoSocial.setAttribute('style', 'color:red')
        labelRazaoSocial.innerHTML = 'Insira a Razão Social'
        razaoSocial.setAttribute('style', 'border-color: red')
        validRazaoSocial = false
    } else {
        labelRazaoSocial.setAttribute('style', 'color:green')
        labelRazaoSocial.innerHTML = 'Razão Social'
        razaoSocial.setAttribute('style', 'border-color: green')
        validRazaoSocial = true
    }
})

nomeFantasia.addEventListener('keyup', () => {
    if (!nomeFantasia.value.length) {
        labelNomeFantasia.setAttribute('style', 'color:red')
        labelNomeFantasia.innerHTML = 'Insira o Nome Fantasia'
        nomeFantasia.setAttribute('style', 'border-color: red')
        validNomeFantasia = false
    } else {
        labelNomeFantasia.setAttribute('style', 'color:green')
        labelNomeFantasia.innerHTML = 'Nome Fantasia'
        nomeFantasia.setAttribute('style', 'border-color: green')
        validNomeFantasia = true
    }
})


endereco.addEventListener('keyup', () => {
    if (!endereco.value.length) {
        labelEndereco.setAttribute('style', 'color:red')
        labelEndereco.innerHTML = 'Insira o Endereço'
        endereco.setAttribute('style', 'border-color: red')
        validEndereco = false
    } else {
        labelEndereco.setAttribute('style', 'color:green')
        labelEndereco.innerHTML = 'Endereço'
        endereco.setAttribute('style', 'border-color: green')
        validEndereco = true
    }
})


CEP.addEventListener('keyup', () => {
    if (!CEP.value.length) {
        labelCEP.setAttribute('style', 'color:red')
        labelCEP.innerHTML = 'Insira o CEP'
        CEP.setAttribute('style', 'border-color: red')
        validCEP = false
    } else {
        labelCEP.setAttribute('style', 'color:green')
        labelCEP.innerHTML = 'CEP'
        CEP.setAttribute('style', 'border-color: green')
        validCEP = true
    }
})

telefone.addEventListener('keyup', () => {
    if (!telefone.value.length) {
        labelTelefone.setAttribute('style', 'color:red')
        labelTelefone.innerHTML = 'Insira o telefone'
        telefone.setAttribute('style', 'border-color: red')
        validTelefone = false
    } else {
        labelTelefone.setAttribute('style', 'color:green')
        labelTelefone.innerHTML = 'Telefone'
        telefone.setAttribute('style', 'border-color: green')
        validTelefone = true
    }
})

email.addEventListener('keyup', () => {
    if (!email.value.length) {
        labelEmail.setAttribute('style', 'color:red')
        labelEmail.innerHTML = 'Insira o email'
        email.setAttribute('style', 'border-color: red')
        validEmail = false
    } else {
        labelEmail.setAttribute('style', 'color:green')
        labelEmail.innerHTML = 'Email'
        email.setAttribute('style', 'border-color: green')
        validEmail = true
    }
})

senha.addEventListener('keyup', () => {
    validade = validatePassword(senha.value)
    if (validade == 'Senha Válida!!') {
        labelSenha.setAttribute('style', 'color:green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    } else {
        labelSenha.setAttribute('style', 'color:red')
        labelSenha.innerHTML = `${validade}`
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    }
})

confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute('style', 'color:red')
        labelConfirmSenha.innerHTML = 'Senha inválida'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color:green')
        labelConfirmSenha.innerHTML = 'Senha'
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
    }
})


function cadastrar() {
    if (validUsuario && validSenha && validConfirmSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        listaUser.push({
            userCad: usuario?.value,
            senhaCad: senha?.value,
            razaoSocialCad: razaoSocial?.value,
            tipoCad: tipo?.value,
            nomeFantasiaCad: nomeFantasia?.value,
            CNPJCad: CNPJ?.value,
            enderecoCad: endereco?.value,
            bairroCad: bairro?.value,
            numeroCad: numero?.value,
            complementoCad: complemento?.value,
            CEPCad: CEP?.value,
            telefoneCad: telefone?.value,
            emailCad: email?.value,
            inscricaoEstadualCad: inscricaoEstadual?.value,
            inscricaoMunicipalCad: inscricaoMunicipal?.value,
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        window.alert('Usuário Cadastrado com Sucesso')
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(() => {
            window.location.href = './signin.html'
        }, 2000)

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos com <p style="font-size:25px">*</p> corretamente</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirm.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#confirmSenha')

    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})

CNPJ.addEventListener('keyup', () => {
    if (!CNPJ.value.length) {
        labelCNPJ.setAttribute('style', 'color:red')
        labelCNPJ.innerHTML = 'Insira o CNPJ'
        CNPJ.setAttribute('style', 'border-color: red')
        validCNPJ = false
    } else {
        labelCNPJ.setAttribute('style', 'color:green')
        labelCNPJ.innerHTML = 'CNPJ'
        CNPJ.setAttribute('style', 'border-color: green')
        validCNPJ = true
    }
})