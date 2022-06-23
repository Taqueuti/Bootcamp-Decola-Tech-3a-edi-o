# Paradigmas
A programação tem dois tipos de paradigmas, que são impeerativo e declarativo
+ Impertativo: Ele sempre foca em como vai resolver os problemas
+ Declaritivo: Foca em em que vai resolver o problema. Seria um banco de dados sql, ou programação funcional.
+ Os programas são "objetos" que possuem uma série de propriedades.

**Pilares**
+ Herença
+ Polimorfismo
+ Encapsulamento
+ Abstração


## Pilares
### *Abstração*

"Processo mental que consiste em isolar um aspecto determinado de um estado de coisas relativamente complexo, a fim de simplificar a sua avaliação, classificação ou para permitir a comunicação do mesmo."
 
 ### *Herença*
 + Objeto filho herda propriedades e métodos do objeto pai.
 
 ### *Encapsulamento*
 + cada classe tem propriedades e métodos independentes do restante do código.
 
 ### *Polimorfismo*
 + Objeto podem herdar a mesma classe pai, mas se comportarem de forma diferente quando invocamos seus métodos.

# Protótipos
+ Todos os objetos JavaScript herdam propriedades e métodos de um prototype.
+ O objeto object.prototype está no topo desta cadeia.

## Classes
**Syntatic sugar:** Uma sintaxe feita para facilitar a escrita

                                 class Meal {
                                  constructot (food) {
                                   this.food = fodd
                                  }
                                  
                                  eat() {
                                   return 'frango'
                                  }
                               }
                               
 + JavaScipt não possui classes nativamente. Todas as classes são objetos e a herança se dá por protótipos.
 
   
