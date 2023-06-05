const readline = require('readline');

//interfaz de lectura/escritura para la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Lista de tareas
const tasks = [];

// Función para añadir una tarea
function addTask() {
  rl.question('Indicador de la tarea: ', (indicator) => {
    rl.question('Descripción de la tarea: ', (description) => {
      const task = {
        indicator,
        description,
        completed: false
      };
      tasks.push(task);
      console.log('Tarea añadida con éxito.');
      printTasks();
      askForAction();
    });
  });
}

// Función para eliminar una tarea
function deleteTask() {
  rl.question('Índice de la tarea a eliminar: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      console.log('Tarea eliminada con éxito.');
    } else {
      console.log('Índice de tarea inválido.');
    }
    printTasks();
    askForAction();
  });
}

// Función para completar una tarea
function completeTask() {
  rl.question('Índice de la tarea a completar: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      console.log('Tarea completada con éxito.');
    } else {
      console.log('Índice de tarea inválido.');
    }
    printTasks();
    askForAction();
  });
}

// Función para mostrar las tareas
function printTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`[${index}] ${task.indicator} - ${task.description} (${task.completed ? 'Completada' : 'Pendiente'})`);
  });
}

// Función para solicitar la acción al usuario
function askForAction() {
  rl.question('¿Qué acción deseas realizar? (Añadir/Eliminar/Completar/Salir): ', (action) => {
    if (action.toLowerCase() === 'añadir') {
      addTask();
    } else if (action.toLowerCase() === 'eliminar') {
      deleteTask();
    } else if (action.toLowerCase() === 'completar') {
      completeTask();
    } else if (action.toLowerCase() === 'salir') {
      rl.close();
    } else {
      console.log('Acción inválida.');
      askForAction();
    }
  });
}

// Inicio del programa
console.log
