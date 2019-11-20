# Restify Service
Node web service using restify and knex with mysql

## Operações da API
O servidor está rodando em [localhost](http://localhost:3000/) na porta 3000

[Arquivo do Insomnia](https://drive.google.com/file/d/1imAx_KpwE1QpKmlyPVSHK7r0410yyV1Z/view?usp=sharing) com as operações para teste do funcionamento da Api

### Módulo User
  - GET /user/all
  - GET /user/:id
  - PUT /user
  - POST /user
  - DELETE /user/:id
  

### Módulo Projects
  - GET /project/all
  - GET /project/:id
  - PUT /project
  - POST /project
  - POST /project/manage-team
  - DELETE /project/:id

### Módulo Tasks
  - GET /tasks/all
  - GET /tasks/:id
  - PUT /tasks
  - POST /tasks
  - POST /tasks/change-status
  - DELETE /tasks/:id
