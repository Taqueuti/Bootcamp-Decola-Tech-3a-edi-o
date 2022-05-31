# CSS3

## ID X Classe
### ID
+ `<header id="header" class="header"></header>` 
+ O atributo Id especifica uma identificação única para o elemento HTML. Por questões de boas práticas, não deve ser reutilizado e nem conter espaços em seu nome, pois o navegador irá identificar o espaço como parte dele, já que os elementos não podem ter mais de um Id.

### Classe
+ `<header class="header"></header>`
+ O atributo global class especifica uma ou mais classes para o elemento HTML. Esse atributo pode ser reutilizado, ajudando a pessoa desenvolvedora a não repetir códigos, além de permitir o uso de diferentes classes simultaneamente.

-----------------------
## Conceitos básicos

### Box model

<img src="https://www.alura.com.br/artigos/assets/entendendo-como-funciona-box-model-e-o-box-sizing/box-model-no-devtools.png" />

+ Margin: A propriedade margin do CSS define a área de margem nos quatro lados do elemento. É uma abreviação que define todas as margens individuais de uma só vez: margin-top , margin-right (en-US), margin-bottom , e margin-left (en-US).

+ Border: Border é uma propriedade que adiciona um contorno em volta de um elemento HTML. Ela pode ser aplicada em todos os lados de um elemento da página e ter características diferentes, como tamanhos, cores e estilos

+ Padding: A propriedade padding define uma a distância entre o conteúdo de um elemento e suas bordas. É um atalho que evita definir uma distância para cada lado separadamente ( padding-top , padding-right , padding-bottom , padding-left ).

+ Content: A propriedade CSS content é usada com os pseudoelementos ::before e ::after para gerar conteúdo em um elemento. Objetos inseridos usando a propriedade content são elementos substituídos anônimos.

-----------------------------

## Estilizando textos
+ Já sabemos que podemos mudar cor e tamanho de algumas fontes, e agora vamos nos aprofundar nisso.

 

### font-family
 + Com o font-family podemos alterar a fonte dos nossos textos, como uma fonte da internet ou uma que esteja instalada no nosso computador, mas vamos nos ater às fontes seguras, chamadas de web safe fonts.

Essas fontes são chamadas assim pois são encontradas em quases todos os sistemas e podem ser usadas sem preocupação.

 

### font-size
O font-size nos ajuda a mudar o tamanho do texto, existem algumas unidades de medida para ele mas por enquanto os pixels são suficientes para nós.

 

### font-style
Usamos o font-style para tornar um texto itálico, na maioria das vezes você usará apenas o valor italic para ele, mas se precisar tirar o itálico de um texto você pode usar o valor normal.

-------------------------

## Background
A propriedade background também é um atalho para várias propriedades, mas isso vocês podem absorver aos poucos, e uma boa opção de leitura é a documentação do MDN.

Por enquanto veremos apenas como mudar a cor de fundo.

 

E aqui temos 3 formas de colocar uma cor de fundo, e ainda existem outras.

A primeira é pelo nome da cor em inglês, a segunda é pelo código hexadecimal e a terceira é usando apenas o atalho background.

---------------------------

## Dimensão e alinhamento

### Width
+ A propriedade CSS width determina a largura da área de conteúdo de um elemento. A área de conteúdo fica dentro do preenchimento, da borda, e da margem de um elemento.

### Height
+ A propriedade CSS height determina a altura da área de conteúdo de um elemento. A área de conteúdo fica dentro do preenchimento, da borda, e da margem de um elemento.

### Max-width
+ A propriedade max-width do CSS estabelece a largura máxima de um elemento. Ele evita que o valor usado da propriedade width se torne maior que o valor especificado por max-width.

### Max-Heigth
+ A propriedade max-heigth do CSS estabelece a altura máxima de um elemento. Ele evita que o valor usado da propriedade heigth se torne maior que o valor especificado por max-heigth.

### Margin
+ A propriedade margin em CSS define o espaço exterior entre os elementos. Compreende também o espaçamento entre os elementos e tela do navegador do usuário, por exemplo, o desenvolvedor deseja que um elemento fique a 20px do topo da página do usuário.

### Text-align
+ A propriedade CSS text-align descreve como conteúdo inline, como texto, é alinhado no elemento pai em bloco. text-align não controla o alinhamento de elementos em bloco, apenas o seu conteúdo inline.
