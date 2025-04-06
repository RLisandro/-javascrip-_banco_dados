import sqlite3 from "sqlite3"; // Importa a biblioteca sqlite3 para interagir com o banco de dados SQLite.
import { open } from "sqlite"; // Importa a função 'open' da biblioteca 'sqlite' para abrir e gerenciar o banco de dados.
import readline from "readline"; // Importa a biblioteca 'readline' para ler a entrada do usuário no console.

// Cria uma interface de leitura para interagir com o usuário no console.
const rl = readline.createInterface({
  input: process.stdin, // Define a entrada como o teclado do usuário.
  output: process.stdout // Define a saída como o console.
});

// Função assíncrona para criar a tabela 'usuarios' e inserir um novo usuário no banco de dados.
async function criarEPopularTabelaUsuarios(nome, sobrenome, idade, telefone) {
  // Abre uma conexão com o banco de dados 'banco.db'. Se o arquivo não existir, ele será criado.
  const db = await open({
    filename: "./banco.db", // Nome do arquivo do banco de dados.
    driver: sqlite3.Database // Especifica o driver do banco de dados como sqlite3.
  });

  // Executa um comando SQL para criar a tabela 'usuarios' se ela não existir.
  await db.run(
    `CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT, idade TEXT, telefone TEXT)`
  );

  // Executa um comando SQL para inserir um novo usuário na tabela.
  await db.run(
    `INSERT INTO usuarios (nome, sobrenome, idade, telefone) VALUES (?,?,?,?)`,
    [nome, sobrenome, idade, telefone] // Valores a serem inseridos nas colunas da tabela.
  );

  return db; // Retorna a conexão com o banco de dados.
}

// Função assíncrona para deletar um usuário da tabela 'usuarios' com base no ID.
async function deletarUsuarioPorId(id) {
  // Abre uma conexão com o banco de dados 'banco.db'.
  const db = await open({
    filename: "./banco.db",
    driver: sqlite3.Database
  });

  // Executa um comando SQL para deletar o usuário com o ID especificado.
  await db.run(`DELETE FROM usuarios WHERE id = ?`, [id]);
}

// Função assíncrona para limpar todos os registros da tabela 'usuarios'.
async function limparTabelaUsuarios() {
  // Abre uma conexão com o banco de dados 'banco.db'.
  const db = await open({
    filename: "./banco.db",
    driver: sqlite3.Database
  });

  // Executa um comando SQL para deletar todos os registros da tabela.
  await db.run(`DELETE FROM usuarios`);
}

// Função assíncrona para deletar usuários com base na idade.
async function deletarUsuariosPorIdade(idade) {
  // Abre uma conexão com o banco de dados 'banco.db'.
  const db = await open({
    filename: "./banco.db",
    driver: sqlite3.Database
  });

  // Executa um comando SQL para deletar usuários com a idade especificada.
  await db.run(`DELETE FROM usuarios WHERE idade = ?`, [idade]);
}

// Chama a função para criar a tabela e inserir um usuário inicial.
criarEPopularTabelaUsuarios("Daniel", "Porto", "25", "99999999999")
  .then(() => console.log("Tabela criada e populada com sucesso!"))
  .catch((err) => console.error("Erro ao criar ou popular a tabela:", err));

// Função para exibir o menu de opções para o usuário.
function exibirMenu() {
  console.log("Escolha uma opção:");
  console.log("1. Deletar usuário por ID");
  console.log("2. Deletar usuários por idade");
  console.log("3. Limpar tabela");
  console.log("4. Sair");

  // Lê a opção escolhida pelo usuário no console.
  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        // Lê o ID do usuário a ser deletado.
        rl.question("ID do usuário: ", (id) => {
          deletarUsuarioPorId(id)
            .then(() => console.log("Usuário deletado com sucesso!"))
            .catch((err) => console.error("Erro ao deletar usuário:", err))
            .finally(() => exibirMenu()); // Exibe o menu novamente após a operação.
        });
        break;
      case "2":
        // Lê a idade dos usuários a serem deletados.
        rl.question("Idade dos usuários: ", (idade) => {
          deletarUsuariosPorIdade(idade)
            .then(() => console.log("Usuários deletados com sucesso!"))
            .catch((err) => console.error("Erro ao deletar usuários:", err))
            .finally(() => exibirMenu()); // Exibe o menu novamente após a operação.
        });
        break;
      case "3":
        // Limpa a tabela 'usuarios'.
        limparTabelaUsuarios()
          .then(() => console.log("Tabela limpa com sucesso!"))
          .catch((err) => console.error("Erro ao limpar a tabela:", err))
          .finally(() => exibirMenu()); // Exibe o menu novamente após a operação.
        break;
      case "4":
        // Fecha a interface de leitura e encerra o programa.
        rl.close();
        break;
      default:
        // Exibe uma mensagem de erro para opções inválidas.
        console.log("Opção inválida.");
        exibirMenu(); // Exibe o menu novamente.
    }
  });
}

// Chama a função para exibir o menu inicial.
exibirMenu();
