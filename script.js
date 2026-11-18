function mostrarColor(){
    var color = document.getElementById("color").value;
    document.getElementById("cuadroColor").style.backgroundColor = color;
}

function mostrarImagen(){
    var imagen = document.getElementById("imagen").value;
    document.getElementById("cuadroImagen").innerHTML = "<img src='" + imagen + "' width='200'>";
}
