import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function criarEPopularTabelaUsuarios(nome, sobrenome, idade) {
  const db = await open({
    filename: "./banco.db",
    driver: sqlite3.Database
  });
  db.run(
    `CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT, idade INTEGER)`
  );
  db.run(`INSERT INTO usuarios (nome, sobrenome, idade) VALUES (?,?,?)`, [
    nome,
    sobrenome,
    idade
  ]);
}
criarEPopularTabelaUsuarios("Daniel", "Porto", 25)
  .then(() => console.log("Tabela criada e populada com sucesso!"))
  .catch((err) => console.error("Erro ao criar ou popular a tabela:", err));
