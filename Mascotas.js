let dueños = {};
let Mascotas = {};

let Contador_Cedulas = 1;
let Contador_Id_Mascotas = 1;
let Contador_Id_Dueños = 1;
const verificacion_Nombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;


function Generar_Id_Dueño(estructura_id = "ID_Dueño"){
    const numero = String(Contador_Id_Dueños).padStart(3, "0");
    const Id_Dueño = `${estructura_id}_${numero}`;
    Contador_Id_Dueños++;
    return Id_Dueño;
} 

function Generar_Cedula_Dueño(estructura_cedula = "Cedula"){
    const numero = String(Contador_Cedulas).padStart(3, "0");
    const Cedula = `${estructura_cedula}_${numero}`;
    Contador_Cedulas++;
    return Cedula;
}   

function Generar_Id_Mascota(estructura_id = "ID_Mascota"){
    const numero = String(Contador_Id_Mascotas).padStart(3, "0");
    const Id_Mascota = `${estructura_id}_${numero}`;
    Contador_Id_Mascotas++;
    return Id_Mascota;
}

function Registrar_dueño(){
    let Id_Dueño = Generar_Id_Dueño();
    let cedula = Generar_Cedula_Dueño(); 
    let nombre_Dueño = prompt("Ingrese el nombre del dueño");
    if (!soloLetras.test(nombre_Dueño)) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }
    let telefono = prompt("Ingrese el número de teléfono del dueño (formato: 1234567890)");
    if (!/^\d{10}$/.test(telefono)) {
        alert("El número de teléfono debe tener 10 dígitos.");
        return;
    }
    let correo_electronico = prompt("Ingrese el correo electrónico del dueño");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo_electronico)) {
        alert("El correo electrónico no es válido.");
        return;
    }
    const dueño = {
        Id_Dueño: Id_Dueño,
        cedula: cedula,
        nombre: nombre_Dueño,
        telefono: telefono,
        correo_electronico: correo_electronico
    }
    dueños[Id_Dueño] = dueño;
}

function RegistrarMascota() {
    let Id_Mascota = Generar_Id_Mascota();
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
    if (!/^[0-9]{3}_[0-9]{3}$/.test(Dueño)) {
        alert("La cédula debe tener el formato 'Cedula_001'.");
        return;
    }

    const mascota = {
        nombre: nombre,
        Especie: Especie,
        edad: parseInt(edad),
        peso: peso,
        salud: salud,
        Dueño: Dueño
    }

    Mascotas[Id_Mascota] = mascota;
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
        let mensaje = "Mascotas encontradas:\n\n";
        arrayNombre.forEach((m, index) => {
            mensaje += `${index + 1}. ${m.Id_Mascota} ${m.nombre} (${m.Especie}) - Edad: ${m.edad}, Peso: ${m.peso}kg, estado: ${m.salud}\n`;
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

    alert(`Estado de salud actualizado para ${mascotaEncontrada.Id_Mascota} ${mascotaEncontrada.nombre}: ${mascotaEncontrada.salud}`);
}
let opcion;

do {
    opcion = parseInt(prompt("BIENVENIDO A MIS MASCOTAS\n1. Registrar mascota\n2. Listar mascotas\n3. Buscar por nombre\n4. Actualizar salud de mascota"));


  switch (opcion) {
    case 1:
        Registrar_dueño();
        break;

    case 2:
        RegistrarMascota();
        break;

    case 3:
        listarMascotas();
        break;

    case 4:
        actualizarSaludMascota();
        break;
    
    case 5:
            


    default:
      alert("Ingresó un número incorrecto");
      break;
  }


} while (true);