// import add from 'date-fns/add'
// import 'moment/locale/pt-br';
import { format, add, differenceInDays, addMonths } from 'date-fns';

var moment = require('moment');

let dataInicio: Date
let dataTermino: Date

// Data de inicio
dataInicio = new Date("01/01/2021")
console.log(dataInicio)

const dataNascimento = moment("13/06/1957", "DD/MM/YYYY", "pt", true);
console.log(dataNascimento)

// Ultimo dias do mes
dataTermino = moment(dataInicio).endOf('month')
const ultimodiaNascimento = moment(dataNascimento).endOf('month')
console.log(dataTermino);
console.log(ultimodiaNascimento);

let dataUmMesDepois = dataInicio.setMonth(12)
console.log(dataUmMesDepois)

let dataCincoAnosDepois = dataInicio.setMonth(60)
console.log(dataCincoAnosDepois)

// Adiciona 1 ano na data informada
const result = add(new Date("01/01/2021"), {
    months: 12,
    days: -1,
  
})
console.log(result)

// Teste decremento de 12 mese a uma data
const result2 = add(new Date("01/01/2021"), {
    months: -12,
  
})
console.log(result2)

// Data de Aniversário
let niver = new Date("06/13/2021")
console.log(format(niver, 'dd/MM/yyyy'))

// Acrescentar 120 meses a uma data
let meses = 120
let diaAnterior = -1

let result3 = add(niver, {
    months: meses,
    days: diaAnterior,
  
})
console.log(result3)
console.log(format(result3, 'dd/MM/yyyy'))

// Diferença entre duas datas
let dateLeft =  new Date("06/01/2021")
let dateRight = new Date("06/30/2021")
let result4 = differenceInDays(dateRight, dateLeft) + 1
console.log(result4)

// Adição de 12 meses a uma data
const result5 = addMonths(new Date("01/01/2021"), 12)
console.log(format(result5, 'dd/MM/yyyy'))