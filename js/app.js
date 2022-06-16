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




// const data = [
//     { value: 1, name: 'Uno' },
//     { value: 2, name: 'Dos' },
//     { value: 3, name: 'Tres' },
//     { value: 4, name: 'Cuatro' }
//   ]
  
//   let nuevoArreglo = [];
//   let dataObject = new Object();
  
//   for(i = 0; i < data.length; i++){
//     dataObject = {};
//     dataObject['value'] = data[i].value;
//     dataObject['name'] = data[i].name;
//     nuevoArreglo.push(dataObject);
//   }
//   console.log(nuevoArreglo);


// // console.log(listaDeUsuarios);

