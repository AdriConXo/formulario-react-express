const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/form', (req, res) => {
  console.log('📨 Datos recibidos:', req.body);
  res.json({ mensaje: 'Formulario recibido con éxito ', datos: req.body });
});

app.listen(PORT, () => {
  console.log(` Servidor listo en http://localhost:${PORT}`);
});
