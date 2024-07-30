const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // Porta para o servidor Node.js

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jsonFilePath = path.join(__dirname, 'clientes.json');

// Endpoint para obter todos os clientes
app.get('/api/clientes', (req, res) => {
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler o arquivo JSON.');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint para atualizar um cliente
app.put('/api/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newClientData = req.body;

    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler o arquivo JSON.');
            return;
        }

        const clientes = JSON.parse(data);
        const updatedClientes = clientes.map(cliente =>
            cliente.ID === id ? { ...cliente, ...newClientData } : cliente
        );

        fs.writeFile(jsonFilePath, JSON.stringify(updatedClientes, null, 2), (err) => {
            if (err) {
                res.status(500).send('Erro ao salvar o arquivo JSON.');
                return;
            }
            res.send('Cliente atualizado com sucesso.');
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
