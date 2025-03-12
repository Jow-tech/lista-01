/*7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.

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

a) I e II são verdadeiras.

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.*/

/* letra A , a classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente ; o método apresentar da classe Funcionario sobrepõe o método apresentar da classe Pessoa, mas chama o método da classe pai usando super.*/