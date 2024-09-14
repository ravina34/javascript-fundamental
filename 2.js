/* Q. 2.  Imagine you work for an e-commerce company. Your task is to create a function that takes the prices of all
the products in a customer's cart as input parameters. The function should then calculate and return the
total sum of all the product prices. This will help the company easily calculate the total cost of the
customer's shopping cart.*/


// Function to calculate the total cost of products in the cart
function calculateTotalCost(...prices) {
    return prices.reduce((total, price) => total + price, 0);
  }
  
  // Example usage
  const totalCost = calculateTotalCost(29.99, 49.99, 15.99, 5.49);
  console.log(`Total cost: $${totalCost.toFixed(2)}`);  // Output: Total cost: $101.46
  