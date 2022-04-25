//Mostramos el mensaje inicial:
var promedio = prompt("Promedio:")

//alert (typeof (promedio))
promedio = Number(promedio)
//alert (typeof (promedio))

if (((typeof promedio) === "number") && (promedio >= 0) && (promedio <= 10) )  {
    if (promedio >= 7) {
        alert("Estas aprobado. ¡Felicitaciones!")
    } else {
        alert("No aprobaste. ¡Continúa trabajando!")
    }
} else {
    alert("Ingresado un valor erróneo.")
}

/* Algunos cambios y mejoras que podemos hacer aqui:

- 0-4: "No alcanza", 4-7: "En proceso", 7-10: "aprobado"
- ¿Podemos escribir la nota en letras?
*/