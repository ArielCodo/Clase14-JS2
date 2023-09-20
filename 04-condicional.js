//Mostramos el mensaje inicial:
var promedio = prompt("Promedio:")

promedio = Number(promedio)

if (((typeof promedio) === "number") && (promedio >= 0) && (promedio <= 10) )  {
    if (promedio >= 7) {
        alert("Aprobado.")
    } else if (promedio >= 4 && promedio <7) {
        alert("En proceso.")
    } else {
        alert("No alcanza")
    }
} else {
    alert("Ingresado un valor erróneo.")
}

/* Algunos cambios y mejoras que podemos hacer aqui:

- ¿Podemos escribir la nota en letras?
*/