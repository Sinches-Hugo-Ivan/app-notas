const moduloTareas = require('./tareas/funcionesDeTareas');
const process = require('process');

const comando = process.argv[2];


switch (comando) {
    case 'agregar':
        let titulo = process.argv[3];
        if(!titulo){
            console.log('Debes escribir un título');
            break
        }
        let estado = process.argv[4];
        moduloTareas.agregarTarea(titulo,estado)
        break;
        case undefined :
            console.log('Atención-Tienes que pasar una acción');
            break
    case 'listar':
        moduloTareas.listarTareas()
        break
    case 'filtrar':
        moduloTareas.filtrarTareas(process.argv[3])
        break
    case 'deshacer' :
        moduloTareas.deshacer()
        break
    default:
        console.log('No entiendo que quieres hacer');
        break;
}




