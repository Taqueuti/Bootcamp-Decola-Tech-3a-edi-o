# O que é Dom
*Document Object Model*

+ O DOM HTML é um padrão de como **acessar e modificar os elementos HTML de uma página.**

## DOM
**BOM**: *Browser Objet Model*
+ Tudo o que está dentro do objeto window.

## Adicionar e deletar

| Método | Descrição |
| ----------- | ----------- |
| document.createElement(element) | Cria um novo elemento HTML |
| document.removeChild(element) | Remove um elemento |
| document.appendChild(element) | Adiciona um elemento |
| document.replaceChild(new, old) | Substitui um elemento |

## Classes
*Element.classList*

                    <div id="meu-elemento" class="classe">
                       <!-----Resto do código aqui -->
                       </div>
                       
                       
                       const meuElemento = document.getElementById("meu-elemento")
                       
                       meuElemento.classList.add("novo-estilo");
                       // Adiciona a classe "meu estilo"
                       
                       meuElemento.classList.remove("classe")
                       // Remove a classe "classe"
                       
                       meuElemento.classList.toggle("dark-mode")
                       // Adiciona a classe "dark-mode" caso ela não faça parte da lista remove ela caso faça
                       
## CSS
*Acessando diretamento o CSS de um elemento*
                                          
                                          
                                          
                       document.getElementByTagName("p").style.color = "blue";
                       
## Eventos
### Tipos

+ **Eventos do mouse** mouseover, mouseout
+ **Eventos de clique** click, dbclick
+ **Eventos de atualização** Change, load

## Event listener
+ diretamente no javascript, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação.
                                       
                                     const botao = documento.getElementById("meuBotao");
                                     
                                     bota.addEventListerner("click", outraFuncao);
## Atributo HTML
+ Especifica a função a ser chamada diretamente no elemento HTML.

                                    <html>
                                    <body>
                                    
                                    <h1> onclick="mudaTexto(this)"Clique aqui!</h1>
                                    
                                    <script>
                                        function mudaTexto(id) {
                                         id.innerHTML = "Mudei!";
                                         }
                                         <script>
                                         
                                         </body>
                                         </html>
