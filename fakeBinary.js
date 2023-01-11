/*
Pegar uma string de numeros e mudar cada digito para '1' ou '0' segundo a regra a seguir:
Caso o numero seja menor que 5 ele deve se tornar '0', caso o numero seja maior ou igual a 5 ele deve se tornar '1'.

45385593107843568 = 01011110001100111
*/



function fakeBin(x){

  //primeiro eu separei a string por cada caractere com o metodo SPLIT, depois comparei eles e alterei a cada iteração com o metodo MAP, em seguida juntei todos eles com o metodo JOIN sem virgula.
  x = x.split('').map(element => element <'5' ? '0' : '1').join('');

  //primeira solução
  // teste = teste.map(element => element <'5' ? '0' : '1').join('');


  console.log(typeof x);
  console.log(x);
}

fakeBin('45385593107843568');
