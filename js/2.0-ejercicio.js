"use strict"

"use strict"

let fecha1 = new Date('12/04/2021');
let fecha2 = new Date('08/19/2022');

let miliSegundoDias = 24 * 60 * 60 * 1000;

let miliSegundoTranscurridos = Math.abs(fecha1.getTime() -fecha2.getTime());

let dias= Math.round(miliSegundoTranscurridos/miliSegundoDias);
if (fecha2===fecha2){
    console.log('FELIZ CUMPLEAÑOS!!!')

}else{
console.log('Faltan',dias, 'dias para tu cumpleaños.');
}

