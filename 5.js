/* Q. X- Let’s say you are working for an event management company. You have a list of guest names as an array of
strings. Your task is to return a sentence that has all the guest names, separated by commas.*/


// Sample array of guest names
const guestNames = ['Alice', 'Bob', 'Charlie', 'David'];

// Function to create a comma-separated sentence of guest names
function createGuestListSentence(guestNames) {
  return guestNames.join(', ');
}

// Example usage
const guestListSentence = createGuestListSentence(guestNames);
console.log(`Guests: ${guestListSentence}`);
// Output: Guests: Alice, Bob, Charlie, David
