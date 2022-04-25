function ingreseUsuario() {
    //Mostramos el mensaje inicial:
    var usuario = prompt ("Nombre del usuario:")

    //Mostramos lo ingresado el documento HTML, en el div id=mensaje
    document.getElementById('mensaje').innerHTML = usuario;
}

