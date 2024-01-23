const express = require("express");
const app = express();

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
