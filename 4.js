/*    Q.4. You are working for an e-commerce client, and they provide you with an array of objects containing product
names and their prices. Your task is to create a function that finds the product with the maximum amount
(the highest price) and the product with the minimum amount (the lowest price) and prints them to the
console.*/


// Sample array of product objects
const products = [
    { name: 'Laptop', price: 999.99 },
    { name: 'Smartphone', price: 499.99 },
    { name: 'Tablet', price: 299.99 },
    { name: 'Headphones', price: 149.99 }
  ];
  
  // Function to find and print the product with the maximum and minimum prices
  function findMaxMinProducts(products) {
    if (products.length === 0) {
      console.log('No products available.');
      return;
    }
  
    // Initialize variables to store the max and min price products
    let maxProduct = products[0];
    let minProduct = products[0];
  
    // Iterate through the array to find the products with max and min prices
    for (let i = 1; i < products.length; i++) {
      if (products[i].price > maxProduct.price) {
        maxProduct = products[i];
      }
      if (products[i].price < minProduct.price) {
        minProduct = products[i];
      }
    }
  
    // Print the results
    console.log(`Product with the highest price: ${maxProduct.name} - $${maxProduct.price.toFixed(2)}`);
    console.log(`Product with the lowest price: ${minProduct.name} - $${minProduct.price.toFixed(2)}`);
  }
  
  // Example usage
  findMaxMinProducts(products);
  