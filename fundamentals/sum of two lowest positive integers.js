/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {  
  
    let min = Infinity;
    let secondMin = Infinity;

    for (let i  = 0 ; i < numbers.length; i++){
      if (numbers[i] < min){
        secondMin = min
        min = numbers[i];
      } else if (numbers[i] < secondMin){
        secondMin = numbers[i];
      }
    }

  //   let min = Math.min(...numbers);
  //   let newArr = numbers.filter(number => min != number);
  //   let secondMin = Math.min(...newArr);

    return min + secondMin;
  }