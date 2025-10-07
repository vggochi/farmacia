
const db = require('../database');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS medicamentos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      fabricante TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS lotes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      medicamento_id INTEGER,
      validade TEXT,
      quantidade INTEGER,
      data_entrada TEXT,
      FOREIGN KEY (medicamento_id) REFERENCES medicamentos(id)
    )
  `);
});

console.log("Tabelas criadas!");
