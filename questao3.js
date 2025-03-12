/*3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.

function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
a) O código imprime 1000.

b) O código imprime 200.

c) O código imprime 50.

d) O código gera um erro.*/

/* B , o switch não tem break no case "eletrônico", então ele vai passar pelo case "eletrônico" e ir para o case "vestuário" e atribuir o valor 200 a variável preco.*/