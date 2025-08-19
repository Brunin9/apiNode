const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API rodando");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

