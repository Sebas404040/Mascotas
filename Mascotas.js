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

    const mascota = {
        nombre: nombre,
        Especie: Especie,
        edad: parseInt(edad),
        peso: peso
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
        mensaje += `${valor + 1}. ${clave.nombre} (${clave.Especie}) - Edad: ${clave.edad}, Peso: ${clave.peso}kg\n`;
    });

    alert(mensaje);
}

Mascotas = []
let opcion;

do {
  opcion = parseInt(prompt("BIENVENIDO A MIS MASCOTAS\n1. Registrar mascota\n2. Listar mascotas"));

  switch (opcion) {
    case 1:
        RegistrarMascota();
        break;

    case 2:
        listarMascotas();
        break;

    default:
      alert("Ingresó un número incorrecto");
      break;
  }


} while (true);