
// import add from 'date-fns/add'
// import 'moment/locale/pt-br';
import { getDate, format, add, parse, addDays, isValid, differenceInDays, addMonths, lastDayOfMonth } from 'date-fns';
import express, { type Request, type Response } from 'express';

let dataInicio: Date;
// let dataTermino: Date;

// Cria uma data de inicio
dataInicio = new Date('01/01/2021');
console.log('Exemplo 01 - Cria uma data de inicio');
console.log(dataInicio);

// Adiciona 1 ano na data informada
console.log(' ');
console.log('Exemplo 02 - Adiciona 12 mese a uma data 01/01/2021');
const result = add(new Date('01/01/2021'), {
  months: 12,
  days: -1

});
console.log(result);

// Teste decremento de 12 mese a uma data
console.log(' ');
console.log('Exemplo 03 - Obtem data anterior a 01/01/2021 12 meses');
const result2 = add(new Date('01/01/2021'), {
  months: -12

});
console.log(result2);

// Formata Data de Aniversário
console.log(' ');
console.log('Exemplo 04 - Data formatada 13/06/2021');
const niver = new Date('06/13/2021');
console.log(format(niver, 'dd/MM/yyyy'));

// Acrescentar 120 meses a uma data
const meses = 120;
const diaAnterior = -1;

const result3 = add(niver, {
  months: meses,
  days: diaAnterior

});
console.log(' ');
console.log('Exemplo 05 - Soma 120 meses a data 13/06/2021');
console.log(result3);

console.log(' ');
console.log('Exemplo 06 - Exibe o resultado formatado');
console.log(format(result3, 'dd/MM/yyyy'));

// Diferença entre duas datas
console.log(' ');
console.log('Exemplo 07 - diferença entre datas 01/06/2021 e 30/06/2021');
const dateLeft = new Date('06/01/2021');
const dateRight = new Date('06/30/2021');
const result4 = differenceInDays(dateRight, dateLeft) + 1;
console.log(result4);

// Adição de 12 meses a uma data
const result5 = addMonths(new Date('01/01/2021'), 12);
console.log(' ');
console.log('Exemplo 08 - formata a data 01/01/2021');
console.log(format(result5, 'dd/MM/yyyy'));

// Obter a data do ultimo dia do mes
console.log(' ');
console.log('Exemplo 09 - Obtem ultimo dia do mês - 01/01/2021');
const today = new Date('01/01/2021');
console.log(lastDayOfMonth(today));
console.log(getDate(lastDayOfMonth(today)));

// Soma tres dias a uma data
console.log(' ');
console.log('Exemplo 10 - soma 3 dias a data de hoje');
const hoje = new Date();
const threeDaysTime = addDays(hoje, 3);
console.log(threeDaysTime);

// Verifica se uma data é válida
console.log(' ');
console.log('Exemplo 11 - Verifica se a data é válida');
const validDate = parse('29-02-2020', 'dd-MM-yyyy', new Date());
const invalidDate = parse('30-02-2020', 'dd-MM-yyyy', new Date());
console.log(validDate);
console.log(invalidDate);

console.log(' ');
console.log('Exemplo 11 - Verifica se a data é válida');
const validDate2 = parse('2020-02-29', 'yyyy-MM-dd', new Date());
const invalidDate2 = parse('2020-02-30', 'yyyy-MM-dd', new Date());
console.log(isValid(validDate2));
console.log(isValid(invalidDate2));

console.log(' ');
console.log('Exemplo 12 - Verifica se a data é válida');
const validDate3 = parse('29-02-2020', 'dd-MM-yyyy', new Date());
const invalidDate3 = parse('2020-02-30', 'dd-MM-yyyy', new Date());
console.log(isValid(validDate3));
console.log(isValid(invalidDate3));

// O mes em javascript inicia em zero por isso temos que somar mais 1
const dataString: string = '2022-04-03';
const dataLegal = new Date(dataString);
console.log(dataLegal);

// Extrair o dia da data
const diaMes = getDate(dataLegal) + 1;
console.log(diaMes);

// Retorna o dia da data 29/01/2012
console.log(' ');
console.log('Retorna o dia da data 29/01/2021');
console.log(getDate(new Date('2012-01-29')) + 1);

// Teste de rotiamento dinamico
let app: any;
app = express();
app.use(express.json());

const method = 'get';
const url = '/teste';
let callback: Function;

// Declara a função de callback que será executada quando o end point receber uma solicitação http/get
callback = function testeCallback (a: any, b: any): any {
  return {
    metodo: a,
    url: b
  };
};

// End point dinamico
app[method](url, async function (req: Request, res: Response) {
  const output = callback(method, url);

  res.json(output);
});

app.listen(3000, () => {
  console.log('🌍 Server started at http://localhost:3000} !!');
});
