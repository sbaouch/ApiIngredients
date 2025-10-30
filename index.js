import express from "express";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint raíz
app.get("/", (req, res) => {
  res.send("API ingredients activa 🍅");
});

// Endpoint para devolver el JSON
app.get("/ingredientes", async (req, res) => {
    try {
      const filePath = path.join(__dirname, "db.json");
      const data = await fs.readFile(filePath, "utf-8");
      const jsonData = JSON.parse(data);
      res.json(jsonData.ingredientes);
    } catch (error) {
      console.error("Error leyendo db.json:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

// Export necesario para Vercel
export default app;