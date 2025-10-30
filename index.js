import express from "express";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint raíz
app.get("/", (req, res) => {
  res.send("API ingredients activa 🍅");
});

// Endpoint para devolver el JSON
app.get("/ingredients", (req, res) => {
  const data = fs.readFileSync("./db.json", "utf-8");
  const jsonData = JSON.parse(data);
  res.json(jsonData.ingredientes);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

// Export necesario para Vercel
export default app;