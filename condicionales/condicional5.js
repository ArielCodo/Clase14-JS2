//Mostramos el mensaje inicial:
var promedio = prompt("Promedio:")

promedio = parseInt(promedio)

if (((typeof promedio) === "number") && (promedio >= 0) && (promedio <= 10)) {
    switch (promedio) {
        case 0:
            mensaje = "Cero"; break
        case 1:
            mensaje = "Uno"; break
        case 2:
            mensaje = "Dos"; break
        case 3:
            mensaje = "Tres"; break
        case 4:
            mensaje = "Cuatro"; break
        case 5:
            mensaje = "Cinco"; break
        case 6:
            mensaje = "Seis"; break
        case 7:
            mensaje = "Siete"; break
        case 8:
            mensaje = "Ocho"; break
        case 9:
            mensaje = "Nueve"; break
        case 10:
            mensaje = "Diez"; break
        default:
            mensaje = "Valor no entero."; break
    }
    alert(mensaje)

} else {
    alert("Ingresado un valor erróneo.")
}

