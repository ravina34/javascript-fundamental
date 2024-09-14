/* Q.7. Imagine you are working for a digital banking platform, and your team is tasked with improving the security

of customer accounts. Your challenge is to create a function that generates a random 4-digit OTP (One-
Time Password) for authentication purposes.*/

// Function to generate a random 4-digit OTP
function generateOTP() {
    // Generate a random number between 1000 and 9999
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp;
  }
  
  // Example usage
  const otp = generateOTP();
  console.log(`Your OTP is: ${otp}`);
  