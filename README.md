## Exemplo: Criar e Popular uma Tabela no SQLite com JavaScript

O código abaixo demonstra como criar uma tabela chamada `usuarios` em um banco de dados SQLite e inserir dados nela utilizando as bibliotecas `sqlite3` e `sqlite` no Node.js.

### Código

````javascript
import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function criarEPopularTabelaUsuarios(nome, sobrenome) {
  // Abre ou cria o banco de dados "banco.db"
  const db = await open({
    filename: "./banco.db", // Nome do arquivo do banco de dados
    driver: sqlite3.Database, // Driver do SQLite
  });

  // Cria a tabela "usuarios" se ela não existir
  await db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY,
      nome TEXT,
      sobrenome TEXT
    )
  `);

  // Insere os dados fornecidos na tabela "usuarios"
  await db.run(
    `INSERT INTO usuarios (nome, sobrenome) VALUES (?, ?)`,
    [nome, sobrenome]
  );
}

// Chama a função para criar a tabela e inserir um usuário
criarEPopularTabelaUsuarios("Daniel", "Porto");
//O código fornecido é um exemplo de como criar e popular uma tabela em um banco de dados SQLite usando JavaScript. Aqui está uma explicação detalhada que pode ser salva no README.md:

```markdown
## Exemplo: Criar e Popular uma Tabela no SQLite com JavaScript

O código abaixo demonstra como criar uma tabela chamada `usuarios` em um banco de dados SQLite e inserir dados nela utilizando as bibliotecas `sqlite3` e `sqlite` no Node.js.

### Código

```javascript
import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function criarEPopularTabelaUsuarios(nome, sobrenome) {
  // Abre ou cria o banco de dados "banco.db"
  const db = await open({
    filename: "./banco.db", // Nome do arquivo do banco de dados
    driver: sqlite3.Database, // Driver do SQLite
  });

  // Cria a tabela "usuarios" se ela não existir
  await db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY,
      nome TEXT,
      sobrenome TEXT
    )
  `);

  // Insere os dados fornecidos na tabela "usuarios"
  await db.run(
    `INSERT INTO usuarios (nome, sobrenome) VALUES (?, ?)`,
    [nome, sobrenome]
  );
}

// Chama a função para criar a tabela e inserir um usuário
criarEPopularTabelaUsuarios("Daniel", "Porto");
````

### Explicação

1. **Importação de bibliotecas**:

   - `sqlite3`: Biblioteca que fornece o driver SQLite.
   - `sqlite`: Biblioteca que facilita o uso do SQLite com suporte a Promises.

2. **Função `criarEPopularTabelaUsuarios`**:

   - Abre ou cria o banco de dados `banco.db` usando o driver do SQLite.
   - Cria a tabela `usuarios` com as colunas:
     - `id`: Chave primária do tipo inteiro.
     - `nome`: Nome do usuário (texto).
     - `sobrenome`: Sobrenome do usuário (texto).
   - Insere os valores fornecidos como parâmetros (`nome` e `sobrenome`) na tabela.

3. **Execução**:
   - A função é chamada com os valores `"Daniel"` e `"Porto"`, que são inseridos na tabela `usuarios`.

### Requisitos

- Node.js instalado.
- Dependências necessárias:
  ```bash
  npm install sqlite3 sqlite
  ```

### Resultado

Após executar o código, o banco de dados `banco.db` será criado (se ainda não existir) e conterá uma tabela `usuarios` com os dados inseridos.
