import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function criarEPopularTabelaUsuarios(nome, sobrenome, idade, telefone) {
  const db = await open({
    filename: "./banco.db",
    driver: sqlite3.Database
  });
  db.run(
    `CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT, idade TEXT, telefone TEXT)`
  );
  db.run(
    `INSERT INTO usuarios (nome, sobrenome, idade, telefone) VALUES (?,?,?,?)`,
    [nome, sobrenome, idade, telefone]
  );
}
criarEPopularTabelaUsuarios("Daniel", "Porto", "25");
criarEPopularTabelaUsuarios("Lucas", "Porto", "25", "99999999999")
  .then(() => console.log("Tabela criada e populada com sucesso!"))
  .catch((err) => console.error("Erro ao criar ou popular a tabela:", err));
