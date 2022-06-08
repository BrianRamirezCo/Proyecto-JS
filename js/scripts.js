const usuario = {
    nombre: "Constantino",
    cliente: true,
    bancoDeLaPersona : "Galicia"
}
const descuento = 0.2

const producto = {
    marca : "Motorola",
    modelo : "G20",
    precio : 1500 ,
    id:1
}
const impuestosIva = 1.21;
const envio = 500;

function calcularPrecioTotal (precio) {
    const precioTotal = (precio * impuestosIva) + envio;
    console.log(precioTotal)
}
calcularPrecioTotal(producto.precio);



function clienteBanco(){
    if (usuario.bancoDeLaPersona === "Galicia"){
    calcularPrecioTotal(producto.precio - (producto.precio * descuento));
    }else{
    false
    }
}
clienteBanco();