# Tipos de funções

## Estrutura

                             function nome(parametros){
                             // instruções                             
                             }

+ Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela.

---------------------------------
 
                             function nome(parametros){                             
                             //instruções                             
                             return; //valor de retorn
                             }

+ Quando invocamos o "return", **a função para de ser executada**.

-------------------------------

## Função Anônima
_Funções que representam expressões_

                              const soma = function (a, b) {
                              return a + b;
                              }
                              
                              soma(1, 2) //3
                              soma(5, 4) //9

+ Uma variável pode armazenar uma função.

-----------------------------

## Função autoinvocável

                               (
                               function(){
                               let name = "Olá mundo"
                               return name;
                               }
                               )();
                               
                               // Olá mundo     

+ Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.

                              (
                              function(a, b){
                              return a + b;
                              }
                              )(1, 2);
                              
                              // 3
                               
                               
------------------------------------
                               const soma3 = (
                               function() {
                               return a + b;
                               }
                               )(1, 2);
                               
                               console.log(soma3) //3

+ Também pode ser utilizda com parâmetros ou armazenada em uma variável.

## CallBacks
*Uma função passada como argumento para outra.*

                                
                                Const cal = function(operacao, num1, num2){
                                return operacao(num1, num2);
                                }
                                
                                const soma = fcuntion(num1, num2) {
                                return num1 + num2;
                                }
                                
                                const sub = function(num1, num2) {
                                return num1 - num2;
                                }
                                
                                const resultaSoma = calc(soma, 1, 2);
                                const resultSub = calc(sub, 1, 2);
                                
                                console.log(resultSub) // -1
                                console.log(resultSoma) // 3

+ Utilizando callbacks, você tem maior controle da ordem de chamadas.

# Parâmetros

## Objeto "arguments"

                                
                                function findMax() {
                                let max = -Infinity;
                                
                                for(let i = 0; i < arguments.length; i++) {
                                if(arguments[i] > max) {
                                max = arguments[i];
                                }
                               }
                              return max;
                              }
                              
+ Um array com todos os parâmetros passados quando a função foi invocada

## Arrays e objetos
**Spread** : *uma forma de lidar separadamente com elementos*

                               function sum(x, y, z) {
                               return x + y + z;
                               }
                               
                               const numbers = [1, 2, 3];
                               
                               console.log(sum(...numbers))
                               
+ O que era parte de um array se torna um elemento independente.

**Rest**: *combina os argumentos em um array*
 
                                 function confereTamanho(...args) {
                                 console.log(args.length)
                                 }
                                 
                                 confereTamanho() //0
                                 confereTamanho(1, 2) //2
                                 confereTamanho(3, 4, 5) //3
  
 + O que era um elemento independente se torna parte de um array.

##  Object Destructuring
                                
                                
                                Const user = {
                                id: 42,
                                displayName: 'jdoe',
                                fullName: {
                                  firstName: 'John',
                                  lastName: 'Doe'
                                }
                               };
                               
                               function userId({id}) {
                                  return id;
                                 }
                                 
                                 function getFullName({fullName: {firstName: firsst, lastName: last}}) {
                                 return `${first} ${^last}`;
                                }
                                
                                userId(user)
                                // 42
                                
                                getFullName(user)
                                // Jhon Doe
                                
+ Entre chaves {}, podemos filtrar apenas os dados que nos interressam em um objeto.

# Loops

## Switch/case

                               function getAnimal(id) {
                               switch(id) {
                                  case 1:
                                    return "cão";
                                   case 2:
                                    return "gato";
                                   case 3:
                                    return "pássaro";
                                   default:
                                    return "peixe";
                                   }
                                  }
                                  
                                  getAnimal(1) //cão
                                  getAnimal(4) /peixe
                                  getAnimal("1") // peixe

+ Equivale a uma comparação de tipo e valor (===)
+ Sempre precisa de um valor "default"
+ Ideal para quando se precisa comparar muitos valores

--------------------------------
## For
*Loop dentro de elementos iteráveis (arrays, strings).*
                                   
                                function multiplicaPorDois(arr) {
                                   let multiplicados = [];
                                   
                                   for(let i = 0; i < arr.length; i++){
                                    multiplicados.push(arr[i] * 2);
                                    }
                                    
                                     return multiplicados;
                                     
                                    }
                                    
                                    const meusNumeros = [2, 33, 456, 356, 40];
                                    
                                    multiplicaPorDois(meusNumeros);
                                    // [4, 66, 912, 712, 88]
                                    

## For...in
*Loop entre propriedades enumeráveis de um objeto.*

                                 function forInExemplo(obj) {
                                    for(prop in obj) {
                                     console.log(prop);
                                    }
                                   }
                                   
                                    const meuObjeto = {
                                     nome: "João",
                                     idade: "28",
                                     cidade: "Salvador"
                                    }
                                    
                                    forInExemplo(meuObjeto);
                                    // nome
                                    // idade
                                    // cidade
                                    
## For...of
*Loop entre estruturas iteráveis(arrays, strings).*

                                function logLetras(palavra) {
                                  for(letra of palavra) {
                                   console.log(letra);
                                  }
                                 }
                                 
                                 const palavra = "abacaxi";
                                 
                                 logLetras(palavras)
                                 // a
                                 // b
                                 // a
                                 // c
                                 // a
                                 // x
                                 // i
 
 ## While
                            
                                  function exemploWhile() {
                                     let num = 0
                                     
                                     while(num <= 5){
                                      console.log(num);
                                      num ++;
                                    }
                                   }
                                   
                                   exemploWhile()
                                   // 0
                                   // 1
                                   // 2
                                   // 3
                                   // 4
                                   // 5
  
  + Executa instruções até que a condição se torne falsa.
                                     
                                 
                                
 ## Do...while
 
                                function exemploDoWhile() {
                                  let num = 6;
                                  
                                  do {
                                    console.log(num);
                                    num++;
                                  } while(num <= 5)
                                 }
                                 
                                  exemploDoWhile()
                                  // 6

+ Executa instruções até que a condição se torne falsa.
+  Porém **a primeira execução sempre ocorre.**


                              
