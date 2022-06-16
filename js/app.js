let usuario = ""

const crearUsuarios = [{
    usuario:"",
    contrasenia:"",
    mail:""
}]

let listaDeUsuarios = []
let dataUsuarios = new Object()

for(i = 0; i < 5; i++){
dataUsuarios = {}
dataUsuarios['usuario'] = prompt ("ingresa usuario")
dataUsuarios['contrasenia'] = prompt ("ingresa contrasenia")
dataUsuarios['mail'] = prompt ("ingresa mail")
listaDeUsuarios.push(dataUsuarios);
}
console.log(listaDeUsuarios);


