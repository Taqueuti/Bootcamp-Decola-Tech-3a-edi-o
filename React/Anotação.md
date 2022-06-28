## História e Conceitos
+ O Reacr Native é um framework baseado na biblioteca React. Desenvolvido pela equipe do Facebook, possibilita o desenvolvimento de aplicações
mobile, tanto para Android, como para IOS, utilizando apenas Javascript.
+ Ele foi lançado officialmente pelo facebook em 2015.
+ Versão Atual: 0.62
                             
                                      Import React from 'react'
                                      Import {View,Text} from 'react-native';
                                      
                                      const App = ()=>{
                                              return {
                                                   <View>
                                                        <Text>Hello DIO!</text>
                                                    </View>
 
 ## Características do React Native
 + Possui a base de conhecimento compartilhada entre o desenvolvimento mobile e front-end;
 + Todo código desenvolvido é convertido para a linguagem nativa do sistema operacional.
 + Conseguimos desenvolver aplicações para Android e IOS utlizando JavaScript;
 + Por ser multiplataforma, podemos desenvolver aplicações utilizando qualquer sistema operacional(Windows, macOS ou Linux).
 + Acessar a interface e os recursos nativos do Android e IOS utilizando JavaScript;
 
 ## Conceitos e sintaxe da linguagem
                                    import react from 'react'
                                    import { View, Text } from 'react-native'
                                    
                                    function App() {
                                      
                                      const nome = 'Pablo';
                                      
                                      return{
                                       <View>
                                            <Text>Olá meu nome é {nome}</Text>
                                       </View>
                                       
                                     }
                              }
                              
                              export default App
                              
  ## Introdução ao ES6 (ECMAScript)
  
 + O ECMAScript nada mais é que o nome official do Javascript. Atualmente, padrões e normativas referentes à linguagem
 é mantida pela ECMA-262, grupo criado na ECMA para a padronização do Javascript e conta com participação de grandes
 empresas de tecnologia como Microsoft, Google, dentre outras.
 
 ## Introdução ao Flexbox
 + O Flexbox foi projetado para fornecer um layout consistente em diferentes tamanhos de tela. Assim
 como temos na web no React Native funciona da mesma forma.
 + Ao se ulitixar o flexbox, é preciso ter em mente que todas as operações realizadas relacionam-se a dois eixos:
 o eixo pincipal(Main Axis) e o eixo transversal(Cross Axis).
 + O eixo pincipal é definido através da propriedade flex-direction e o eixo transversal encontra-se
 na direção perpendicular a ele.
 + A propriedade flex-direction define a direção do eixo principal e pode tem quatro valores possíveis:
    + row
    + row-reverse
    + column
    + column-reverse
+ Se o valor escolhido for row (linha) ou row-reverse (linha reversa), seu eixo principal se moverá ao longo da linha
--- na direção inline.
+ Se o valor escolhido for columin (coluna) ou column-reverse (coluna reversa) e o eixo principal se moverá
do topo até o fim da página  —— na direção block.
+ Podemos utilizar proporções com a propriedade flex para ocuparmos o tamanho conforme o peso estabelecido
para cada objeto (container)

## Componentes
+ Componentes permitem você dividir a UI em partes independentes, reutilizáveis, ou seja, trata cada parte da aplicação como um
block isolado, livre de outras dependências externas.

## Propriedades
+ Os componentes são como funções JavaScript. Eles aceitam entradas arbitrárias (chamadas "props") e retornam
elementos que descrevem o que deve aparecer na tela.
 
