/* Q. As a web developer, your task is to build a function that examines a sentence and counts how many times
each unique word appears in it. Using a Map, the function efficiently keeps track of the occurrence of each
word in the sentence.*/

// Function to count the occurrences of each unique word in a sentence
function countWordOccurrences(sentence) {
    // Create a Map to store the count of each word
    const wordCountMap = new Map();
    
    // Convert the sentence to lowercase and split it into words
    const words = sentence.toLowerCase().split(/\s+/); // \s+ splits on any whitespace
  
    // Iterate over each word and update the count in the Map
    words.forEach(word => {
      // Remove any punctuation from the word
      const cleanedWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
      
      // Check if the word is already in the Map
      if (wordCountMap.has(cleanedWord)) {
        // Increment the count of the word
        wordCountMap.set(cleanedWord, wordCountMap.get(cleanedWord) + 1);
      } else {
        // Add the word to the Map with a count of 1
        wordCountMap.set(cleanedWord, 1);
      }
    });
  
    return wordCountMap;
  }
  
  // Example usage
  const sentence = "Hello world! Hello everyone. Welcome to the world of JavaScript.";
  const wordCounts = countWordOccurrences(sentence);
  
  // Print the word counts
  wordCounts.forEach((count, word) => {
    console.log(`${word}: ${count}`);
  });
  