/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/


function evenOrOdd(number) {

    // Solução 1
    //   if(number % 2 === 0){
    //     return 'even'
    //   } else {
    //     return 'Odd'
    //   }
    
    //solução 2
      return number % 2 === 0 ? 'Even' : 'Odd';
    }
