const basePath = "https://www.alphavantage.co/query";

// Função de pesquisa de símbolos de ações (não existe busca exata na Alpha Vantage)
export const searchSymbols = async (query) => {
  const url = `${basePath}?function=TIME_SERIES_DAILY&symbol=${query}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `Ocorreu um erro: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

// Função para buscar detalhes da ação (usando o 'OVERVIEW')
export const fetchStockDetails = async (stockSymbol) => {
  const url = `${basePath}?function=OVERVIEW&symbol=${stockSymbol}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `Ocorreu um erro: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

// Função para buscar cotações (usando o 'TIME_SERIES_DAILY')
export const fetchQuote = async (stockSymbol) => {
  const url = `${basePath}?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `Ocorreu um erro: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  return data["Time Series (Daily)"] ? data["Time Series (Daily)"] : {};
};

// Função para buscar dados históricos (usando 'TIME_SERIES_DAILY')
export const fetchHistoricalData = async (stockSymbol, resolution, from, to) => {
  const url = `${basePath}?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `Ocorreu um erro: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};
