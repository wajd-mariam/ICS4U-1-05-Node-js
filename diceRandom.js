/**
 *
 * This guessing game program asks the user
 * to guess a randomly generated number within a 
 * specified range.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 *
 * Created on : 2020/11/29
 */
 
// Imports prompt
const prompt = require('prompt-sync')({sigint: true});

  // Declaring Variables:
  let counter = 0;
  let numberEntered = 0;
  let range = 0;
  let number = 0;
  
// Input/Process/Output
try {
  // User Input:
  // Range Input
  range = prompt(`Enter the maximum range of the dice: `);

  // Random Number Generator:
  const randomNumber = Math.floor(Math.random() * (range - 1)) + 1;
  
    // Do While Loop:
    do {
      // Input
      numberEntered = prompt(`Guess the number between 1 and ${range} ? `);
      number = numberEntered;

      // Process / Output
      counter = (counter + 1); 
      // If statements:
      if (numberEntered > randomNumber) {
        console.log(`You've guessed too high!`);
      } else if (numberEntered < randomNumber) {
        console.log(`You've guessed too low!`);
      } else if (numberEntered == randomNumber) {
        console.log(`You guessed it! It took you ${counter} try/tries to get it correctly!`);
      }
    } while (randomNumber != number);
  // Error catch statement:
} catch(err) {
    console.log();
    console.log (`An error occurred`);
}
