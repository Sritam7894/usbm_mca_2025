const express = require("express");

const app = express();

app.get("/",(req, res) => {
 res.send("Home page");
});

app.get("/",(req, res) => {
  res.send("sevice page");
 });

 app.get("/",(req, res) => {
  res.send("about page");
 });
 
app.post();
app.put();
app.delete();


app.listen(port, () => {
  console.log(`server is running now on port ${port}`);
});

