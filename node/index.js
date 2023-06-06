function crearTareaPromesa(tarea) {
  return new Promise((resolve, reject) => {
    // Lógica para crear la tarea...

    if (/* tarea creada exitosamente */) {
      resolve('Tarea creada correctamente');
    } else {
      reject('No se pudo crear la tarea');
    }
  });
}

function eliminarTareaPromesa(tareaId) {
  return new Promise((resolve, reject) => {
    // Lógica para eliminar la tarea...

    if (/* tarea eliminada exitosamente */) {
      resolve('Tarea eliminada correctamente');
    } else {
      reject('No se pudo eliminar la tarea');
    }
  });
}

function completarTareaPromesa(tareaId) {
  return new Promise((resolve, reject) => {
    // Lógica para completar la tarea...

    if (/* tarea completada exitosamente */) {
      resolve('Tarea completada correctamente');
    } else {
      reject('No se pudo completar la tarea');
    }
  });
}
