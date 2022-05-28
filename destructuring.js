let colores = ["Rojo", "Azul", "Amarillo",{
    colorMezcla : "violeta"
}] // se puede tener un objeto literal 

let colorRojo = colores[0]
let colorAzul = colores[1]
let colorAmarillo = colores[2]

let [rojo, azul, amarillo] = colores 

let [,,oreo] = colores // para saltar color uso , 

console.log(colorRojo,oreo.colorMezcla)

/* Aplicado a objetos literales */

let concensionaria = {
    marca: "volkswagen",
    modelo: "vento",
    precio: 60000000,
    km: 60000,
    color: "turquesa",
    anio: 2020,
    patente: "COM017",
    vendido: true
}

let{color:pintura,anio,km,marca,modelo,patente,precio,vendido }= concensionaria

console.log(pintura);