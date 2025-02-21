import express  from 'express';
import crypto from 'crypto';
import Encryption from './encryption.js'; 

const app = express();
app.use(express.json());
const port = 3000;

//key and initialization vector for encryptiong users and passwords
const secret_key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


//route active server
app.get('/',(req,res)=>{
  res.send('Servidor ativo!');
});


/*
USER ROUTES(CRUD):
[] CREATE
[] GET
[] UPDATE
[] DELETE
*/


//route create user
app.post('/createUser',(req,res)=>{
  const {username,password} = req.body;
  console.log(username);
  console.log(password);
  res.status(200).send('ok');
});


//general server settings
const server = app.listen(port,()=>{
  console.log(`Servidor ativo em https://localhost:${port}`);
});


//closes the process when control c is pressed
process.on('SIGINT',()=>{
  console.log("\nEncerrando servidor...");
  server.close(()=>{
    console.log('Servidor encerrado!');
    process.exit(0);
  });
});