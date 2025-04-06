Sistema de gerenciamento de usuários - SQLite
Este aplicativo fornece um sistema simples de gerenciamento de usuários baseado em SQLite eNode.js.. Ele permite que você crie, preencha e gerencie um banco de dados de usuários por meio de uma interface de linha de comando .

Características
Crie e preencha um banco de dados de usuários .

Exclua usuários com base em seu ID ou idade.

Limpar todos os usuários do banco de dados.

Interface interativa baseada em menu para gerenciamento de usuários.

Pré-requisitos
Antes de executar este aplicativo, certifique-se de ter o seguinte instalado no seu sistema :

Node.js (https://nodejs.org/)

SQLite (https://sqlite.org/)

Além disso, você deve instalar as dependências necessárias . Veja a seção Instalação abaixo para detalhes.

Instalação
Clone este repositório na sua máquina local ou copie o código para a pasta do seu projeto .

Execute o seguinte comando para inicializar o projeto e instalar dependências:

bater
npm install sqlite3 readline
Estrutura
Arquivos
banco.db: Arquivo de banco de dados SQLite ( gerado automaticamente após a execução).

script.js: Script principal contendo lógica do aplicativo .

Funções
criarEPopularTabelaUsuarios(nome, sobrenome, idade, telefone)
Cria a usuarios tabela (se ela não existir) e adiciona um usuário com o nome, sobrenome, idade e número de telefone fornecidos .

deletarUsuarioPorId(id)
Exclui um usuário da tabela com base no usuarios ID fornecido .

limparTabelaUsuarios()
Limpa todas as entradas na tabela usuarios .

deletarUsuariosPorIdade(idade)
Exclui todos os usuários na tabela com a idade especificada .usuarios

exibirMenu()
Exibe um menu interativo para gerenciar o banco de dados do usuário .

Uso
Execute o script:

bater
node script.js
Siga as instruções na tela para gerenciar o banco de dados. As opções incluem:

Crie e preencha o banco de dados : O programa adiciona automaticamente um usuário de amostra ( ).Daniel Porto

Excluir um usuário por ID : forneça o ID do usuário quando solicitado.

Excluir usuários por idade : insira a idade para excluir todos os usuários correspondentes .

Limpar a tabela : remove todas as entradas da tabela usuarios .

Sair : Fecha o programa.

Exemplo de execução
bater
Escolha uma opção:

1. Deletar usuário por ID
2. Deletar usuários por idade
3. Limpar tabela
4. Sair
   Opção: 1
   ID do usuário: 1
   Usuário deletado com sucesso!
   Notas
   O arquivo de banco de dados ( ) será criado no diretório atual .banco.db

Certifique-se de ter permissões de leitura/gravação no diretório onde o script é executado.

Tratamento de erros
O script inclui tratamento básico de erros . Se uma operação falhar (por exemplo, devido a permissões ausentes ou entradas inválidas ), uma mensagem de erro será exibida .

Melhorias futuras
Aqui estão algumas ideias para melhorar o aplicativo :

Adicione validação para entradas do usuário (por exemplo, verifique se idade e número de telefone são formatos válidos ).

Implementar operações adicionais de banco de dados (por exemplo, atualizar detalhes do usuário ).

Crie uma interface gráfica de usuário para uma experiência mais amigável .
