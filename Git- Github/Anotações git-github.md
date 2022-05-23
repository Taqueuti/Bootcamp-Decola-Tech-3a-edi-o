# Anotações do curso Git/Github :octocat:

## Comandos Terminal **GIT** 

- **Dir** = *Lista de Diretorios aonde está a pasta*
- **CD** = *Navegar entre as pastas.*
- **Cls** = *Limpar a tela.*
- **Mkdir** = *Criar uma pasta.*
- **Echo** = *Printa uma menssagem.*
- **Echo nome > Hello.txt** = *Vai criar um arquivo.*
- **Del** = *Deletar os arquivos.*
- **Rmdir** /s /q =  *Remover a pasta.*
- **clone** = *baixar o código-fonte existente de um repositório remoto.*
- **Init** = *Esse comando cria um repositório vazio ou transforma uma pasta que você já tem, e que não está com controle de versão, em um repositório.*
- **Status** = *fornece algumas informações sobre a branch em que você estiver no momento, como seu nome, se ela está atualizada em relação à master e quais arquivos foram alterados.*
- **Add** = *incluir as alterações de um arquivo em nosso próximo commit.*
- **Commit** = *definir um ponto de verificação no processo de desenvolvimento, para o qual você pode voltar mais tarde, se necessário.*
- **Push** = *envia e salva suas confirmações no repositório remoto.*
- **Pull** = *obter atualizações do repositório remoto. *
- **Revert** = *desfazer os commits*
------
## Sha
 A sigla `SHA` significa secure hash algorithm (Algoritmo de hash seguro), é um conjunto de funções hash cirptográficas projetadas pela `NSA`(Agência de segurança nacional dos EUA)
 
 `A encrptação gera conjunto de characteres identificador de dígitos` 

----------------------------

## Objetoss internos do git

- **Blobs**:
 `echo"conteúdo" | git hash-object --stdin`
 
 Objeto blob contém meta dados dentro dele, ele vai ter o tipo, tamanho, desse arquivo. e o conteúdo do arquivo
 
 - **Tree**:
  As tree armazenam as blobs. E também guarda os nomes dos arquivos.
  
  - **Commit**:
   E aonde você ajunta tudo, e aponta para tree, parente (último commit), autor, mensagem, timestamp e também possui o SHA1
   
   --------------------
   
   ## Chave `SSH`
   
 `Chave SSH`  é uma forma de estabelecer uma conexão segura e encricptada entre duas máquinas.
 
