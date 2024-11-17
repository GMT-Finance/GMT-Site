const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());

const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

app.get('/stocks/:symbol', async (req, res) => {
    const symbol = req.params.symbol;

    try {
        const response = await axios.get(
            `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados da Alpha Vantage.' });
    }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
