var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdStargeek'))
if (listaUsuarios == null){
    listaUsuarios = []
}

console.log(listaUsuarios)

function validarCadastro(nome, senha, confSenha){
    if (senha != confSenha) {
        alert ('Verifique suas senhas pois estão diferentes')
        return false
    }

    if (nome != '' && senha != '' && confSenha != '' ) {
        return true
    } else {
        return false
    }    
}

function BotaoEntrar() {
    var nome = document.getElementById("nome").value
    var senha = document.getElementById("senha").value
    var confSenha = document.getElementById("confSenha").value
    
    var possoCadastrar = validarCadastro(nome, senha, confSenha)
    if (possoCadastrar == false) {
        alert ('Verifique os dados antes de cadastrar')
        return 
    }
    
    var usuario = {
        nome: nome,
        senha: senha
    }
    listaUsuarios.push(usuario)
    
    localStorage.setItem( 'bdStargeek', JSON.stringify(listaUsuarios) )

    alert ('Usuário cadastrado com sucesso. Faça o login.   ')

    window.location.href = 'login.html'
}


