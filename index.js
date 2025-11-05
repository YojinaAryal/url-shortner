const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");

const app = express(); 
const port = 8000;

app.use(express.json()); 

connectToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB connected!"));


app.use("/url", urlRoute);


app.listen(port, () => console.log(`SERVER STARTED AT PORT: ${port}`));

