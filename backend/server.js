const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");

//to allow requests from localhost:5173
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

//database connection
const mongoDB = require("./db");
mongoDB()
  .then(() => {
    console.log("Database operation completed successfully.");
  })
  .catch((error) => {
    console.error("An error occurred during database operation:", error);
  });

//middleware for using json data format
app.use(express.json());

//rate limiter
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10 min
  max: 5, //limit ip to 5 requests per windowMs
  handler: (req, res) => {
    res.status(429).json({
      success: false,
    });
  },
});

app.use(limiter);

//handle Post creation
app.use("/api", require("./Routes/createPost"));
//handle Post analysis
app.use("/api", require("./Routes/analyzePost"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000);
