import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRoutes from './routes/users.js'


const app = express();

const port = 5000;


app.use(bodyParser.json())
app.use(express.json());
app.use(cors())

app.use('/', userRoutes)

app.get('/', (req,res)=>{
    res.send("Hello World")
})

app.use("*", (req,res) => res.send("The route dosent exist"))

app.listen(port, (req,res)=>{
    console.log("Connected to port");
})