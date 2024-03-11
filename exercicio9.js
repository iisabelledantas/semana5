class SomadorDeNotas {
    constructor() {
        this.total = 0;
    }

    adicionarNota(nota) {
        this.total += nota;
    }

    verTotal() {
        console.log("Total das notas:", this.total);
    }
}

// Criando um objeto da classe SomadorDeNotas
const somador = new SomadorDeNotas();

// Adicionando algumas notas ao somador
somador.adicionarNota(10);
somador.adicionarNota(8);
somador.adicionarNota(7);

// Chamando o método para ver o total
somador.verTotal();