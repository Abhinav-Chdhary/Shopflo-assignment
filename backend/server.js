const express = require("express");
const app = express();

//database connection
const mongoDB = require("./db");
mongoDB()
  .then(() => {
    console.log("Database operation completed successfully.");
  })
  .catch((error) => {
    console.error("An error occurred during database operation:", error);
  });

//to allow requests from localhost:5173
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Include the allowed methods
  next();
});

//middleware for using json data format
app.use(express.json());

//handle Post creation
app.use("/api", require("./Routes/createPost"));
//handle Post analysis
app.use("/api", require("./Routes/analyzePost"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000);
