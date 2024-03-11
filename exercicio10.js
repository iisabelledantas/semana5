// Definição da classe Funcionário
class Funcionario {
    constructor(nome, idade, salarioBase) {
        this.nome = nome; // Atributo: Nome do funcionário
        this.idade = idade; // Atributo: Idade do funcionário
        this.salarioBase = salarioBase; // Atributo: Salário base do funcionário
    }

    calcularSalario() {
        // Método: Calcula o salário total do funcionário
        // Este método será sobrescrito nas subclasses
        return this.salarioBase;
    }
}

// Definição da classe Professor, que herda de Funcionario
class Professor extends Funcionario {
    constructor(nome, idade, salarioBase, disciplina, horasAulaSemana) {
        // Chama o construtor da classe pai (Funcionario)
        super(nome, idade, salarioBase);
        this.disciplina = disciplina; // Atributo: Disciplina lecionada pelo professor
        this.horasAulaSemana = horasAulaSemana; // Atributo: Horas de aula por semana do professor
    }

    calcularSalario() {
        // Método: Calcula o salário do professor
        // Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula
        const valorHoraAula = this.salarioBase / 40; // Considerando uma carga horária de 40 horas semanais
        return this.horasAulaSemana * valorHoraAula;
    }
}

// Criando dois objetos do tipo Professor com informações fictícias
const professor1 = new Professor("João", 35, 3000, "Matemática", 20);
const professor2 = new Professor("Maria", 40, 3500, "História", 15);

// Chamando o método calcularSalario() para cada objeto e mostrando o salário calculado no console
console.log("Salário do " + professor1.nome + ": R$" + professor1.calcularSalario().toFixed(2));
console.log("Salário do " + professor2.nome + ": R$" + professor2.calcularSalario().toFixed(2));