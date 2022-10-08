import { API_KEY } from './api_key.js';

export const getCurrencies = async function (fromCurrency, toCurrency) {
  try {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'fixer-fixer-currency-v1.p.rapidapi.com',
      },
    };

    const response = await fetch(
      `https://fixer-fixer-currency-v1.p.rapidapi.com/latest?base=${fromCurrency}&symbols=${toCurrency}`,
      options
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error: `, error);
  }
};
