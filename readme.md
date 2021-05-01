# Desafio: Nginx com Node.js - Code.education

Nesse desafio utilizamos o nginx como proxy reverso.

## Features

- Utilizar o nginx como proxy reverso
- Adicionar registro no banco de dados MySQL
- Ter retorno na aplicação Nodejs com os seguintes dados:
    - <h1>Full Cycle Rocks!</h1>
    - Lista dos nomes cadastrados no banco.

## Tecnologias

Tecnologias usadas:

- [Nginx] 
- [NodeJs] 
- [MySQL] 
- [Docker] 

## Instalação

Fazer uma cópia do projeto em sua máquina

```sh
docker pull thgsdev/codeeducation
```

Executar o comando abaixo para iniciar os container do banco de dados, node e nginx

```sh
docker-compose up -d
```

Testar a aplicação acesso seu navegador de preferência no endereço

http:\\localhost:8080