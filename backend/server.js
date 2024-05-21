import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Post from './models/post.js';
import User from './models/user.js';
import { users, posts} from "./data.js";
import userRouter from './routes/user.js';
import postRouter from './routes/post.js';
import seedRouter from './routes/seedRoutes.js';


dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // Post.insertMany(posts);
    // User.insertMany(users);
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/posts', postRouter);
app.use('/api/user', userRouter);
app.use('/api/seed', seedRouter);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});