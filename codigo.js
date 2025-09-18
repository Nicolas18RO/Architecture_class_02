function mifuncion(){
    let mensaje = document.getElementById("mse").value;
    let respuesta = "";
    let salida = ""
    let caracter = "";
    let numero = 0;
    for ( let vc = 0; vc < mensaje.length ; vc++ ){

        respuesta = respuesta + "," + mensaje[vc].charCodeAt(0);
        numero =  mensaje[vc].charCodeAt(0) + 10;
        salida = String.fromCharCode (numero);
        salida = salida + caracter;
}

    document.getElementById("se").innerHTML = salida;
}


function mifuncion2(){
    let mensaje = document.getElementById("me").value;
    let respuesta = "";
    let salida = ""
    let caracter = "";
    let numero = 0;
    for ( let vc = 0; vc < mensaje.length ; vc++ ){
        //respuesta = respuesta + "," + mensaje[vc].charCodeAt(0);
        numero =  mensaje[vc].charCodeAt(0) - 10;
        caracter = String.fromCharCode (numero);
        salida = salida + caracter;
    }

    document.getElementById("sse").innerHTML = salida;
}
