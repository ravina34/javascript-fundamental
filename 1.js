/*  Q.1. Imagine you are working for a social media company. You have a list of all the users. Your job is to create a
function that checks if a specific username is in that list. The function should take the username as input and
tell you whether it's present in the list of users or not.*/



const users = ['alice', 'bob', 'charlie', 'dave']; 

// Function to check if a specific username is in the list
function isUsernameInList(username) {
  return users.includes(username);
}

// Example usage
console.log(isUsernameInList('bob'));    
console.log(isUsernameInList('eve'));    
