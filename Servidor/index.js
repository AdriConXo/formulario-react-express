const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors()); // Permite que el cliente acceda
app.use(express.urlencoded({ extended: true })); // Parsear datos tipo x-www-form-urlencoded

app.post('/form', (req, res) => {
  const { nombre, correo } = req.body;

  console.log(`📨 Nombre recibido: ${nombre}`);
  console.log(`📧 Correo recibido: ${correo}`);

  res.json({ mensaje: `Hola ${nombre}, recibimos tu correo ${correo} correctamente.` });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});
