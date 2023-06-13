var listaMidias = []

listaMidias = JSON.parse(localStorage.getItem('bdMidia'))
if (listaMidias == null) {
    listaMidias = []
}
 
excluirMidia()

function cadastrofilme(){
    var nome = document.getElementById("nome").value
    var titulo = document.getElementById("Titulo").value
    var link = document.getElementById("link").value
    
    var filme = {
        nome: nome,
        titulo: titulo,
        link: link
    }
    listaMidias.push(filme)
    
    localStorage.setItem('bdMidia', JSON.stringify(listaMidias) )

    location.href = "catalago.html"
  
}


function excluirMidia()
{
    document.getElementById("ExibirImg").innerHTML = ''

    listaMidias.forEach((item, pos) => {
        document.getElementById("ExibirImg").innerHTML += `<img src='${item.link}' class="midia">
                    <img src='/img/excluir.svg' class='lixo' onclick='excluirUsuario(${pos})'>`
        })
}




function Aparecerimg(){
    document.getElementById('imagem').src = document.getElementById('link').value
}

function excluirUsuario(pos){
    var confirmarExclusao = confirm ('Deseja realmente excluir este filme ?')
    if(confirmarExclusao ){
    listaMidias.splice (pos, 1)
    localStorage.setItem( 'bdMidia', JSON.stringify(listaMidias)) 
    excluirMidia()
    }
}    

