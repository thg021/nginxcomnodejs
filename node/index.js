const express = require('express')
const mysql = require('mysql')
const path = require('path');
const PORT = 3000
const app = express()
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'desafio'
}

const connection =  mysql.createConnection(config)


app.set('view engine', 'ejs') 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  const sql = 'select * from people'

  connection.query(sql, (err, rows) => {
    const users = JSON.parse(JSON.stringify(rows))
    let elem = ''
    for(let i = 0; i <= users.length -1; i++){
      elem += `<li>${users[i].title}</li>`
    }
    response.render('pages/list', {
        users
    })
  })


  connection.end
})

app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`)
})