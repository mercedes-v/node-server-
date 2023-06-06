// Funciones de promesa simuladas para crear, eliminar y completar tareas
function crearTareaPromesa(tarea) {
    return new Promise((resolve, reject) => {
      // Lógica para crear la tarea...
  
      if /* tarea creada exitosamente */) {
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
  
  // Programa principal utilizando async/await
  async function ejecutarProgramaAsyncAwait() {
    try {
      const resultadoCrear = await crearTareaPromesa('Nueva tarea');
      console.log(resultadoCrear);
  
      const resultadoEliminar = await eliminarTareaPromesa(1);
      console.log(resultadoEliminar);
  
      const resultadoCompletar = await completarTareaPromesa(2);
      console.log(resultadoCompletar);
  
      // Aquí puedes continuar con el resto de tu lógica después de que todas las promesas se hayan resuelto.
    } catch (error) {
      console.error('Ocurrió un error:', error);
    }
  }
  
  ejecutarProgramaAsyncAwait();
  
  // Programa principal utilizando el método then()
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
  