import sqlite3 from "sqlite3";
import { open } from "sqlite";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function criarEPopularTabelaUsuarios(nome, sobrenome, idade, telefone) {
  const db = await open({
    filename: "./banco.db",
    driver: sqlite3.Database
  });
  await db.run(
    `CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT, idade TEXT, telefone TEXT)`
  );
  await db.run(
    `INSERT INTO usuarios (nome, sobrenome, idade, telefone) VALUES (?,?,?,?)`,
    [nome, sobrenome, idade, telefone]
  );
  return db;
}

async function deletarUsuarioPorId(id) {
  const db = await open({
    filename: "./banco.db",
    driver: sqlite3.Database
  });
  await db.run(`DELETE FROM usuarios WHERE id = ?`, [id]);
}

async function limparTabelaUsuarios() {
  const db = await open({
    filename: "./banco.db",
    driver: sqlite3.Database
  });
  await db.run(`DELETE FROM usuarios`);
}

async function deletarUsuariosPorIdade(idade) {
  const db = await open({
    filename: "./banco.db",
    driver: sqlite3.Database
  });
  await db.run(`DELETE FROM usuarios WHERE idade = ?`, [idade]);
}

criarEPopularTabelaUsuarios("Daniel", "Porto", "25", "99999999999")
  .then(() => console.log("Tabela criada e populada com sucesso!"))
  .catch((err) => console.error("Erro ao criar ou popular a tabela:", err));

function exibirMenu() {
  console.log("Escolha uma opção:");
  console.log("1. Deletar usuário por ID");
  console.log("2. Deletar usuários por idade");
  console.log("3. Limpar tabela");
  console.log("4. Sair");

  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("ID do usuário: ", (id) => {
          deletarUsuarioPorId(id)
            .then(() => console.log("Usuário deletado com sucesso!"))
            .catch((err) => console.error("Erro ao deletar usuário:", err))
            .finally(() => exibirMenu());
        });
        break;
      case "2":
        rl.question("Idade dos usuários: ", (idade) => {
          deletarUsuariosPorIdade(idade)
            .then(() => console.log("Usuários deletados com sucesso!"))
            .catch((err) => console.error("Erro ao deletar usuários:", err))
            .finally(() => exibirMenu());
        });
        break;
      case "3":
        limparTabelaUsuarios()
          .then(() => console.log("Tabela limpa com sucesso!"))
          .catch((err) => console.error("Erro ao limpar a tabela:", err))
          .finally(() => exibirMenu());
        break;
      case "4":
        rl.close();
        break;
      default:
        console.log("Opção inválida.");
        exibirMenu();
    }
  });
}

exibirMenu();
