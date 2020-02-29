"use strict";
/*
console.log("Try npm run check/fix!");

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = 'am I tabbed?';

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
  //function on one line
  if (!andThose.length) {
    return ;
  }
  console.log(withThis);
  console.log(andThat);
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Saludos, " + person.firstName + " " + person.lastName;
}

let user = new Student("Catherine", "H.", "de Cuadros");

console.log(greeter(user));
*/
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const users = await prisma.clientes.findMany({
        select: {
            nombre: true,
            apellido: true
        }
    });
    console.log(users);
    //return users; dificil pasar a js tendria que saber tipo de retorno mucha cosa
    //crearemos un archivo en js y lo cargaremos en react
    //y al final usaremos axios y al final final apollo client en ves de axios
    //falta agregar yoga al servidor.
    //no se para axios o apollo cliente tendre que configurar puertos distintos en node server???
}
main();
//prisma en express es mejor iniciar asi,
//aunque mejor esta este proyecto por que ya tiene
//listo para funcionar como servidor server ts,
//lo unico es que tiene instalado react, normal
//solo que la pagina index.html de public tiene un react app,
//pertenece al server, igual el react instalado pertenece al server
//ahora instalare aqui angular???
//lo malo es que tiene su propio npm start ng:build ng serve 
//# sourceMappingURL=crud.js.map