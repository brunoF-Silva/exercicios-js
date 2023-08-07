/*
Usando o arquivo descritor do JS.
Dentro de funcinarios acesse o terminal:
<npm init> habilita um wizard para definir como será seu arquivo package.json. Basta responder as perguntas.
<npm init-y> responde sim para todas as perguntas.
Após o enter temos o arquivo package.json

Ao se digitar <npm i> para instalar uma dependência ele cria uma pasta node_modules na mesma pasta em que o comando foi digitado.

Para salvar a dependência que eu vou instalar (módulo de 3º) dentro do arquivo package.json utiliza-se <npm i --save axios >.

Além de package.json descrever o seu projeto ele também objetiva ter a descrição de todas as dependencias que seu projeto precisa.

A área de dependências é adicionada.
Para as versões de algo temos: major.minor.fix ex. 1.0.1

Um ^ significa que a versão poderá variar a minor, isto é, se disponível, baixará a versão com o minor mais recente. Um ~ significa poder variar apenas fix. Nada significa pegar exatamente a versão declarada.

<npm install --save-dev axios@.17.1 -> i ou install para instalar, -dev diz que a dependência só será necessária em desenvolvimento (ex: dependência de testes), @versão -E diz para instalar exatamente a versão declarada, isso no json se traduz na parte do "nada" da linha 17.

A existência do arquivo package.lock.json deve ir para o repositório pois ele descreve de uma forma mais precisa exatamente a versão da dependência que foi baixa. Se ele estiver presente suas configurações sobrescrevem as de package.json. Isso é uma forma de garantir que ele irá pegar a mesma versão que foi testada em sua máquina. 

A continuação está em exercicios-js\node_6\funcionarios\funcionarios.js
*/
