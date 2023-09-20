function preguntar() {
    //Mostramos el mensaje inicial:
    var mensaje = confirm("¿Quieres seguir aprendiendo?");

    //Analizamos la respuesta del usuario
    if (mensaje) {
        alert("¡Estás en el lugar correcto!");
    } else {
        alert("Has presionado CANCELAR");
    }
}
