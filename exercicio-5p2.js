// Exercício 5: Desafio Integrador - E-commerce

const inventory = [
    { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
    { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
    { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
    { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
    { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
    { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
    { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] }
];

// f. Encontrar o índice do produto "Cafeteira"
function findIndexByName(productName) {
  return inventory.findIndex(x => x.name === productName);
};

console.log(findIndexByName("Cafeteira"));

// g. Encontrar o primeiro produto da categoria "Vestuário"
function findFirstByCategory(categoryName) {
  return inventory.find(x => x.category === categoryName);
};

console.log(findFirstByCategory("Vestuário"));

// h. Criar uma função de busca que retorna produtos cujo nome contenha um termo específico
function filterByName(productName) {
  return inventory.filter(x => x.name.includes(productName));
};

console.log(filterByName("Ca"));

// i. Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"
function haveAverageRating(index) {
  if (inventory[index].averageRating) {
    return true;
  }
  return false;
};

function calEachAverageRating() {
  for (let i = 0; i < inventory.length; i++) {
    if (haveAverageRating(i) === true){
      continue;
    }
    let sum = 0;
    inventory[i].reviews.forEach(x => console.log(sum = x + sum));
    const average = sum/inventory[i].reviews.length;
    inventory[i].averageRating = Number.parseFloat(average.toFixed(2));
  };
};
calEachAverageRating();

console.log(inventory);

// j. Encontrar o produto com a maior média de avaliações

function findByHighestAverage() {
  const bestReviewedProduct = inventory.reduce((a, b) => {return a.averageRating > b.averageRating ? a : b});
  return bestReviewedProduct;
};

console.log(findByHighestAverage());