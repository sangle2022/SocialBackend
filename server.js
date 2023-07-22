const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const app = express();

const posts = require("./routes/posts");
const users = require("./routes/users");
const comments = require("./routes/comments");



dotenv.config();

const httpServer = require("http").createServer(app);


mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDB connected");
  }
);


httpServer.listen(process.env.PORT || 4000, () => {
  console.log("Listening");
});
app.get('/',(req,res)=>{
  res.send("welcome")
})
app.use(express.json());
app.use(cors());
app.use("/api/posts", posts);
app.use("/api/users", users);
app.use("/api/comments", comments);



