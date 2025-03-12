/*10)O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
}
*/

//O erro está na linha 5, onde a variável soma está sendo reatribuída a cada iteração do loop, fazendo com que o valor anterior seja perdido. Para corrigir, basta somar o valor anterior com o valor atual, ao invés de reatribuir o valor da variável. Além disso, a propriedade size não existe em arrays, o correto é utilizar a propriedade length. O código corrigido fica assim:
function somaArray(numeros) {
    let soma = 0;//inicializa a variável soma com 0
    for (let i = 0; i < numeros.length; i++) {//   i deve ser declarado com let para que não seja acessível fora do loop
        soma += 2 * numeros[i];//soma o dobro do número atual ao valor da variável soma
    }
    return soma;//retorna a soma do dobro dos números do array
}
console.log(somaArray([1, 2, 3, 4])); // 20