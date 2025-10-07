const express = require('express');
const router = express.Router();

// Dados de exemplo (mock)
let medicamentos = [
  { id: 1, nome: 'Paracetamol', fabricante: 'Neo Química' },
  { id: 2, nome: 'Ibuprofeno', fabricante: 'Medley' }
];

// Listar todos os medicamentos
router.get('/', (req, res) => {
  res.json(medicamentos);
});

// Obter um medicamento por ID
router.get('/:id', (req, res) => {
  const medicamento = medicamentos.find(m => m.id === parseInt(req.params.id));
  if (!medicamento) return res.status(404).json({ mensagem: 'Medicamento não encontrado' });
  res.json(medicamento);
});

// Criar novo medicamento
router.post('/', (req, res) => {
  const { nome, fabricante } = req.body;
  const novo = {
    id: medicamentos.length + 1,
    nome,
    fabricante
  };
  medicamentos.push(novo);
  res.status(201).json(novo);
});

// Atualizar medicamento
router.put('/:id', (req, res) => {
  const medicamento = medicamentos.find(m => m.id === parseInt(req.params.id));
  if (!medicamento) return res.status(404).json({ mensagem: 'Medicamento não encontrado' });

  const { nome, fabricante } = req.body;
  medicamento.nome = nome;
  medicamento.fabricante = fabricante;
  res.json(medicamento);
});

// Deletar medicamento
router.delete('/:id', (req, res) => {
  medicamentos = medicamentos.filter(m => m.id !== parseInt(req.params.id));
  res.json({ mensagem: 'Medicamento removido com sucesso' });
});

module.exports = router;