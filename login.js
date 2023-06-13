var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdStargeek'))
if (listaUsuarios == null) {
    listaUsuarios = []
}



function botaoEntrar() {
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    if (validarUsuario(login, senha)) {
        alert('Bem vindo ao sistema')
        location.href = 'catalago.html'
    } else {
        alert('VERIFIQUE SEU USUÁRIO E SENHA OU SE CADASTRE')
    }

    
}

function validarUsuario(login, senha) {
    var encontrado = false
   
    listaUsuarios.forEach( (item, i) => {
        if (item.nome == login && listaUsuarios[i].senha == senha) {
            encontrado = true
        }
    })
    return encontrado
}

function botaoCadastrar() {
    location.href = 'registro.html'
}