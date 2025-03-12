/*1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.

console.log(x);
var x = 5;
console.log(y);
let y = 10;
a) A saída será undefined seguido de erro

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log*/

/*resposta: Letra A. A variavel x é declarada com var, e assim seja elevada para o topo do escopo, porém não é inicializada, logo seu valor é undefined. Já a variavel y é declarada com let, e não é elevada para o topo do escopo, logo ocorre um erro na execução do código.*/