const inventory = [
  {
    id: 1,
    name: "Smartphone",
    price: 500,
    stock: 10,
    category: "Eletrônicos",
    reviews: [4, 5, 3, 5, 4],
  },
  {
    id: 2,
    name: "Notebook",
    price: 1200,
    stock: 5,
    category: "Eletrônicos",
    reviews: [5, 4, 5, 5, 3],
  },
  {
    id: 3,
    name: "Camiseta",
    price: 25,
    stock: 20,
    category: "Vestuário",
    reviews: [4, 3, 4, 5],
  },
  {
    id: 4,
    name: "Cafeteira",
    price: 100,
    stock: 8,
    category: "Cozinha",
    reviews: [3, 2, 5, 4, 2],
  },
  {
    id: 5,
    name: "Fones de Ouvido",
    price: 80,
    stock: 15,
    category: "Eletrônicos",
    reviews: [4, 4, 5, 5, 5, 4],
  },
  {
    id: 6,
    name: "Calça Jeans",
    price: 45,
    stock: 0,
    category: "Vestuário",
    reviews: [4, 3, 4],
  },
  {
    id: 7,
    name: "Liquidificador",
    price: 70,
    stock: 3,
    category: "Cozinha",
    reviews: [3, 4, 3, 5],
  },
];

function listInventory(inventory) {
  inventory.forEach((item) => {
    console.log(
      `ID: ${item.id}, Nome: ${item.name}, Preço: R$${item.price}, Estoque: ${item.stock}, Categoria: ${item.category}`
    );
  });
}

function stockProductInventory(inventory) {
  listInventory(inventory.filter((item) => item.stock > 0));
}

function findEletronicPrice(inventory) {
  const electronics = inventory.filter(
    (item) => item.category === "Eletrônicos" && item.price < 1000
  );
  listInventory(electronics);
}

function listStockEmpty(inventory) {
  const emptyStock = inventory.filter((item) => item.stock === 0);
  if (emptyStock.length === 0) {
    console.log("Não há produtos com estoque zerado.");
  } else {
    console.log("Total de Produtos com estoque zerado: " + emptyStock.length);
    listInventory(emptyStock);
  }
}

function listReviewInventory(inventory) {
  const reviewEmpty = inventory.filter((item) => item.reviews.length <= 0);
  if (reviewEmpty > 0) {
    console.log("Todos os produtos estão possuem pelo menos uma review.");
  } else {
    console.log("Total de produtos sem uma review: " + reviewEmpty.length);
    listInventory(reviewEmpty);
  }
}

console.log("Lista de produtos no inventário:");
listInventory(inventory);
console.log("\nProdutos em estoque:");
stockProductInventory(inventory);
console.log("\nPreços dos produtos eletrônicos abaixo de R$100:");
findEletronicPrice(inventory);
console.log("\nVerificação de estoque vazio:");
listStockEmpty(inventory);
console.log("\nVerificação de review");
listReviewInventory(inventory);
