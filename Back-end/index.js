import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const DB_CONNECTION = "mongodb+srv://goog:goog123@cluster0.qkffh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = 5000;

mongoose.connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server connected on Port: ${PORT}`)))
  .catch((error) => console.log(error.message));