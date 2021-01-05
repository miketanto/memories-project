import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts',postRoutes);//Route is reached only if "".../posts" is used

const CONNECTION_URL = 'mongodb+srv://memories-project-user:Indrasari_12@cluster0.fddwf.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
const opts = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
};
mongoose.connect(CONNECTION_URL,opts)
    .then(() => app.listen(PORT,() => console.log(`Server running on port : ${PORT}`)))
    .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify', false);

