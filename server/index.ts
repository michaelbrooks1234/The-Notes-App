import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();

const options: cors.CorsOptions = {
  origin: true,
}

const app = express();
app.use(cors(options));

const port = 3000;

app.get('/', (req, res) => {
  res.send({'data': 'Hello World'});
})

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
})

async function main() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

// main()
//   .catch(async (e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   })