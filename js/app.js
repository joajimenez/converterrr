import { UI } from './ui.js';
import { symbols } from './ui.js';
import { getCurrencies } from './get_currency_rates.js';

UI.startButton.addEventListener('click', () => {
  UI.introContainer.classList.add('hidden');
  UI.operationsContainer.classList.remove('hidden');

  symbols.forEach((symbol) => {
    UI.fromCurrency.innerHTML += `<option value="${symbol}">${symbol}</option>`;
    UI.toCurrency.innerHTML += `<option value="${symbol}">${symbol}</option>`;
  });
});

UI.convertButton.addEventListener('click', () => {
  const fromCurrency = UI.fromCurrency.value;
  const toCurrency = UI.toCurrency.value;
  const amount = UI.amount.value;

  getCurrencies(fromCurrency, toCurrency).then((data) => {
    const rate = data.rates[toCurrency];

    const total = amount * rate;

    UI.display.innerHTML = `$${new Intl.NumberFormat().format(
      amount
    )} ${fromCurrency} = $${new Intl.NumberFormat().format(
      total
    )} ${toCurrency}`;

    UI.baseAmount.innerText = '1';
    UI.baseAmountCurrency.innerText = fromCurrency;
    UI.fromAmountUnit.innerText = 1 * rate;
    UI.fromAmountCurrency.innerText = fromCurrency;
  });

  UI.rateContainer.classList.remove('hidden');
});
