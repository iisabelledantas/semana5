class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`O animal ${this.nome} tem ${this.idade} anos.`);
    }
}

// Criando objetos da classe Animal
const cachorro = new Animal("cachorro", 5);
const gato = new Animal("gato", 3);

// Chamando o método descrever() para cada animal
cachorro.descrever();
gato.descrever();