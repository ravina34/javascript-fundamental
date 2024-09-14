/* Q.9. As a web developer, you need to create a function that takes a username string as input and checks if it
contains only unique characters. Use a Set to implement this efficiently.*/

// Function to check if a username contains only unique characters
function hasUniqueCharacters(username) {
    // Create a Set from the characters of the username
    const characters = new Set(username);
    
    // Check if the size of the Set is the same as the length of the username
    return characters.size === username.length;
  }
  
  // Example usage
  const username1 = 'unique';
  const username2 = 'hello';
  
  console.log(`Username "${username1}" has unique characters: ${hasUniqueCharacters(username1)}`);  // Output: true
  console.log(`Username "${username2}" has unique characters: ${hasUniqueCharacters(username2)}`);  // Output: false
  