// Función para agregar texto
function agregarTexto(event) {
    var texto = prompt("Ingresa el texto que deseas agregar:");
  
    // Verifica si el usuario ingresó texto y si es distinto de null (si canceló el prompt, se devuelve null)
    if (texto !== null && texto !== "") {
      var espacio = document.getElementById("espacioTexto");
      espacio.innerHTML += "<p style='position: absolute; left:" + event.clientX + "px; top:" + event.clientY + "px;'>" + texto + "</p>"; // Agrega el texto al elemento en la página en la posición del clic
    }
  }
  
  // Función para mover el botón
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    draggedElement.style.left = event.clientX + 'px';
    draggedElement.style.top = event.clientY + 'px';
  });
  
  // Evento para agregar texto cuando se hace clic en cualquier parte de la página
  document.addEventListener("click", function(event) {
    if (event.target.tagName !== 'BUTTON') {
      agregarTexto(event);
    }
  });
  
  // Evento para eliminar texto al seleccionarlo con el mouse
  document.addEventListener("click", function(event) {
    if (event.target.tagName === 'P') {
      event.target.remove(); // Elimina el texto al hacer clic en él
    }
  });