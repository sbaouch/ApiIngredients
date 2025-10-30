import express from "express";
import fs from "fs/promises";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("GET /");
  res.send("API de ingredientes activa 🍅");
});

app.get("/ingredientes", async (req, res) => {
  console.log("GET /ingredientes");

  try {
    const filePath = path.join(process.cwd(), "db.json");
    const data = await fs.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(data);

    res.json(jsonData.ingredients);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});

export default app;