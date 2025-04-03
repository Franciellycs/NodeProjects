import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './middlewares/routes.js';

//Padrão de Exportação CommonJS -> Require --> const http = require('http')
//ESModules é o mais utilizado -> import/export --> http = require('http')

const server = http.createServer(async(req, res) => {
     const { method, url } = req

     await json(req, res)

     const route = routes.find(route => {
          return route.method === method && route.path === url

     } )


     if (route) {
          return route.handler(req, res)
     }

     console.log(json)

     return res.writeHead(404).end('not found')

     

})

server.listen(3333) //localhost
