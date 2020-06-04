const express = require("express")
const server = express()

//configurar pasta public
server.use(express.static("public"))

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

//pag. search-results
server.get("/search-results", (req, res) => {
  return res.render("search-results.html")
})

//ligar o servidor
server.listen(3000)