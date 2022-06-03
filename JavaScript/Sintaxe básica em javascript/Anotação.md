# O que é o JS?
+ O javaScript é uma linguagem de programação de lato nível, que integra o desenvolvimento de apps e páginas web.
+ É uma das linguagens de programação mais usadas no mundo do desenvolvimento.

--------------
# Como surgiu ?
+ JavaScript é uma Linguagem de Programação criada por Brendan Eich, a pedido da empresa Netscape, em meados de 1995, inicialmente, com o nome Live Script. JavaScript é uma Linguagem de Programação, criada por Brendan Eich, a pedido da empresa Netscape, em meados de 1995.

## Para quê serve JavaScript ?
+ Para criar scripts dinâmicos que realizam a interação de apps ou páginas web.
+ Imagina que o _HTML_ é a estrutura, o _CSS_ é o design, o _JavaScript_ é a parte interativa do desenvolvimento.

## Onde usar ?
+ Podemos usar o JavaScript de várias formas, seu uso mais comum se dá no desenvolvimento de apps e páginas web, juntamente com as linguagens HTML e CSS.

-------------------
## Tipagem
+ A tipagem funciona como uma regra de uso de dados, quanto mais forte for a tipagem, mais obrigatório é a declaração do tipo de dado.
+ A tipagem em JavaScript é fraca, a declaração dos dados acontece de modo dinâmico.

Ex: Ao criarmos uma variável com valor entre aspas("valor") JavaScript já converte o dado para o tipo string.

Ex.: var numero = 1;
// o JavaScript já converte o valor 1 para o tipo Number.

--------------
# Tipos primitivos
+ As variáveis em JavaScript podem guardar tipos de dados que chamamos de tipos primitivos.
+ Variáveis podem guardar valores dos tipos: Boolean(true ou false); null; undefined; Number; String; Array; Object; Function.

-------------

# O que são variáveis?
+ São dados que variam.
+ Imagina uma caixa, tu pode colocar quase qualquer coisa dentro dela, pode ser uma lista de nomes, cartões com números, objetos no geral....
+ Variáveis funcionam dessa forma, como uma caixa que guarda valores.

------------
# Declaração de variáveis
Existem 3 modos de declarar as variáveis em JavaScript:

+ _var_ — Escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

+ _let_ — Escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

+ _const_ — Escopo local de bloco, somente leitura, o valor incial é obrigatório e nao pode ser alterado.

# Escopo
O escopo em JavaScript deifine a limitação a visibilidade de um bloco de código.

+ _Escopo global_ — Quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código.
+ _Escopo local_ — Quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não 

-------------
# Operação aritméticos
São tipos de operadores matemáticos com valo númericos:

+ +adição;
+ -subtração
+ *multiplicação;
+ /divisão real;
+ %divisão inteira;
+ **potenciação;

# Operadores realacionais
São tipos de operadores que consultam a relação entre valores:

+ `> maior que;`
+ `< menor que;`
+ `>= maior ou igual a;`
+ `< =menor ou igual a;`

# Operadores lógicos
São tipos de operadores que consultam valores lógicos:

+ &&-"e"-considera que todos os valores sejam true;
+ ││-"ou"-considera que qualquer valor seja true;
+ !-"não"-inverte o valor de true para false ou vice-versa;

------
# Vetores ou arrays
+ Arrays são um tipo de lista, ou matriz que variáveis, onde cada variável possui um índice. Os valores podem ser de vários tipos.
+ Imagina que um array é uma caixa com várias outras caixas dentro e cada uma contendo algum valor;

## Array
+ O array deve ser declarado entre colchetes"[]", e podem guardar qualquer valor dentro de seus índices: inclusive outros arrays.

Ex.:let array =['string',1,true,false,['array1'],['array2']...]

## Manipulando Arrays
Ao ser declarado, o Array traz consigo uma série de métodos para manipulá-lo.

+ forEach()—itera um array;
+ push()—add item no final do array;
+ pop()—remove item no final do array;
+ shift()—remove item no início do array;
+ unshift()—add item no início do array;
+ indexOF()—retorna o índice de um valor;
+ splice()—remove ou substitui um item pelo índice;+ slice()—retorna uma parte de um array existente;

---------------
# Objetos
+ Dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves "{}".

Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções. Pode ser delcarada assim:

    Var xicara ={

        cor: 'azul',

        tamanho: 'p'

        funcao: tomarCafe()
    }

# Manipulando objetos
+ As propriedades de objetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto. Chamamos isso de desestruturação.

Ex.: var xicara={cor: 'azul', tamanho:'p', funcao: tomarCafe()}

var cor = xicara.cor;

var tamanho = xicara.tamanho;

var funccao = tomarCafe();

-------------
# Estruturas condicionais
+ São instruções para realizar determinadas tarefas a partir de uma condição, seja de decisão ou repetição.

## if
Podemos usar as palavras reserdas "if" para estabelecer uma condição:
Ex.: `var jogador1 = 0;`
     `var jogador2 = 0;`


      if(jogador1>0){
          console.log('jogador1 marcou ponto');
      }
// como ler: se o jogador1 tiver o valor maior que 0 ele marcou ponto.

## else
No caso de a condição não ser atendida podemos usar o "else":
Ex.: var jogador1 = 1;
     var jogador2 = 0;

     if(jogador1>0){
         console.log('jogador1 marcou ponto');
     }else{
         console.log('ninguém marcou ponto');
     }

## else if
Caso haja mais de uma condição usamos o "else if".
Ex.: var jogador = 1;
     var jogador2 = 0;
      
     if(jogador1 > 0){
         console.log('jogador1 marcou ponto');
     }else if(jogador2 > 0){
         console.log('jogador2 marcou ponto');
     }else{
         console.log('ninguém marcou ponto');
     }

## ninho de if
Podemos também usar o "if" dentro de um outro "if", chamamos isso de aninhamento de if´s ou ninho de if´s.
Ex.: if(jogador1 = -1){
          if(jogador1 > 0){
              console.log('jogador1 marcou ponto');
          }else{
              console.log('ninguém marcou ponto');
          }
    }else{
        console.log('jogador inválido');
    }  

## if ternário
Podemos também fazer uma verificação em uma única linha usando o "if" ternário:

Ex.: [condição]?[instrução1]:[instrução2];

jogador1 > 0?console.log('marcou ponto'):console.log('não marcou ponto');

//Lembre de usar a interrogação "?" e dois pontos ":"

## Usando switch/case
O "switch/case" funciona como uma estrutura condicional também;

Ex: 
    switch(${expressao}){
    case 1:
        ${instrucao};
    break;
    case 2:
        ${instrução};
    break;
    }
## Laços de repetição
São estruturas condicionais que repetem uma instrução até atingir determinada condição:

+ for;
+ for/in;
+ for/of;
+ while;
+ do/while;

### For
Funciona como uma repetição de instrução até que a condição seja falsa:

for([expressaoInicial];[condicao]; [incremento]){
    declaracao}

Ex.: 

     var array =['valor1','valor2','valor3','valor4']

     for(let i = 0;i<array.length;i++){
    console.log(i);
}

### for/in
Funciona como uma repetição a partir de uma propriedade:

for([indice] in [objeto ou array]){
    declaracao}

    Ex.: var array =['valor1','valor2','valor3','valor4']

    for(i in array){
        console.log(i);
    }

### for/of
Funciona como uma repetição a partir de um valor:

for([indice] of [array]){
    declaracao}
Ex.: 




       var array =['valor1','valor2','valor3','valor4']
         for(i of array){
         console.log(i);
}

### While
Executa uma instrução "enquanto" determinada condição for verdadeira, a verificação é feita antes da execução;

Ex.: 



    var a = 0;
    
    
     while(a<10){
         a ++;
         console.log
     }
// como ler: enquanto a variável _a_ for menor que 10 ela vai rever mais um e imprimir no console.

### Do/While
Executa uma instrução "_até que_" determinada condição seja falsa, a verificação é feita depois da execução;

Ex: 
    
    var a = 0;

     do{
    
        a++
        
        console.log(a);
        
    }while(a<10)

// como ler: a variável _a_ vai receber mais um e imprimir no console _até que_ seu valor chegue a 10.

------------------------
# Funções
São blocos de comandos e instruções para a execução de determinadas tarefas:

Ex.: 

       function nomeDaFuncao(){
       $[{instrucao};
       }
       nomeDaFuncao();
       
## Como declarar?
Geralmente se utiliza a palavra reservada"function" seguida de parênteses "()"e chaves "{}":

Ex.:
       
       function funcao(){
         console.log("mensagem");
      }

       funcao();

()—indica que é um objeto do tipo function;
{}—indica que é um bloco de instrução;

## Funções com parâmetros
+ As funções podem receber em sua declaração, parâmetro, que servem como variáveis, onde sua atribuição pode ser feita durante a chamada da função:

Ex.:

          function nomeDaFuncao(parametro){
          ${instrucao};
          }
          
          nomeDaFuncao(valorDoParametro);
          

##  Arrow Function
+ São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas. Devem ser declaradas com parênteses "()", seguido de "=>" e depois chaves "{}"

Ex.: 

          var funcao = () =>{
          ${instrucao};
          }
