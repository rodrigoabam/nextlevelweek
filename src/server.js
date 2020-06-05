const express = require("express")
const server = express()

//importar o db
const db = require("./database/db.js")

//configurar pasta public
server.use(express.static("public"))

//habilitar o uso do rec.body
server.use(express.urlencoded({ extended: true}))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

//configurar caminhos da minha aplicação
//pag. index - req:requisição , res:resposta
server.get("/", (req, res) => {
  return res.render("index.html")
})

//pag. create-point
server.get("/create-point", (req, res) => {

  return res.render("create-point.html")
})


server.post("/savepoint", (req, res) => {
  //inserir dados no banco de dados
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
    req.body.name,
    req.body.image,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ]

  function afterInsertData(err){
    if(err) {
      console.log(err)
      return res.send("Erro no cadastro!")
    }

    console.log("Cadastrado com sucesso")
    console.log(this)

    return res.render("create-point.html", {saved: true})
  }

  db.run(query, values, afterInsertData)
  
})



//pag. search-results
server.get("/search-results", (req, res) => {
  const search = req.query.search

  if(search == "") {
    //pag vazia 
    return res.render("search-results.html", { total: 0 })

  }

  //pegar os dados do db
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
    if(err) {
      return console.log(err)
    }

    const total = rows.length

    //mostrar a pasta html com os bancos de dados
    return res.render("search-results.html", { places: rows, total: total })
  })

})

//ligar o servidor
server.listen(3000)