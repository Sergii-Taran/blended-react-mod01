// Задача 2
// Опис: Є функція, яка приймає суму (число) та тип валюти.

// function convertCurrency({amount, currency}) {
//   console.log(`Converting ${amount} to ${currency}`);
// }

// Завдання:
// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.

// ----------------------------

// type Currency = "USD" | "EUR" | "UAH";

// function convertCurrency({
//   amount,
//   currency,
// }: {
//   amount: number;
//   currency: Currency;
// }): void {
//   console.log(`Converting ${amount} to ${currency}`);
// }

// ---------------------------

type Currency = "USD" | "EUR" | "UAH";

interface ConvertCurrencyParams {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConvertCurrencyParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 100, currency: "USD" }); // ✅
convertCurrency({ amount: 100, currency: "PLN" }); // ❌ помилка
