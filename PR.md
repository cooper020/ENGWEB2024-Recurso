O dataset foi alterado manualmente recorrendo a ctrl+h e alterar todos os identificadores `bookId` para `_id` , utilizando o `script.py` converti representações de listas em string para listas nos atributos: `genres`, `characters`, `awards`, `ratingsByStars` e `setting`.

Para o setup da base de dados utilizei os seguintes comandos:

`sudo docker run -d -p 27017:27017 --name mongodb_ex mongo` 

`sudo docker cp livros.json mongodb_ex:/tmp`

`sudo docker exec -it mongodb_ex bash`

`ls /tmp`

`mongoimport -d livros -c livros --jsonArray /tmp/livros.json `

`mongosh`

Quanto às respostas textuais estas estão incluídas com o código e a resposta em `/ex1/queries.txt`.

Para executar as aplicações envolvidas basta correr o comando `npm i` e npm `start` na diretoria da API (/ex1) e o mesmo na diretoria da interface (/ex2). Caso haja algum erro, pode ser necessário fazer `npm i mongoose` para a API e `npm i axios` para a interface.


Para a rota GET /books/:id, utiliza-se o valor da string do atributo `_id`


O dataset enconta-se zipado de modo a ser possível estar no repositório
