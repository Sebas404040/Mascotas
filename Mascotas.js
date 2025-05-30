function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let contadorIdDueños = 1;
let contadorCedulas = 1;
let contadorIdMascotas = 1;

const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const dueños = {};
const Mascotas = {};

function generarIdDueño(prefijo = "") {
    const numero = String(contadorIdDueños).padStart(3, "0");
    const idDueño = `${prefijo}_${numero}`;
    contadorIdDueños++;
    return idDueño;
}

function generarCedulaDueño(prefijo = "") {
    const numero = String(contadorCedulas).padStart(3, "0");
    const cedula = `${prefijo}${numero}`;
    contadorCedulas++;
    return cedula;
}

function generarIdMascota(prefijo = "ID_Mascota") {
    const numero = String(contadorIdMascotas).padStart(3, "0");
    const idMascota = `${prefijo}_${numero}`;
    contadorIdMascotas++;
    return idMascota;
}

async function registrarDueño() {
    const idDueño = generarIdDueño();
    const cedula = generarCedulaDueño();

    let nombreDueño = prompt("Ingrese el nombre del dueño");
    if (nombreDueño === null || !soloLetras.test(nombreDueño.trim())) {
        alert("El nombre solo puede contener letras y espacios.");
        return null;
    }

    let telefono = prompt("Ingrese el número de teléfono del dueño (formato: 1234567890)");
    if (telefono === null || !/^\d{10}$/.test(telefono)) {
        alert("El número de teléfono debe tener 10 dígitos.");
        return null;
    }

    let correoElectronico = prompt("Ingrese el correo electrónico del dueño");
    if (correoElectronico === null || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoElectronico)) {
        alert("El correo electrónico no es válido.");
        return null;
    }

    const dueño = {
        idDueño,
        cedula,
        nombre: nombreDueño.trim(),
        telefono,
        correoElectronico
    };

    await new Promise(resolve => setTimeout(resolve, 1500));
    dueños[idDueño] = dueño;

    prompt(`Cédula: ${cedula} \nID: ${idDueño}`);
    alert("Dueño registrado con éxito.");

    await delay(1500);
}

function RegistrarMascota() {

    const verificacion_Nombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (Object.keys(dueños).length === 0) {
        alert("No hay dueños registrados. Por favor, registre un dueño primero.");
        return;
    }
    let dueñoSeleccionado = prompt("Ingrese el ID del dueño de la mascota (ejemplo: _001):");
    if (!dueños.hasOwnProperty(dueñoSeleccionado)) {
        alert("Dueño no encontrado. Por favor, registre un dueño primero.");
        return;
    }
    let Id_Mascota = generarIdMascota();
    let nombre = prompt("Ingrese el nombre de la mascota:");
    if (!verificacion_Nombre.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }
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
    if (isNaN(edad) || edad < 0 || edad > 50) {
        alert("ERROR: La edad debe ser un número entre 0 y 50 años.");
        return;
    }
    let peso = prompt("Ingrese el peso de la mascota (en kg):");
    if (peso === null || peso.trim() === "") {
        alert("ERROR: El peso no puede estar vacío.");
        return;
    }
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
    let Dueño = prompt("Ingrese la cedula del dueño de la mascota:");
    if (!/^\d{3}$/.test(Dueño)) {
    alert("La cédula debe tener el formato '001'.");
    return;
}

    const mascota = {
        nombre: nombre,
        Id_Mascota: Id_Mascota,
        Especie: Especie,
        edad: parseInt(edad),
        peso: peso,
        salud: salud,
    }

    Mascotas[Id_Mascota] = { ...mascota, idDueño: dueñoSeleccionado };


}

function listarMascotas() {
    const lista = Object.values(Mascotas);

    if (lista.length === 0) {
        alert("No hay mascotas registradas");
        return;
    }

    let mensaje = "Lista de Mascotas Registradas:\n\n";
    lista.forEach((mascota, index) => {
        mensaje += `${index + 1}. ${mascota.nombre} (${mascota.Especie}) - Edad: ${mascota.edad}, Peso: ${mascota.peso}kg, Estado: ${mascota.salud}\n`;
    });

    alert(mensaje);
}


function buscarMascota() {
    var nombreBuscado = prompt("Ingrese el nombre a buscar");
    if (!nombreBuscado || !soloLetras.test(nombreBuscado.trim())) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }

    const mascotasArray = Object.values(Mascotas);
    const resultados = mascotasArray.filter(m => m.nombre === nombreBuscado.trim());

    if (resultados.length === 0) {
        alert("No se encontró ninguna mascota con ese nombre.");
    } else {
        let mensaje = "Mascotas encontradas:\n\n";
        resultados.forEach((m, index) => {
            mensaje += `${index + 1}. ${m.Id_Mascota} ${m.nombre} (${m.Especie}) - Edad: ${m.edad}, Peso: ${m.peso}kg, Estado: ${m.salud}\n`;
        });
        alert(mensaje);
    }
}

function actualizarSaludMascota() {
    let nombreMascota = prompt("Ingrese el nombre de la mascota a actualizar:");
    if (!nombreMascota || !soloLetras.test(nombreMascota.trim())) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }

    const mascotasArray = Object.values(Mascotas);
    let mascota = mascotasArray.find(m => m.nombre === nombreMascota.trim());

    if (!mascota) {
        alert("No se encontró ninguna mascota con ese nombre.");
        return;
    }

    let nuevaSalud = prompt("Ingrese el nuevo estado de salud:\n1. Saludable\n2. Enfermo\n3. En tratamiento");
    switch (nuevaSalud) {
        case "1":
            mascota.salud = "Saludable";
            break;
        case "2":
            mascota.salud = "Enfermo";
            break;
        case "3":
            mascota.salud = "En tratamiento";
            break;
        default:
            alert("Opción no válida. Por favor, elige un estado de salud válido.");
            return;
    }

    alert(`Estado de salud actualizado para ${mascota.Id_Mascota} ${mascota.nombre}: ${mascota.salud}`);
}

let opcion;

function eliminar_mascota() {
    let nombreMascota = prompt("Ingrese el nombre de la mascota a eliminar:");
    if (!nombreMascota || !soloLetras.test(nombreMascota.trim())) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }

    let mascotaEncontrada = null;
    let claveAEliminar = null;

    for (const clave in Mascotas) {
        if (Mascotas[clave].nombre === nombreMascota.trim()) {
            mascotaEncontrada = Mascotas[clave];
            claveAEliminar = clave;
            break;
        }
    }

    if (!claveAEliminar) {
        alert("No se encontró ninguna mascota con ese nombre.");
        return;
    }

    const confirmar = confirm(`¿Está seguro que desea eliminar a ${mascotaEncontrada.nombre}?`);
    if (confirmar) {
        delete Mascotas[claveAEliminar];
        alert(`Mascota ${mascotaEncontrada.nombre} eliminada correctamente.`);
    }
}

function listarMascotasDueño() {
    let idDueño = prompt("Ingrese el ID del dueño (ejemplo: _001):");

    const mascotasArray = Object.values(Mascotas);
    const mascotasDelDueño = mascotasArray.filter(m => m.idDueño === idDueño);

    if (mascotasDelDueño.length === 0) {
        alert("Este dueño no tiene mascotas registradas.");
        return;
    }

    let mensaje = `Mascotas del dueño ${idDueño}:\n\n`;
    mascotasDelDueño.forEach((m, index) => {
        mensaje += `${index + 1}. ${m.nombre} (${m.Especie}) - Edad: ${m.edad}, Peso: ${m.peso}kg, Estado: ${m.salud}\n`;
    });

    alert(mensaje);
}



async function menuPrincipal() {
  let opcion;
  do {
      opcion = parseInt(prompt("BIENVENIDO A MIS MASCOTAS\n1. Registrar Dueño\n2. Registrar mascota\n3. Listar mascotas\n4. Buscar mascota\n5. Actualizar estado de salud de una mascota\n6. Eliminar mascota\n7. Listar mascotas por dueño\n8. Salir"));

      switch (opcion) {
          case 1:
              await registrarDueño();
              break;
          case 2:
              RegistrarMascota();
              break;
          case 3:
              listarMascotas();
              break;
          case 4:
              buscarMascota();
              break;
          case 5:
              actualizarSaludMascota();
              break;
          case 6:
              eliminar_mascota();
              break;
          case 7:
              listarMascotasDueño();
              break;
          case 8:
              alert("Gracias por usar mi programa, hasta luego!, fuerza G");
              break;
          default:
              alert("Ingresó un número incorrecto");
              break;
      }

  } while (opcion !== 8);
}

menuPrincipal();
