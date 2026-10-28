function aumentarMegusta(idContador){
    let contador = Number(document.getElementById(idContador).innerText);
    contador++;
    document.getElementById(idContador).innerText = contador;
}

function buscarPalabra(){
    let palabra = document.querySelector('#buscar').value;
    if(palabra == ""){
        alert("Debe ingresar una palabra");
    }else{
        alert("La palabra buscada es: " + palabra);
    }
}

function cambiarImagen(){
    let imagen = document.querySelector('#imagen');
    let lista = ["img/blue.png", "img/green.png", "img/red.png", "img/black.png"];
    let posicion = Math.floor(Math.random() * lista.length);
    imagen.src = lista[posicion];
}