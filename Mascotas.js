

let Mascotas = [];

function RegistrarMascota() {
    let nombre = prompt("Ingrese el nombre de la mascota:");
    let decision_Especie = prompt("1. Perro\n2. Gato\n3. Conejo\n4. Hamster\n5. Pez");
    let Especie = "";
    switch (decision_Especie) {
        case "1":
            Especie = "Perro";
            alert("Has seleccionado Perro");
            break;
        case "2":
            Especie = "Gato";
            alert("Has seleccionado Gato");
            break;
        case "3":
            Especie = "Conejo";
            alert("Has seleccionado Conejo");
            break;
        case "4":
            Especie = "Hamster";
            alert("Has seleccionado Hamster");
            break;
        case "5":
            Especie = "Pez";
            alert("Has seleccionado Pez");
            break;
        default:
            alert("Opción no válida. Por favor, elige una especie válida.");
            return; 
    }

    let edad = prompt("Ingrese la edad de la mascota (en años):");
    let peso = prompt("Ingrese el peso de la mascota (en kg):");
    peso = parseFloat(peso);
    if (peso < 0 || peso >= 500 || isNaN(peso)) {
        alert("ERROR: El peso debe ser un número positivo y menor a 500 kg.");
        return;
    }

    let desicion_salud = prompt("1. Saludable\n2. Enfermo\n3. En tratamiento");
    let salud = "";
    switch (desicion_salud) {
        case "1":
            salud = "Saludable";
            alert("Has seleccionado Saludable");
            break;
        case "2":
            salud = "Enfermo";
            alert("Has seleccionado Enfermo");
            break;
        case "3":
            salud = "En tratamiento";
            alert("Has seleccionado En tratamiento");
            break;
        default:
            alert("Opción no válida. Por favor, elige un estado de salud válido.");
            return; 
    }

    const mascota = {
        nombre: nombre,
        Especie: Especie,
        edad: parseInt(edad),
        peso: peso,
        salud: salud
    }

    Mascotas.push(mascota);

    alert(
        `Mascota registrada:\nNombre: ${nombre}\nEspecie: ${Especie}\nEdad: ${edad} años\nPeso: ${peso} kg`
    );
}

function listarMascotas () {
    if (Mascotas.length ===  0) {
        alert("No hay mascotas registradas")
        return;
    }

    let mensaje = "Lista de Mascotas Registradas:\n\n";
    Mascotas.forEach((clave, valor) => {
        mensaje += `${valor + 1}. ${clave.nombre} (${clave.Especie}) - Edad: ${clave.edad}, Peso: ${clave.peso}kg, estado: ${clave.salud}\n`;
    });

    alert(mensaje);
}
function buscarMascota () {
    var nombreBuscado = prompt("Ingrese el nombre a buscar")
    const arrayNombre = Mascotas.filter(p => p.nombre === nombreBuscado);

    if (arrayNombre.length === 0) {
        alert("No se encontró ninguna mascota con ese nombre.");
    } else {
        let mensaje = "🐾 Mascotas encontradas:\n\n";
        arrayNombre.forEach((m, index) => {
            mensaje += `${index + 1}. ${m.nombre} (${m.Especie}) - Edad: ${m.edad}, Peso: ${m.peso}kg, estado: ${m.salud}\n`;
        });
        alert(mensaje);
    }
}
function actualizarSaludMascota() {
    let nombreMascota = prompt("Ingrese el nombre de la mascota a actualizar:");
    let mascotaEncontrada = Mascotas.find(m => m.nombre === nombreMascota);

    if (!mascotaEncontrada) {
        alert("No se encontró ninguna mascota con ese nombre.");
        return;
    }

    let nuevaSalud = prompt("Ingrese el nuevo estado de salud:\n1. Saludable\n2. Enfermo\n3. En tratamiento");
    switch (nuevaSalud) {
        case "1":
            mascotaEncontrada.salud = "Saludable";
            break;
        case "2":
            mascotaEncontrada.salud = "Enfermo";
            break;
        case "3":
            mascotaEncontrada.salud = "En tratamiento";
            break;
        default:
            alert("Opción no válida. Por favor, elige un estado de salud válido.");
            return; 
    }

    alert(`Estado de salud actualizado para ${mascotaEncontrada.nombre}: ${mascotaEncontrada.salud}`);
}
let opcion;

do {
    opcion = parseInt(prompt("BIENVENIDO A MIS MASCOTAS\n1. Registrar mascota\n2. Listar mascotas\n3. Buscar por nombre\n4. Actualizar salud de mascota"));


  switch (opcion) {
    case 1:
        RegistrarMascota();
        break;

    case 2:
        listarMascotas();
        break;

    case 3:
        buscarMascota();
        break;

    case 4:
        actualizarSaludMascota();
        break;        


    default:
      alert("Ingresó un número incorrecto");
      break;
  }


} while (true);