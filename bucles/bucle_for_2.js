var numero = 6;

document.write("<h1>Tabla de multiplicar por " + numero + "</h1>");

for (i = 0; i < 11; i++) {
    document.write('<div class="linea">')
    document.write( numero +" * " + i +" = " + (i * numero));
    document.write("</div>");
}