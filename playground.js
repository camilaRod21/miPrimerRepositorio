function agregarHttp(url) {
    return "http://" + url
}

function procesar(array,fun){
    let arrayNuevo = []
    for (let i = 0; i < array.lengt; i++) {
        arrayNuevo.push(fun(array[i]));
        
    }
}