import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

// HTTP Method: GET (listar algo), POST (criar algo), PUT (atualizar algo), PATCH (atualizar algo especifico), DELETE (deletar algo)
// first route /hello (is a adress), return is a return message
app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP is running on http://localhost:3333')
  })
