// // Función para agregar texto
// function agregarTexto(event)  {
//     var texto = prompt("Ingresa el texto que deseas agregar:");
  
//     // Verifica si el usuario ingresó texto y si es distinto de null (si canceló el prompt, se devuelve null)
//     if (texto !== null && texto !== "") {
//       var espacio = document.getElementById("espacioTexto");
//       espacio.innerHTML += "<p style='position: absolute; left:" + event.clientX + "px; top:" + event.clientY + "px;'>" + texto + "</p>";
//     }
//   }



// function agregarTexto(event) {
//   var texto = prompt("Ingresa el texto que deseas agregar:");
//   var tamano = prompt("Ingresa el tamaño del texto:");

  

//   // Verifica si el usuario ingresó texto y tamaño, y si no canceló el prompt
//   if (texto !== null && texto !== "" && tamano !== null && tamano !== "") {
//       var espacio = document.getElementById("espacioTexto");
//       var nuevoElemento = document.createElement("p");
//       nuevoElemento.innerHTML = texto;
//       nuevoElemento.style.position = "absolute";
//       nuevoElemento.style.left = event.clientX + "px";
//       nuevoElemento.style.top = event.clientY + "px";
//       nuevoElemento.draggable = true;
//       nuevoElemento.style.fontSize = tamano + "px"; // Establece el tamaño del texto
//       nuevoElemento.addEventListener("dragstart", function (e) {
//           e.dataTransfer.setData("text/plain", null); // Esto es necesario para habilitar el arrastre en algunos navegadores
//           offsetX = e.clientX - nuevoElemento.getBoundingClientRect().left;
//           offsetY = e.clientY - nuevoElemento.getBoundingClientRect().top;
//       });
//       nuevoElemento.addEventListener("drag", function (e) {
//           nuevoElemento.style.left = e.clientX - offsetX + "px";
//           nuevoElemento.style.top = e.clientY - offsetY + "px";
//       });
//       espacio.appendChild(nuevoElemento);
//   }
// }

  

//   // Función para mover el botón
//   function drag(event) {
//     event.dataTransfer.setData("text", event.target.id);
//   }
  
//   document.addEventListener("dragover", function(event) {
//     event.preventDefault();
//   });
  
//   document.addEventListener("drop", function(event) {
//     event.preventDefault();
//     var data = event.dataTransfer.getData("text");
//     var draggedElement = document.getElementById(data);
//     draggedElement.style.left = event.clientX + 'px';
//     draggedElement.style.top = event.clientY + 'px';
//   });
  
//   // Evento para agregar texto cuando se hace clic en cualquier parte de la página
//   document.addEventListener("dblclick", function(event) {
//     if (event.target.tagName !== 'BUTTON') {
//       agregarTexto(event);
//     }
//   });
  
//   // Evento para cambiar el tipo de letra o eliminar texto al hacer clic sobre el texto
//   document.addEventListener("click", function(event) {
//     if (event.target.tagName === 'P') {
//   // Crear el menú desplegable para cambiar el tipo de letra
//       var tipoLetraMenu = document.createElement("select");
//       var opcionesTipoLetra = ["Arial", "Helvetica", "Times New Roman", "Courier New", "Verdana", "Georgia", "Palatino", "Garamond", "Bookman", "Comic Sans MS", "Trebuchet MS", "Arial Black", "Impact"];
      
//       for (var i = 0; i < opcionesTipoLetra.length; i++) {
//           var opcion = document.createElement("option");
//           opcion.text = opcionesTipoLetra[i];
//           tipoLetraMenu.add(opcion);
//       }
      
//       tipoLetraMenu.addEventListener("change", function() {
//           event.target.style.fontFamily = this.value;
//           this.remove(); // Elimina el menú desplegable después de seleccionar una opción
//       });
      
  

//     // Crear la opción para eliminar el texto
//     var eliminarTextoOpcion = document.createElement("button");
//     eliminarTextoOpcion.textContent = "Eliminar texto";
//     eliminarTextoOpcion.style.marginLeft = "10px"; // Espaciado para separar las dos opciones
    
//     eliminarTextoOpcion.addEventListener("click", function() {
//         event.target.remove(); // Eliminar el texto
//     });

//     // Agregar las opciones al texto seleccionado
//   event.target.appendChild(tipoLetraMenu);
//   event.target.appendChild(eliminarTextoOpcion);
//   tipoLetraMenu.focus(); // Enfocar el menú desplegable para que el usuario pueda hacer clic en una opción sin necesidad de hacer clic nuevamente en el texto

// }
// }); 

function agregarTexto(event) {
  var texto = prompt("Ingresa el texto que deseas agregar:");
  var tamano = prompt("Ingresa el tamaño del texto:");

  // Verifica si el usuario ingresó texto y tamaño, y si no canceló el prompt
  if (texto !== null && texto !== "" && tamano !== null && tamano !== "") {
    var espacio = document.getElementById("espacioTexto");
    var nuevoElemento = document.createElement("p");
    nuevoElemento.innerHTML = texto;
    nuevoElemento.style.position = "absolute";
    nuevoElemento.style.left = event.clientX + "px";
    nuevoElemento.style.top = event.clientY + "px";
    nuevoElemento.draggable = true;
    nuevoElemento.style.fontSize = tamano + "px"; // Establece el tamaño del texto
    nuevoElemento.style.zIndex = "9999"; // Asegura que el texto quede por encima de cualquier imagen

    nuevoElemento.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("text/plain", null); // Esto es necesario para habilitar el arrastre en algunos navegadores
      offsetX = e.clientX - nuevoElemento.getBoundingClientRect().left;
      offsetY = e.clientY - nuevoElemento.getBoundingClientRect().top;
    });

    nuevoElemento.addEventListener("drag", function (e) {
      nuevoElemento.style.left = e.clientX - offsetX + "px";
      nuevoElemento.style.top = e.clientY - offsetY + "px";
    });

    espacio.appendChild(nuevoElemento);
  }
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

document.addEventListener("dblclick", function(event) {
  if (event.target.tagName !== 'BUTTON') {
    agregarTexto(event);
  }
});

document.addEventListener("click", function(event) {
  if (event.target.tagName === 'P') {
    // Crear el menú desplegable para cambiar el tipo de letra
    var tipoLetraMenu = document.createElement("select");
    var opcionesTipoLetra = ["Arial", "Helvetica", "Times New Roman", "Courier New", "Verdana", "Georgia", "Palatino", "Garamond", "Bookman", "Comic Sans MS", "Trebuchet MS", "Arial Black", "Impact"];

    for (var i = 0; i < opcionesTipoLetra.length; i++) {
      var opcion = document.createElement("option");
      opcion.text = opcionesTipoLetra[i];
      tipoLetraMenu.add(opcion);
    }

    tipoLetraMenu.addEventListener("change", function() {
      event.target.style.fontFamily = this.value;
      this.remove(); // Elimina el menú desplegable después de seleccionar una opción
    });

    // Crear el menú desplegable para cambiar el color del texto
    var colorTextoMenu = document.createElement("select");
    var opcionesColorTexto = ["black", "red", "blue", "green", "yellow", "orange", "purple"];

    for (var j = 0; j < opcionesColorTexto.length; j++) {
      var colorOption = document.createElement("option");
      colorOption.text = opcionesColorTexto[j];
      colorOption.style.color = opcionesColorTexto[j];
      colorTextoMenu.add(colorOption);
    }

    colorTextoMenu.addEventListener("change", function() {
      event.target.style.color = this.value;
      this.remove(); // Elimina el menú desplegable después de seleccionar una opción
    });

    // Crear la opción para eliminar el texto
    var eliminarTextoOpcion = document.createElement("button");
    eliminarTextoOpcion.textContent = "Eliminar texto";
    eliminarTextoOpcion.style.marginLeft = "10px"; // Espaciado para separar las dos opciones

    eliminarTextoOpcion.addEventListener("click", function() {
      event.target.remove(); // Eliminar el texto
    });

    // Agregar las opciones al texto seleccionado
    event.target.appendChild(tipoLetraMenu);
    event.target.appendChild(colorTextoMenu);
    event.target.appendChild(eliminarTextoOpcion);
    tipoLetraMenu.focus(); // Enfocar el menú desplegable para que el usuario pueda hacer clic en una opción sin necesidad de hacer clic nuevamente en el texto
  }
});
 