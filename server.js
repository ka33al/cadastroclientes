const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectDB = require("./database/db")

connectDB();
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded())
app.use(routes);
//rota
app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port, () => {
  console.log(`servidor rodando em htttp://localhost:${port} aproveite`);
});
