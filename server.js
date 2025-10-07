const express = require('express');
const app = express();
const medicamentoRoutes = require('./routes/medicamento');
const lotesRoutes = require('./routes/lotes');

app.use(express.json());

app.use('/api/medicamento', medicamentoRoutes);
app.use('/api/lotes', lotesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo ao Sistema de Controle de Estoque da Farmácia!</h1><p>Acesse /api/medicamentos ou /api/lotes para começar.</p>');
});
