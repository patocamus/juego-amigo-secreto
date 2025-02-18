
let amigos = []; //Declaración del array que contendrá la lista de amigos.

function agregarAmigo(){ //Declaración de la función que permite agregar amigos a la lista.
    let datoUsuario = document.getElementById('amigo').value.trim();
    if(datoUsuario === '') {
        alert("Por favor, inserte un nombre.");
        return;
    } if (amigos.includes(datoUsuario)) {
        alert("¡Ya añadiste a ese amigo a la lista!")
        return;
    } if (/\d/.test(datoUsuario)) {
        alert("¡El nombre de tu amigo no puede contener números!");
    }
    else {
        amigos.push(datoUsuario);
        imprimirAmigo();
        limpiarNombre();
        return;
    }
}
function imprimirAmigo (){
    let lista = document.getElementById('listaAmigos');
    let nuevoDatoLista = document.createElement('li');
    nuevoDatoLista.textContent = amigos[amigos.length - 1];
    lista.appendChild(nuevoDatoLista);
    return;
}
function limpiarNombre (){
    document.getElementById('amigo').value = '';
    return;
}