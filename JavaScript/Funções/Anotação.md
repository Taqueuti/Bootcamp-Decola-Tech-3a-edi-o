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

