import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import articleRoute from "./routes/ArticleRoutes.js";
import commentRoute from "./routes/CommentRoutes.js"

const app = express();

mongoose.connect("mongodb+srv://root:root@cluster0.56p423q.mongodb.net/?retryWrites=true&w=majority",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/article",articleRoute)
app.use("/comment",commentRoute)

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello World!!!" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});