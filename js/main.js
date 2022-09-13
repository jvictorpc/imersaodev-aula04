const listaFilmes = ["https://m.media-amazon.com/images/I/91RlYXu-W0L._AC_SY550_.jpg","https://m.media-amazon.com/images/M/MV5BMTUxMzEzMzE5OV5BMl5BanBnXkFtZTgwNDk4NjI2MDE@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BNzViNmQ5MTYtMmI4Yy00N2Y2LTg4NWUtYWU3MThkMTVjNjk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" ];


for (let i = 0; i < listaFilmes.length; i++){
    document.write(`<img src="${listaFilmes[i]}"/>`);
}