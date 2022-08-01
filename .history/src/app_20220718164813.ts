import express  from "express";
import config from 'config'

const app = express()

//JSON middleware
app.use(express.json())