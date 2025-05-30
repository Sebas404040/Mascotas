
![Logo](https://sdmntprwestus.oaiusercontent.com/files/00000000-0870-6230-812d-4ed6ebfbe1aa/raw?se=2025-05-30T04%3A57%3A48Z&sp=r&sv=2024-08-04&sr=b&scid=8a316360-1f65-5ba1-a1fd-e4a427caab10&skoid=7399a3a4-0259-4d43-bcd6-a56ceeb4c28b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-30T00%3A21%3A57Z&ske=2025-05-31T00%3A21%3A57Z&sks=b&skv=2024-08-04&sig=cK8WVChgZ8QcYOCAL6KC2GhrmI40/HDXmpPjT5kiug0%3D)

# 🐾 Mis Mascotas - Registro y Gestión de Mascotas y Dueños

Bienvenido a **Mis Mascotas**, una aplicación sencilla basada en JavaScript puro que permite registrar, gestionar y consultar información sobre dueños y sus mascotas. Esta herramienta es ideal para veterinarias, refugios o cualquier persona interesada en llevar un control organizado de sus animales.

## 🚀 Características

- Registro de dueños con validación de datos (nombre, teléfono, correo).
- Registro de mascotas asociadas a un dueño.
- Listado general de mascotas.
- Búsqueda de mascotas por nombre.
- Actualización del estado de salud de una mascota.
- Eliminación de mascotas.
- Listado de mascotas por ID de dueño.

## 🛠️ Tecnologías

- 📜 JavaScript (Vanilla JS)
- 🖥️ HTML básico (puede integrarse fácilmente)
- 🚫 Sin frameworks ni librerías externas

## 📦 Estructura del Proyecto

<pre><code>📁 mis-mascotas/
 ├── 📄 index.html # Interfaz HTML para ejecutar la app 
 ├── 📄 script.js # Lógica de registro y gestión (JavaScript) 
 └── 📄 README.md # Documentación del proyecto </code></pre>

 Cuando eliges una opción, el sistema te guiará paso a paso por medio de ventanas prompt.

## Aplicacion de asincronia

Debido al uso exclusivo de solo entrada y salida de informacion mediante prompt y alert se aplicó "Async/wait" para manejar los tiempos o simular la obtencion de datos si se le implementa alguna API o bases de datos. La sintaxis en el proyecto fue la siguiente:
<pre><code>await new Promise(resolve => setTimeout(resolve, 1500));
await delay(500ms)</code></pre>

Sin embargo se tuvieron que agregar las siguientes lineas de codigo para el correcto funcionamiento: 

Se agrego al inicio del archivo JS:
<pre><code>function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}</code></pre>

y agregar "await" a las funciones puestas en el menu:
<pre><code>async function menuPrincipal() {
  let opcion;
  do {
      opcion = parseInt(prompt("BIENVENIDO A MIS MASCOTAS\n1. Registrar Dueño\n2. Registrar mascota\n3. Listar mascotas\n4. Buscar mascota\n5. Actualizar estado de salud de una mascota\n6. Eliminar mascota\n7. Listar mascotas por dueño\n8. Salir"));

      switch (opcion) {
          case 1:
              await registrarDueño();
              break;
          case 2:
              await RegistrarMascota();
              break;
          case 3:
              await listarMascotas();
              break;
          case 4:
              await buscarMascota();
              break;
          case 5:
              await actualizarSaludMascota();
              break;
          case 6:
              await eliminar_mascota();
              break;
          case 7:
              await listarMascotasDueño();
              break;
          case 8:
              alert("Gracias por usar mi programa, hasta luego!, fuerza G");
              break;
          default:
              alert("Ingresó un número incorrecto");
              break;
      }

  } while (opcion !== 8);
}</code></pre>



## 📋 Validaciones Incluidas

Nombres solo permiten letras y espacios.

Teléfonos deben tener 10 dígitos.

Correos electrónicos se validan con expresión regular.

Las mascotas no se pueden registrar sin dueño.

Edad máxima para mascotas: 50 años.

Peso máximo: 500 kg.

## 🧑‍💻 Autor
Joan Sebastian Gomez Serrano - @Sebas404040