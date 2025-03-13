Instruções
Faça uma cópia deste arquivo .md para um repositório próprio
Resolva as 8 questões objetivas assinalando a alternativa correta e justificando sua resposta.
Resolva as 2 questões dissertativas escrevendo no próprio arquivo .md
Lembre-se de utilizar as estruturas de código como esta aqui com `  ou
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
Resolva as questões com uso do Visual Studio Code ou ambiente similar.
Teste seus códigos antes de trazer a resposta para cá.
Cuidado com o uso de ChatGPT (e similares), pois entregar algo só para ganhar nota não fará você aprender. Não seja dependente da máquina!
Ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove.
Questões objetivas
1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.

console.log(x);
var x = 5;
console.log(y);
let y = 10;
**a) A saída será undefined seguido de erro**
**/*resposta: Letra A. A variavel x é declarada com var, e assim seja elevada para o topo do escopo, porém não é inicializada, logo seu valor é undefined. Já a variavel y é declarada com let, e não é elevada para o topo do escopo, logo ocorre um erro na execução do código.*/**



b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.

function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
**a) Substituir if (a || b === 0) por if (a === 0 || b === 0)**
**/*Letra A. A condição do if está errada,a condição atual verifica se a variável (a) é verdadeira ou se() b) é igual a 0, e o correto é verificar se a e b são iguais a 0.*/**

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.

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

**b) O código imprime 200.**
**/* B , o switch não tem break no case "eletrônico", então ele vai passar pelo case "eletrônico" e ir para o case "vestuário" e atribuir o valor 200 a variável preco.*/**

c) O código imprime 50.

d) O código gera um erro.

4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.

let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
a) 0

b) 6

c) 18

**d) 24**
**/* A alternativa correta é a letra d 24, pois o código está multiplicando cada elemento do array por 2, depois filtra os elementos que maiores que 5 e por fim soma todos os elementos que restaram.*/**

5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.

let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

**c) ["banana", "abacaxi", "manga", "laranja"]**
**/* resposta c, pois o método splice remove os elementos do array e adiciona novos elementos no lugar dos removidos.*/**

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.
II. Em JavaScript, a herança é implementada através da palavra-chave extends.

a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.

**b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.**
**/* letra b , a segunda afirmação não justifica a primeira, pois a herança em javascript é feita através de protótipos e não da palavra chave extends.*/**

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.
II) O método apresentar() da classe Funcionario sobrepõe o método apresentar() da classe Pessoa, mas chama o método da classe pai usando super.
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

**a) I e II são verdadeiras.**
**/* letra A , a classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente ; o método apresentar da classe Funcionario sobrepõe o método apresentar da classe Pessoa, mas chama o método da classe pai usando super.*/**

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.

Asserção: O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.
Razão: Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

**b) A asserção é verdadeira e a razão é falsa.**
**/* letra b , a asserção é verdadeira Isso é alcançado por meio da sobrescrita de métodos, onde uma classe filha pode fornecer uma implementação específica de um método já definido na classe pai a razão é falsa Em JavaScript, não existe suporte nativo para sobrecarga de métodos*/**

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
A variável soma está sendo reatribuída a cada iteração do loop, fazendo com que o valor anterior seja perdido. Para corrigir, basta somar o valor anterior com o valor atual, ao invés de reatribuir o valor da variável. Além disso, a propriedade size não existe em arrays, o correto é utilizar a propriedade length.
```javaScript
function somaArray(numeros) {
    let soma = 0;//inicializa a variável soma com 0
    for (let i = 0; i < numeros.length; i++) {//   i deve ser declarado com let para que não seja acessível fora do loop
        soma += 2 * numeros[i];//soma o dobro do número atual ao valor da variável soma
    }
    return soma;//retorna a soma do dobro dos números do array
}
console.log(somaArray([1, 2, 3, 4])); // 20
```



10) Crie um exemplo prático no qual você tenha duas classes:
Uma classe Produto com atributos nome e preco, e um método calcularDesconto() que aplica um desconto fixo de 10% no preço do produto.
Uma classe Livro que herda de Produto e modifica o método calcularDesconto(), aplicando um desconto de 20% no preço dos livros.
Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe Livro.
```javaScript
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    calcularDesconto() {
        return this.preco * 0.1;
    }
}

class Livro extends Produto {
    constructor(nome, preco, autor) {
        super(nome, preco);
        this.autor = autor;
    }
    calcularDesconto() {
        return this.preco * 0.2;
    }
}

console.log(new Produto('Produto 1', 100).calcularDesconto()); // 10
console.log(new Livro('Livro 1', 100, 'Autor 1').calcularDesconto()); // 20
```
/* A herança nesse contexto funciona da seguinte forma: a classe Livro herda todos os atributos e métodos da classe Produto, e pode adicionar novos atributos e métodos, ou sobrescrever os métodos existentes. No caso calcularDesconto, a classe Livro sobrescreve o método da classe Produto, aplicando um desconto de 20% no preço dos livros, ao invés de 10% como na classe Produto.*/
