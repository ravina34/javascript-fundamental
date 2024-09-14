/* Q. You are working for an e-commerce company, and you are given an object containing product-related
information. Your task is to print the product-related information details as shown in the image below.*/

// Sample product object
const product = {
    name: 'Smartphone',
    price: 499.99,
    category: 'Electronics',
    inStock: true
  };
  
  // Function to print product details
  function printProductDetails(product) {
    console.log('Product Details:');
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price.toFixed(2)}`);
    console.log(`Category: ${product.category}`);
    console.log(`In Stock: ${product.inStock ? 'Yes' : 'No'}`);
  }
  
  // Example usage
  printProductDetails(product);
  