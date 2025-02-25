
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
    lista.innerHTML = ""; //Limpiamos la lista antes de recargar la página.
    for (let i = 0; i < amigos.length; i++){
        let nuevoDatoLista = document.createElement('li');
        nuevoDatoLista.textContent = amigos[i];
        lista.appendChild(nuevoDatoLista);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("¡No has añadido ningún amigo!");
    } else {
        let amigoSorteado = Math.floor(Math.random()*amigos.length);
        imprimirSorteo(amigoSorteado);
        return amigoSorteado;
    }
}
function imprimirSorteo (amigoSorteado){
    let sorteo = document.getElementById('resultado');
    sorteo.innerHTML = "";
    let sorteoImpreso = document.createElement('li');
    sorteoImpreso.textContent = amigos[amigoSorteado];
    sorteo.appendChild(sorteoImpreso);
}
function limpiarNombre (){
    document.getElementById('amigo').value = '';
    return;
}