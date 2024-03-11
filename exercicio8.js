class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Sou um animal chamado ${this.nome} e tenho ${this.idade} anos.`);
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    miar() {
        console.log("Miau!");
    }
}

// Criando os animais
const cachorro = new Animal("Cachorro", 5);
const gato = new Gato("Gato", 3, "Preto");

// Chamando os métodos
cachorro.descrever();
gato.descrever();
gato.miar();