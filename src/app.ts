import express, { Application, Request, Response } from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser'
const app: Application = express()

// json parser
app.use(express.json());
// cookie parser
app.use(cookieParser())
// cors middleware
app.use(cors());



app.get('/', (req: Request, res: Response) => {
  res.send('Hello Biker! Welcome to the Biker Rental Service.')
})

export default app;