// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let nombre = document.getElementById("amigo").value;

















function agregarAmigo() {
    let inputNombre = document.getElementById("amigo"); // Obtener el valor correcto
    let nombre = inputNombre.value.trim();
    if (nombre) { // Verificar que no sea vacío
        amigos.push(nombre);
        actualizarLista();
        inputNombre.value = ""; // Limpiar el campo
        console.log(amigos); // Ver la lista actualizada
    } else {
        alert("Ingrese un nombre valido");
    }
}

function actualizarLista(){
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let amigo of amigos) {
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigo; // Asignar el nombre del amigo al <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}

// function sortearAmigo(){
//     if(amigos){
//         let indice = Math.floor(Math.random());
//         amigoSeleccionado = amigos[indice]
//         document.getElementById.innerHTML = amigoSeleccionado;
//     }else{
//         alert("No hay nombres en la lista");
//     }
// }

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) { // Validar que haya nombres en la lista
        resultado.innerHTML = "<li>No hay amigos en la lista para sortear.</li>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener el amigo sorteado

    resultado.innerHTML = `<li>🎉 ${amigoSorteado} ha sido sorteado 🎉</li>`; // Mostrar el resultado
}