const listaFilmes = ["https://m.media-amazon.com/images/I/91RlYXu-W0L._AC_SY550_.jpg", "https://m.media-amazon.com/images/M/MV5BMTUxMzEzMzE5OV5BMl5BanBnXkFtZTgwNDk4NjI2MDE@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BNzViNmQ5MTYtMmI4Yy00N2Y2LTg4NWUtYWU3MThkMTVjNjk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg", "https://m.media-amazon.com/images/I/81xckzVfeOL._AC_SL1500_.jpg", "https://media.fstatic.com/s2XkwaqpQZh6iRlEmWzWPkJitg0=/290x478/smart/media/movies/covers/2016/12/ch1.5.jpg", "https://kitleyskrypt.files.wordpress.com/2017/04/dellamorte-dellamore-japanese-ld-cover.jpg"];

const addFilme = document.querySelector('.add-filme');
const secaoFilmes = document.querySelector('.filmes');


function filmeTaNaLista(posterFilme) {

    const linkRepetido = document.querySelector('.link-repetido');
    for (let i = 0; i < listaFilmes.length; i++) {
        if (posterFilme == listaFilmes[i]) {
            linkRepetido.innerHTML = `Ops! Esse Filme já foi adicionado a lista`
            return true;
        }
    }
    linkRepetido.innerHTML ='';
    return false;
}

function exibeFilme(posterFilme) {

    const filme = document.createElement('img');
    const src = document.createAttribute('src');

    src.value = posterFilme;
    filme.setAttributeNode(src);

    secaoFilmes.appendChild(filme);

}

const adicionaFilmes = (event) => {
    event.preventDefault();
    const posterFilme = document.querySelector('.input-filme').value;
    if (filmeTaNaLista(posterFilme) == false) {
        listaFilmes.push(posterFilme);
        exibeFilme(posterFilme);
    }
    console.log(listaFilmes);
}

addFilme.addEventListener('click', adicionaFilmes);

for(let i=0; i< listaFilmes.length; i++) {
    exibeFilme(listaFilmes[i]);
}
