/*
Transformar os digitos de um numero em sua raiz quadrada, exemplo 2112 se torna 2 1 1 2, depois executamos a raiz quadrada de cada digito e retornamos o valor 4 1 1 4.
Exemplo 2: 9119 retorna 81 1 1 81. 
O retorno deve ser em formato de numero.
*/

function squareDigits(num){
    var digits = [];
    while (num != 0){
      digits.push(num % 10);
      num = Math.trunc(num / 10);
    }
    digits.reverse();

    //quando chamar callback ou arrow fuction com mais de 1 parametro preciso usar parenteses para os parametros!!!!!!
    digits = digits.map(element => element = element*element ).join('');

    console.log(typeof digits);  // o tipo é string, então vamos converter para NUMBER
    digits = parseInt(digits); //outras formas de transformar é realizar uma operação matetmatica com a string ou colocar um sinal unario exemplo: digits = +digits
    console.log(typeof digits);  // o tipo é string, então vamos converter para NUMBER
    console.log(digits);  //o metodo JOIN retorna uma string, então precisamos transformar em numero
  }

  squareDigits(2112);
