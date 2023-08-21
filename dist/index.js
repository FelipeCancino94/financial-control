/*"use strict";
var mensaje = 'hola mundo';
console.log(mensaje);
//# sourceMappingURL=index.js.map*/

// Variables y Selectores
const formulario = document.querySelector('#presupuesto');
const gastoListado = document.querySelector('#gasto');
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
}
const ui = new UI();
let presupuesto;

function preguntarPresupuesto(){
    const presupuestoIngresado = prompt('Cual es el presupuesto?');
    
    
    if (presupuesto === '' || presupuesto === null || presupuesto <= 0){
        alert ('Ingrese una cantidad valida');
    }

    presupuesto = new Presupuesto (presupuestoIngresado);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}