// EXERCÍCIO 1 (IMPRIMIR N DE 1  A 10 )
for ( let n = 1; n <= 10; n++ ){
    console.log(n)
}

// EXERCÍCIO 2 (PAR OU IMPAR)

var n= prompt ('numero')
var total = n/2;

if (n & 1){
  console.log('impar')
} else {
    console.log( 'par')
}
 
// EXERCÍCIO 4 (MAIOR NUMERO DA LISTA)


var lista = [ 1, 2, 3, 4, 5, 6 ,7];
console.log (Math.max(...lista));


// EXERCÍCIO 5 ( OCORRÊNCIAS DE UM ELEMENTO )
var teste = [3, 3, 3, 3];
var valor = 0;
for (var s of teste) {
    if (s === 3) valor++;
}
console.log(valor);

// EXERCÍCIO 6 (REMOVER AS OCORRÊNCIAS DE UM ELEMENTO )

var teste = [1, 3, 3, 3];
var uniqueTeste = [...new Set(teste)]
console.log(uniqueTeste);

// EXERCÍCIO 8 (INVERTENDO STRING)

const i = ['oi' , 'tudo bem'];
i.reverse();
console.log(i);

 EXERCÍCIO 8 ( POLÍNDROMO)
function palindrome(str) {
    var string= '';
    return true;
 }
 palindrome("ana");

 
  var n= prompt ('Digite uma palavra')
  for (var n = palavra.length - 1; i >= 0; i--) {
    palindromo += palavra[i]
 }
   if (palavra === n ){
   console.log(' polindromo')
  } else {
    console.log( 'nao é um polindrmo')
}

//EXERCÍCIO 9 (VALOR FATORIAL )
var a= prompt ('numero')
function factorialize (a){
 
    if ( a < 0 ) {
        return -1;
    } else if(a == 0) {
        return 1;
    } else {
        (a * factorialize(a - 1));
    }
    
    return factorialize(5);
}
 



 



