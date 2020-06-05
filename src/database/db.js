//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que fará operações no bando de dados
const db = new sqlite3.Database("./src/database/database.db")

//exportar o bando de dados
module.exports = db

//utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
  // 1 criar uma tabela
  /* db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      image TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );
  `)
  // 2 inserir dados na tabela
  const query = `
    INSERT INTO places (
      name,
      image,
      address,
      address2,
      state,
      city,
      items
    ) VALUES (?,?,?,?,?,?,?);
  `

  const values = [
    "Paperider",
    "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "Guilherme Gembala, Jardim América",
    " Nº 260 ",
    "Santa Catarina",
    "Rio do Sul",
    "Resíduos Eletrônicos, Lâmpadas"
  ]

  function afterInsertData(err){
    if(err) {
      return console.log(err)
    }
    console.log("Cadastrado com sucesso")
    console.log(this)
  }

  db.run(query, values, afterInsertData) */

  // 3 consultar dados na tabela
/*   db.all(`SELECT * FROM places`, function(err, rows){
    if(err) {
      return console.log(err)
    }
    console.log("Aqui estão seus registros: ")
    console.log(rows)
  }) */

  // 4 deletar dados da tabela
/*   db.run(`DELETE FROM places WHERE id = ?`, [14], function(err){
    if(err) {
      return console.log(err)
    }
      console.log("Registro deletado!")
  }) 
 */
})