const express = require('express');
const fs = require('fs/promises');

const app = express();
const port = 3000;

app.put('/api/clientes', async (req, res) => {
  const cliente = req.body;
  const id = cliente.id; // Assumindo que o ID está presente no objeto cliente

  // Lógica para atualizar o arquivo JSON (similar à função original)
  try {
    // ... (código para ler, atualizar e gravar o arquivo JSON)
    res.status(200).json({ message: 'Cliente atualizado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar cliente'   
 });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
