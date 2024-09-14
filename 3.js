/* Q.3.  x0 Imagine you are given a list of student objects, each containing the student's name and their marks. Your
task is to create a function that checks results by filtering out students whose score is more than 90 and
prints a message saying, "Congratulations [Student Name]! You have cleared the exam."*/

// Sample list of student objects
const students = [
    { name: 'Alice', marks: 92 },
    { name: 'Bob', marks: 85 },
    { name: 'Charlie', marks: 95 },
    { name: 'David', marks: 88 }
  ];
  
  // Function to check results and print congratulatory messages
  function congratulateTopStudents(students) {
    students
      .filter(student => student.marks > 90)
      .forEach(student => {
        console.log(`Congratulations ${student.name}! You have cleared the exam.`);
      });
  }
  
  // Example usage
  congratulateTopStudents(students);
  