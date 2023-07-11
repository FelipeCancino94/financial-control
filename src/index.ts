// variables
// sintaxis: [tipo de variable] [nombre de variable]:[tipo de dato en la variable]
let mensaje:string = 'hola mundo';

// arreglos
// sintaxis [tipo de variable] [nombre de variable]:Array<[tipo de dato en la variable]>
let testArray:Array<string> = ['a', 'b'];

// funciones 
// sintaxis: function [nombre de la funcion](parametros:[tipo de dato del parametro]):[tipo de dato del retorno de la funcion]
function calculo(x:number, y:number):number {
  return x * y;
}

const filtro = (valor:string):boolean => {
  return valor.length >= 5;
}

const animales:Array<string> = ['perro', 'gato', 'cocodrilo', 'ornitorrinco', 'pez', 'hamster'];

const animalesFiltrados = animales.filter(filtro);


console.log(mensaje)

// tipo de dato never
// se usa para control de errores

function lanzaError(mensajeError: string):never {
  throw new Error(mensajeError);
}

// tipo de dato void
// se usa para funciones que no retornen nada

function saludar(mensaje:string):void {
  console.log(mensaje);
}

// union de tipos

let valores:number | string | object = 123;
valores = 'hola';

// Definicion de tipos

type Perro = 'perro';
const rocco:Perro = 'perro';

// interfaces 
// es definir los tipos de datos que habran en un objeto
// si una propiedad tiene ? al final de la propiedad significa que no es obligatorio el dato, por lo que puede que no llegue ese dato a la interfaz

interface futbolista {
  edad:number,
  
}

