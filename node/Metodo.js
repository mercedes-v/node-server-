// Lógica de las funciones de promesa simuladas
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

// Ejecución del programa usando el método then()
crearTareaPromesa('Nueva tarea')
  .then(resultadoCrear => {
    console.log(resultadoCrear);
    return eliminarTareaPromesa(1);
  })
  .then(resultadoEliminar => {
    console.log(resultadoEliminar);
    return completarTareaPromesa(2);
  })
  .then(resultadoCompletar => {
    console.log(resultadoCompletar);

    // Aquí puedes continuar con el resto de tu lógica después de que todas las promesas se hayan resuelto.
  })
  .catch(error => {
    console.error('Ocurrió un error:', error);
  });
// Lógica de las funciones de promesa simuladas
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

// Ejecución del programa usando el método then()
crearTareaPromesa('Nueva tarea')
  .then(resultadoCrear => {
    console.log(resultadoCrear);
    return eliminarTareaPromesa(1);
  })
  .then(resultadoEliminar => {
    console.log(resultadoEliminar);
    return completarTareaPromesa(2);
  })
  .then(resultadoCompletar => {
    console.log(resultadoCompletar);

    // Aquí puedes continuar con el resto de tu lógica después de que todas las promesas se hayan resuelto.
  })
  .catch(error => {
    console.error('Ocurrió un error:', error);
  });
