// import dotenv from 'dotenv';
// import cors from 'cors';
// import express from 'express';
// import connectDB from './configs/mongodb.js';

// dotenv.config();

import dns from 'node:dns';

dns.setServers(['8.8.8.8', '8.8.4.4']);

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import connectDB from './configs/mongodb.js';



//APP config

 const  PORT= process.env.PORT || 4000;
const app = express();

await connectDB();

//middlewares 
app.use(cors());
app.use(express.json());    
// api endpoints
app.get('/', (req, res) => {
    res.status(200).json('API is working thank you this is my first api projrct');



});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});