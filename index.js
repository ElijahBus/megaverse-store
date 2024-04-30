import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

import router from './controller.js';

const PORT = 3006;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(router);

mongoose.connect(process.env.MONGODB_URL, {})
  .then(() => { console.log('MONGO Database connected.. '); });

app.listen(PORT, () => console.log('APP LISTENING ON PORT ' + PORT));


