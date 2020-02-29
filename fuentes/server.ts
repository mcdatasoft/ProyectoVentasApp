import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import * as express from 'express'
import * as bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

// Configure Express to serve static files in the public folder

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get(`/clientes/listado`, async (req, res) => {
  //const publishedPosts = await prisma.posts({ where: { published: true } })

  const users = await prisma.clientes.findMany({
    select: {
        nombre: true,
        apellido: true
      }
})

  res.json(users)
})

app.listen(3000, () =>
  console.log('Server is running on http://localhost:3000'),
)