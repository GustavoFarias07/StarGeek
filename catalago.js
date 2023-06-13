var listaMidias = []

listaMidias = JSON.parse(localStorage.getItem('bdMidia'))
if (listaMidias == null) {
    listaMidias = []
}
BotaoMidia()  

function BotaoMidia() {
    listaMidias.forEach(item => {
        if (item.titulo == 'Filmes de terror') {
            document.getElementById('listaTerror').innerHTML += `<img src="${item.link}" class= "midia">`
        }
    })
    listaMidias.forEach(item => {
        if (item.titulo == 'Filmes de Comedia') {
            document.getElementById('listaComedia').innerHTML +=
                `<img src="${item.link}" class= "midia">`
        }

    })
    listaMidias.forEach(item => {
        if (item.titulo == 'Filmes Infantis') {
            document.getElementById('listaInfantil').innerHTML +=
                `<img src="${item.link}" alt="imagem" class= "midia">`
        }

    })

 
}