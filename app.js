let inputAmigos = document.getElementById("amigo");
let baseDeDatosAmigos = [];
let baseDeDatosMuestra = document.getElementById("listaAmigos");
let tuAmigoSecretoEs = document.getElementById("resultado");

function agregarAmigo() {
    let nombre = inputAmigos.value.trim(); 

    // Verifica si el campo está vacío
    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Verifica si el nombre ya existe en la lista
    if (baseDeDatosAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Añade el nombre a la lista
    baseDeDatosAmigos.push(nombre);
    console.log(baseDeDatosAmigos);

    actualizarLista();
    limpiarCaaja();
}

// Limpiar la caja despues de agregar un nombre no repetido
function limpiarCaaja(){
    let valorCaja = document.getElementById("amigo");
     valorCaja.value = "";

}
// limpia la lista existente, cre un arreglo
function actualizarLista() {
    baseDeDatosMuestra.innerHTML = "";
    let elementosLista = [];
    //  Iterar sobre el arreglo baseDeDatosAmigos
    for (let i = 0; i < baseDeDatosAmigos.length; i++) {
        let amigo = baseDeDatosAmigos[i];
        
        // Crear un string con el elemento <li> para cada amigo
        elementosLista.push(`<li>${amigo}</li>`);
    }

    // Unir todos los elementos <li> en un solo string y asignarlo inner
    baseDeDatosMuestra.innerHTML = elementosLista.join("");
}

function sortearAmigo() {
    if (baseDeDatosAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let random = Math.floor(Math.random() * baseDeDatosAmigos.length);
    let amigoSecreto = baseDeDatosAmigos[random];
    tuAmigoSecretoEs.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
}