const express = require('express');
const router = express.Router();

let lotes = [
  {
    id: 1,
    medicamento_id: 1,
    validade: '2025-12-31',
    quantidade: 100,
    data_entrada: '2024-10-01'
  },
  {
    id: 2,
    medicamento_id: 2,
    validade: '2023-05-10',
    quantidade: 50,
    data_entrada: '2023-01-15'
  }
];


router.get('/', (req, res) => {
  res.json(lotes);
});

router.get('/:id', (req, res) => {
  const lote = lotes.find(l => l.id === parseInt(req.params.id));
  if (!lote) return res.status(404).json({ mensagem: 'Lote não encontrado' });
  res.json(lote);
});

router.post('/', (req, res) => {
  const { medicamento_id, validade, quantidade, data_entrada } = req.body;
  const novo = {
    id: lotes.length + 1,
    medicamento_id,
    validade,
    quantidade,
    data_entrada
  };
  lotes.push(novo);
  res.status(201).json(novo);
});

router.put('/:id', (req, res) => {
  const lote = lotes.find(l => l.id === parseInt(req.params.id));
  if (!lote) return res.status(404).json({ mensagem: 'Lote não encontrado' });

  const { medicamento_id, validade, quantidade, data_entrada } = req.body;
  lote.medicamento_id = medicamento_id;
  lote.validade = validade;
  lote.quantidade = quantidade;
  lote.data_entrada = data_entrada;
  res.json(lote);
});


router.delete('/:id', (req, res) => {
  lotes = lotes.filter(l => l.id !== parseInt(req.params.id));
  res.json({ mensagem: 'Lote removido com sucesso' });
});

module.exports = router;