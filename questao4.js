/*4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.

let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
a) 0

b) 6

c) 18

d) 24*/

/* A alternativa correta é a letra d 24, pois o código está multiplicando cada elemento do array por 2, depois filtra os elementos que maiores que 5 e por fim soma todos os elementos que restaram.*/