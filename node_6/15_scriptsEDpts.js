/*
Com relação ao package.js podemos criar scripts dentro desse arquivo para rodar de forma bem simples a partir do terminal.
Podemos ainda recriar a pasta node_modules a partir daquilo que está definido dentro das dependências de package.js.

Primeiro apagamos a node_module e em package.js substituimos o arquivo principal de index.js que não existe para funcionarios.js. 

Criamos os scripts start e dev que disparam o nodemon. Quando ele executar o nodemon, por mais que o mesmo não esteja como uma dependência dentro de node_modules, ele buscará a versão global que instalamos algumas aulas atrás.

Ao dispararem o nodemon ocerrerá o monitoramento do arquivo. Sempre que o arquivo é executado novamente. Só que agora o nodemon usará o arquivo principal para chamar o arquivo, ele executa esse programa.

Na pasta funcionarios, para recriar a pasta node_modules é muito simples eu já tenho o package.json com as dependências do projeto.
Basta eu fazer <npm i ou install>.
Damos o comando dentro da pasta que tem o package.json.

Uma vez definido os scripts para startar o projeto basta digitar <npm nome_do_script> como <npm start> caso o nome do script seja um comando padrão do node como "start" ou "test". Isso roda um script dentro do package.json. 

No script test ele mostra a mensagem de erro. Na string no campo "exit:" um valor diferênte de zero (ocorreu erro) mostrará um erro além da mensagem desejada e zero (ocorreu tudo bem na execução) mostrará.

Para scripts que não são padrão: <npm run nome> tipo <npm run dev> = executa um programa no modo de desenvolvimento starta servidor local.

Outro exemplo de uso de scripts: gerar os arquivos a serem enviados para producao. Cria-se outro script que faz um determinado trabalho ao chamar <npm run prod> e ai ele gera os arquivos.

Podemos usar comandos encadeados. Mais exemplos: executar tarefas automatizadas:executar switch de teste, executar no modo de desenvolvimento, gerar os arquivos prontos para serem enviados para produção.
*/
