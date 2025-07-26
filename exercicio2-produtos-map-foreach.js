const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];

// (A) Nome do Produto - Categoria
const productDescriptions = products.map((product) => `${product.name} - ${product.category}`);
console.log("\nNome do Produto - Categoria:");
console.log(productDescriptions);

// (B) Preço com 15% de imposto
const productsWithTax = products.map((product) => ({
  ...product,
  priceWithTax: (product.price * 1.15).toFixed(2),
}));
console.log("\nProdutos com 15% de imposto:");
productsWithTax.forEach((product) => {
  console.log(`${product.name} - R$${product.priceWithTax}`);
});

// (C) Valor total com forEach
let totalPrice = 0;
products.forEach((product) => {
  totalPrice += product.price;
});
console.log("\nValor total de todos os produtos: R$", totalPrice.toFixed(2));
