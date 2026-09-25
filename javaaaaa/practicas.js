var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
 function controlarLicuadora() {
    if(estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        licuadora.classList.add("active");
        /*console.log("encendida");*/
    } else {
        estadoLicuadora = "apagada";
        licuadora.classList.remove("active")
        /* console.log("apagada");*/
    }
}