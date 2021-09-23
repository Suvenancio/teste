<h1> Teste para vaga de dev jr Resilia Educação</h1>
<p>API criada à partir das operações CRUD, para administração informações de empréstimos de computadores. A API foi feita utilizando a linguagem Node.js.<p>


<h1> Bibliotecas utilizadadas:</h1>

- Express para criar servidor;<br>
- SQLite3 para criar banco de dados;<br>
- Nodemon auxílio no servidor;<br>
<br>
As bibliotecas foram instaladas colocando os seguentes comando no terminal:

- npm init para criar arquivo package com as informações do projeto;
- npm i express;
- npm i sqlite3;
- npm i nodemon -D;

<br><br>
Para rodar o sistema foi criado no script do arquivo package o scrpit dev, que com o comando npm start, roda o sistema com o nodemon.

<h1>Rodando as rotas CRUD</h1>

<h3>Get All</h3>
<p> Utilizando os endereços localhost:1000/estudantes,localhost:1000/computadores e localhost:1000/emprestimos no insomnima na opção GET é possível ver todos os dados incluidos no banco de dados. </p>
<p >

<h3>Get pesquisa pela MATRICULA, NÚMERO DO PATRIMONIO E ID DO EMPPRÉSTIMO</h3>
<p> Utilizando  os endereços localhost:1000/estudantes,localhost:1000/computadores e localhost:1000/emprestimos no insomnima na opção GET é possível ver todos dados segundo os parametros </p>


<br>
<h3>POST</h3>
<p> Utilizando os endereços localhost:1000/estudantes,localhost:1000/computadores e localhost:1000/emprestimos no insomnima na opção POST, indo a opção body e escolhendo json e incluindo no corpo os dados que deseja, conforme a modelagem do banco de dados, é possível incluir dados no banco de dados  </p>


<h3>DELETE</h3>
<p> Utilizando os endereços localhost:1000/estudantes/matricula ,localhost:1000/computadores/numero_do_patrimonio e localhost:1000/emprestimos/id no insomnima na opção DELETE, é possível excluir do banco de dados o cadastro que possui o parâmetro informado informado   </p>

<br>
<h3>PUT</h3>
<p> Utilizandoos endereços localhost:1000/estudantes/matricula ,localhost:1000/computadores/numero_do_patrimonio e localhost:1000/emprestimos/id no insomnima na opção PUT,indo a opção body e escolhendo json e incluindo no corpo os dados que deseja alterar. Assim, os dados do parametro informado serão alterado no banco de dados.   </p>






