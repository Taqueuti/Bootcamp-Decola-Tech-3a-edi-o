#Anotações do curso Git/Github :octocat:

## Comandos Terminal **GIT** 

- Dir = *Lista de Diretorios aonde está a pasta*
- CD = *Navegar entre as pastas*
- Cls = *Limpar a tela*
- Mkdir = *Criar uma pasta*
- echo = *Printa uma menssagem*
- echo nome > Hello.txt = *Vai criar um arquivo
- Del = *Deletar os arquivos*
- Rmdir /s /q =  *Remover a pasta*
------
## Sha
 A sigla `SHA` significa secure hash algorithm (Algoritmo de hash seguro), é um conjunto de funções hash cirptográficas projetadas pela `NSA`(Agência de segurança nacional dos EUA)
 
 `A encrptação gera conjunto de characteres identificador de dígitos` 

----------------------------

## Objetoss internos do git

- blobs:
 **echo"conteúdo" | git hash-object --stdin**
 
 Objeto blob contém meta dados dentro dele, ele vai ter o tipo, tamanho, desse arquivo. e o conteúdo do arquivo
 
 - Tree:
  As tree armazenam as blobs. E também guarda os nomes dos arquivos.
  
  - Commit:
   E aonde você ajunta tudo, e aponta para tree, parente (último commit), autor, mensagem, timestamp e também possui o SHA1
   
   --------------------
   
   ## Chave `SSH`
   
 `Chave SSH`  é uma forma de estabelecer uma conexão segura e encricptada entre duas máquinas.
 
