/*Crie um exemplo prático no qual você tenha duas classes:
Uma classe Produto com atributos nome e preco, e um método calcularDesconto() que aplica um desconto fixo de 10% no preço do produto.
Uma classe Livro que herda de Produto e modifica o método calcularDesconto(), aplicando um desconto de 20% no preço dos livros.
Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe Livro.*/


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
/* A herança nesse contexto funciona da seguinte forma: a classe Livro herda todos os atributos e métodos da classe Produto, e pode adicionar novos atributos e métodos, ou sobrescrever os métodos existentes. No caso calcularDesconto, a classe Livro sobrescreve o método da classe Produto, aplicando um desconto de 20% no preço dos livros, ao invés de 10% como na classe Produto.*/