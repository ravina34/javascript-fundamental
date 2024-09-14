/* Q.8. Let’s say you are working for an event management company. As a web developer, you need to build a
countdown timer for an upcoming event. You need to build a function that calculates the number of days
between the current date and the event's start date. */


// Function to calculate the number of days between the current date and the event start date
function calculateDaysUntilEvent(eventDate) {
    // Get the current date and set the time to midnight
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    // Create a Date object for the event start date
    const event = new Date(eventDate);
    event.setHours(0, 0, 0, 0);
  
    // Calculate the difference in milliseconds
    const timeDifference = event - today;
  
    // Convert milliseconds to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysDifference;
  }
  
  // Example usage
  const eventDate = '2024-12-25';  // Format: YYYY-MM-DD
  const daysUntilEvent = calculateDaysUntilEvent(eventDate);
  console.log(`Days until the event: ${daysUntilEvent}`);
  