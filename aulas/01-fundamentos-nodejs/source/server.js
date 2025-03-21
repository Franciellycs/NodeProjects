import http from 'node:http'

//Padrão de Exportação CommonJS -> Require --> const http = require('http')
//ESModules é o mais utilizado -> import/export --> http = require('http')

const users = []

const server = http.createServer((req, res) => {
     const { mehod, URL } = req

     if (method == 'GET' && url == '/users'){
          return res
          .setHeader('Content-type', 'application/json')
          .end(JSON.stringify(users))
     }

     if (method == 'POST' && url == 'users'){
          users.push({
               id: 1,
               name: 'John Doe',
               email: 'johndoe@example.com',
          })

          return res.writeHead(201).end()
     }

     return res.writeHead(404).end('not found')

} )

server.listen(3333) //localhost
