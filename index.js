const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
  const message = req.body.message;
  if (!message) return res.sendStatus(200);

  const chatId = message.chat.id;
  const text = message.text;

  console.log("Mensaje recibido:", text);

  res.sendStatus(200);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Bot activo"));
