# Restify Service
Node WebService utilizando restify e knex com mysql como database

[Arquivo do Insomnia](https://drive.google.com/file/d/1imAx_KpwE1QpKmlyPVSHK7r0410yyV1Z) com as operações para teste do funcionamento da Api

Segue um arquivo de Dump para configuração do MySQL [mysql-rest-service-schema.json](https://drive.google.com/file/d/1B8Vc4jL5vmOe4H8RDfvUMV3n8u4mnKcl)

## Operações da API
O servidor está rodando em [localhost](http://localhost:3000/) na porta 3000. 
As configurações de conexão com o MySql se encontram no arquivo ./src/services/knex/index.js 
```
    host : '127.0.0.1',
    user : 'root',
    password : '123456',
    database : 'rest-service'
```


### Módulo User
  - **GET /user/all**
  
    Retorna Lista de todos os usuários registrados
    
  - **GET /user/:id** 
  
    Retorna json do usuários referenciado pelo id
    
  - **PUT /user**
  
    Registra um novo usuário na base de dados, retornando o id do novo usuário 
    
    ```
    {
      name : varchar,
      email : varchar,
      password : varchar,
      type : varchar //{'Manager', 'Tester', 'Developer', 'Design'}
    }
    ```
  - **POST /user**
  
    Atualiza as informações de um usuário registrado na base de dados, a partir de seu id
    
    ```
    {
      userId: Int
      name : varchar,
      email : varchar,
      password : varchar,
      type : varchar //{'Manager', 'Tester', 'Developer', 'Design'}
    }
    ```
    
  - **DELETE /user/:id**
  
  Remove um usuário a partir de seu id
  

### Módulo Projects
  - **GET /project/all**
  
    Retorna Lista de todos os projetos registrados
   
  - **GET /project/:id**
  
    Retorna json do projeto referenciado pelo id
    
  - **PUT /project**
  
    Registra um novo projeto, retornando o id do mesmo 
   
    ```
    {
      name : varchar,
      company : varchar,
      team : [int]
    }
    ```
    
  - **POST /project**
  
    Atualiza as informações de um projeto registrado, a partir de seu id
    
    ```
    {
      projectId: Int
      name : varchar,
      company : varchar,
      team : [int]
    }
    ```
    
  - **POST /project/manage-team**
  
    Remove e adiciona um novo membro a um projeto registrado, com base nos id's
   
    ```
    {
      projectId: Int
      teamMember : Int //(user Id),
      opt : varchar //{ADD , RMV},
    }
    ```
  
  
  - **DELETE /project/:id**
  
    Remove um projeto a partir de seu id

### Módulo Tasks
  - **GET /tasks/all**
  
    Retorna Lista de todas as atividades registradas
   
  - **GET /tasks/:id**
  
    Retorna json da atividade referenciada pelo id
    
  - **PUT /tasks**
  
    Registra uma nova atividade na base de dados, retornando o id da mesma 
    
    ```
    {
      title : varchar,
      description : varchar,
      projectId : Int,
      userId : Int,
      status : varchar //{'OPEN', 'DOING', 'DONE', 'REOPEN', 'ONHOLD'}
      priority : varchar //{'LOW', 'NORMAL', 'HIGH', 'CRITICAL'}
    }
    ```
    
  - **POST /tasks**
  
    Atualiza as informações de uma task registada, a partir de seu id
    
    ```
    {
      taskId: Int,
      title : varchar,
      description : varchar,
      userId : Int,
      status : varchar //{'OPEN', 'DOING', 'DONE', 'REOPEN', 'ONHOLD'}
      priority : varchar //{'LOW', 'NORMAL', 'HIGH', 'CRITICAL'}
    }
    ```
    
  - **POST /tasks/change-status**
  
    Atualiza o status de uma atividade, a partir de seu id
   
    ```
    {
      taskId: Int,
      status : varchar //{'OPEN', 'DOING', 'DONE', 'REOPEN', 'ONHOLD'}
    }
    ```
    
  - **DELETE /tasks/:id**
  
    Remove uma atividade a partir de seu id
