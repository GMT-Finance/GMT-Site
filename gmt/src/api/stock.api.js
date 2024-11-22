const basePath = "https://finnhub.io/api/v1";
const apiKey = "csobmo1r01qt3r34952gcsobmo1r01qt3r349530";



// Validação inicial da chave de API
if (!apiKey) {
  console.error("A chave de API não foi definida. Verifique o arquivo .env.");
  throw new Error("Chave de API ausente.");
}

/**
 * Searches best stock matches based on a user's query
 * @param {string} query - The user's query, e.g. 'fb'
 * @returns {Promise<Object[]>} Response array of best stock matches
 */
export const searchSymbols = async (query) => {
  try {
    const url = `${basePath}/search?q=${query}&token=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      const message = `Erro ao buscar símbolos: ${response.status} (${response.statusText}). Endpoint: ${url}`;
      throw new Error(message);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro em searchSymbols:", error.message);
    throw error;
  }
};

/**
 * Fetches the details of a given company
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @returns {Promise<Object>} Response object
 */
export const fetchStockDetails = async (stockSymbol) => {
  try {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      const message = `Erro ao buscar detalhes da ação: ${response.status} (${response.statusText}). Endpoint: ${url}`;
      throw new Error(message);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro em fetchStockDetails:", error.message);
    throw error;
  }
};

/**
 * Fetches the latest quote of a given stock
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @returns {Promise<Object>} Response object
 */
export const fetchQuote = async (stockSymbol) => {
  try {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      const message = `Erro ao buscar cotação: ${response.status} (${response.statusText}). Endpoint: ${url}`;
      throw new Error(message);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro em fetchQuote:", error.message);
    throw error;
  }
};

/**
 * Fetches historical data of a stock (to be displayed on a chart)
 * @param {string} stockSymbol - Symbol of the company, e.g. 'FB'
 * @param {string} resolution - Resolution of timestamps. Supported resolution includes: 1, 5, 15, 30, 60, D, W, M
 * @param {number} from - UNIX timestamp (seconds elapsed since January 1st, 1970 at UTC). Interval initial value.
 * @param {number} to - UNIX timestamp (seconds elapsed since January 1st, 1970 at UTC). Interval end value.
 * @returns {Promise<Object>} Response object
 */
export const fetchHistoricalData = async (
  stockSymbol,
  resolution,
  from,
  to
) => {
  try {
    const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      const message = `Erro ao buscar dados históricos: ${response.status} (${response.statusText}). Endpoint: ${url}`;
      throw new Error(message);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro em fetchHistoricalData:", error.message);
    throw error;
  }
};
