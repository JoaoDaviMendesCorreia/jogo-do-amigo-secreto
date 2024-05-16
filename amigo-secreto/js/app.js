function adicionar() {
    let adicionarAmigo = document.getElementById('nome-amigo').value
    let amigosIncluido = document.getElementById('lista-amigos')
    if (adicionarAmigo == '') {
        alert('adicione algo a lista')
        return
    } else if (listaAmigo.includes(adicionarAmigo)) {
        alert('mesmo nome')
        return
    } else {
        amigosIncluido.textContent = `${adicionarAmigo}, ${listaAmigo.join(', ')}            `
        listaAmigo.push(adicionarAmigo)
    }

}
listaAmigo = []

function sortear() {
    if (listaAmigo.length <= 3) {
        alert('adicione pelo menos 4 amigos')
        return
    }

    embaralha(listaAmigo);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < listaAmigo.length; i++) {
        if (i == listaAmigo.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigo[i] + ' --> ' + listaAmigo[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigo[i] + ' --> ' + listaAmigo[i + 1] + '<br>';
        }
    }
}




function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaAmigo = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
