import express from "express";
import path from "node:path";

const app = express();
const distPath = path.resolve(process.cwd(), "dist");

app.use(express.static(distPath));
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
