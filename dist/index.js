/*"use strict";
var mensaje = 'hola mundo';
console.log(mensaje);
//# sourceMappingURL=index.js.map*/

// Variables y Selectores
const gastoMensual = document.querySelector('#presupuesto');
const gastoListado = document.querySelector('#nombre-gasto');
const selectorMes = document.querySelector('#selectMes');
const formulario = document.getElementById('agregar-gasto');



function eventListener(){
    selectorMes.addEventListener ('change', preguntarPresupuesto);   
    formulario.addEventListener('submit', agregarGasto);
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
        document.querySelector('#gastos').insertBefore(divMensaje, formulario);

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
             document.querySelector('.formulario .alert').remove();
        }, 3000);
   }

}
const ui = new UI();
let presupuesto;

function preguntarPresupuesto(){
    const presupuestoIngresado = prompt('Cual es el presupuesto?');
    
    
    if (presupuestoIngresado === '' || presupuestoIngresado === null || presupuestoIngresado <= 0){
        window.location.reload();
    }

    presupuesto = new Presupuesto (presupuestoIngresado);
    //console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {

    e.preventDefault();

     // Leer del formulario de Gastos
     const nombre = document.querySelector('#nombre-gasto').value;
     const cantidad = Number( document.querySelector('#cantidad').value);

     // Comprobar que los campos no esten vacios
     if(nombre === '' || cantidad === '') {
          ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
     } else if(cantidad <= 0 || isNaN(cantidad )) {
          ui.imprimirAlerta('Cantidad no válida', 'error')
     } else {
            const gasto = { nombre, cantidad, id: Date.now() }; 
            presupuesto.nuevoGasto(gasto)

            // Insertar en el HTML
            ui.imprimirAlerta('Correcto', 'correcto');

            // Reiniciar el form
           // formulario.reset();
     }
}