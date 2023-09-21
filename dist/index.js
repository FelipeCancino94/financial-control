/*"use strict";
var mensaje = 'hola mundo';
console.log(mensaje);
//# sourceMappingURL=index.js.map*/

// Variables y Selectores
const gastoMensual = document.querySelector('#presupuesto');
const gastoListado = document.querySelector('#nombre-gasto');
const selectorMes = document.querySelector('#selectMes');



function eventListener(){
    selectorMes.addEventListener ('change', preguntarPresupuesto);   
}
eventListener();


class Presupuesto {
    constructor (presupuesto){
        this.total = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gasto = [];
    }
}
class UI {
    insertarPresupuesto(cantidad){
        const {total, restante } = cantidad;
        document.querySelector('#total').textContent = total;
        document.querySelector('#restante').textContent = restante;
    }
    imprimirAlerta(mensaje, tipo) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        // Si es de tipo error agrega una clase
        if(tipo === 'error') {
             divMensaje.classList.add('alert-danger');
        } else {
             divMensaje.classList.add('alert-success');
        }
        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        document.querySelector('.summary').insertBefore(divMensaje, formulario);

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
             document.querySelector('.summary .alert').remove();
        }, 3000);
   }

}
const ui = new UI();
let presupuesto;

function preguntarPresupuesto(){
    const presupuestoIngresado = prompt('Cual es el presupuesto?');
    
    
    if (presupuesto === '' || presupuesto === null || presupuesto <= 0){
        window.location.reload();
    }

    presupuesto = new Presupuesto (presupuestoIngresado);
    //console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
    e.preventDefault();

     // Leer del formulario de Gastos
     const nombre = document.querySelector('#gasto').value;
     const cantidad = Number( document.querySelector('#cantidad').value);

     // Comprobar que los campos no esten vacios
     if(nombre === '' || cantidad === '') {
          // 2 parametros: mensaje y tipo
          ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
     } else if(cantidad <= 0 || isNaN(cantidad )) {

          // si hay una cantidad negativa o letras...
          ui.imprimirAlerta('Cantidad no válida', 'error')
     } else {
            const gasto = { nombre, cantidad, id: Date.now() };

            // Añadir nuevo gasto 
            presupuesto.nuevoGasto(gasto)

            // Insertar en el HTML
            ui.imprimirAlerta('Correcto', 'correcto');

            // Pasa los gastos para que se impriman...
            const { gastos} = presupuesto;
            ui.agregarGastoListado(gastos);

            // Cambiar la clase que nos avisa si se va terminando
            ui.comprobarPresupuesto(presupuesto);

            // Actualiza el presupuesto restante
            const { restante } = presupuesto;

            // Actualizar cuanto nos queda
            ui.actualizarRestante(restante)

            // Reiniciar el form
            formulario.reset();
     }
}