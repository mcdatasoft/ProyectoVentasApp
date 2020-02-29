"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
// Configure Express to serve static files in the public folder
app.use(express.static('public'));
// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/views/index.html');
});
app.get(`/clientes/listado`, async (req, res) => {
    //const publishedPosts = await prisma.posts({ where: { published: true } })
    const users = await prisma.clientes.findMany({
        select: {
            nombre: true,
            apellido: true
        }
    });
    res.json(users);
});
app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
//# sourceMappingURL=server.js.map