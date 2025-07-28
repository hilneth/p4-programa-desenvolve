function sum(a, b) {
    return a + b;       
}
const multiply = (a, b) => a * b;

function calculateAverage(...numbers) {
    if (numbers.lengh === 0) return 0;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

const fruits = ["maçã", "banana", "laranja"];
const moreFruits = ["uva", "kiwi"];
const allFruits = [...fruits, ...moreFruits];

const person = {name: "Maria", age: 25 };
const employee = {...person, id: 1001, department: "Engenharia"};

console.log("soma:", sum(5,3));
console.log("Multiplicação:", multiply(5, 3));
console.log("Média de 3 números:", calculateAverage(4, 6, 8));
console.log("Média de 5 números:", calculateAverage(4, 6, 8, 10, 12));
console.log("Frutas combinadas:", allFruits);
console.log("Objeto funcionário:", employee);

//Desafio A:
// Minha ideia aqui foi reaproveitar o objeto original usando o spread operator (...person)
// e só adicionar a propriedade isAdult com base na idade da pessoa.

function addIsAdult(person) {
    return {
        ...person,
        isAdult: person.age >=18
    };
}

const pessoa1 = { name: "João", age:20};
const pessoa2 = { name: "Ana", age: 15};
console.log("Pessoa 1 com isAdult:", addIsAdult(pessoa1));
console.log("Pessoa 2 com isAdult:", addIsAdult(pessoa2));

//Desafio B:
// Como a função pode receber vários arrays, usei rest (...arrays) como parâmetro.
// Para juntar todos em um só, usei reduce com spread para ir concatenando.

function combineArrays(...arrays) {
    return arrays.reduce((acc, curr) => [...acc, ...curr], []);

}

const array1 = [1, 2];
const array2 = [3 ,4];
const array3 = [5, 6];
console.log("Arrays combinados:"), combineArrays(array1, array2, array3);
