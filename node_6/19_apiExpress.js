/*
Navegue até node/projeto

npm init -y para criar package.json

npm i --save express@4.16.2 -E para instalar o express e salvar sua referência dentro de package.json. Nesse momento a pasta node_modules e package-lock são criadas.
O é significa que será instalado exatamente essa versão, não alterando nem o fix, nem o minor, nem no major.

Defina os dados no arquivo servidor.js. A porta nada mais é do que a forma que você tem para selecionar qual processo vai atender aquela requisição. Ao digitar localhost:3003 quem vai atender essa requisição vai ser minha aplicação em node que tá executando aqui o arquivo servidor.js. A porta padrão é a 80 para requisições utilizando o protocolo http. Então ao digitar http://www.google.com.br utiliza o protocolo http. Por enquanto porta significa um processo. Não basta eu ter o endereço ip da máquina pra saber quem vai atender aquela requisição, você precisa dizer qual é a porta para que ele possa dentro do computador, quando a informação chegar na placa de rede o computador saiba "ó quem vai atender essa requisição é o processo que está na porta 80", ou seja o processo que está associado com esse número 80 pois porta na verdade é só uma abstração, não existe nada físico por trás de uma porta, sendo nada mais que a associação de um número com um processo que comunica pela rede.


*/
