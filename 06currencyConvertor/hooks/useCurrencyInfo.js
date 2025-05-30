// import { useEffect,useState } from "react";
// //create hook

// // Hooks allow function components to have access to state and other React features.
// function useCurrencyInfo(currency){
// // call API
// useEffect(())
// }
// Perfect! Now that you've sent all the files (`App.jsx`, `useCurrencyInfo.js`, `InputBox.js`, and `index.js`), here’s the complete explanation compiled in a **Notion-friendly format**.

// ---

// # 💱 Currency Converter App – Full Breakdown & Concepts

// ---

// ## 📁 File Structure

// ```
// src/
// ├── App.jsx
// ├── components/
// │   ├── InputBox.jsx
// │   └── index.js
// ├── hooks/
// │   └── useCurrencyInfo.js
// ```

// ---

// ## 1. 🧠 `App.jsx` – Main Component

// ### ✅ Purpose:

// Provides the UI and logic to:

// * Input an amount in one currency
// * Convert it to another using exchange rates
// * Swap currencies
// * Display results

// ---

// ### 🔧 Key Concepts

// #### 🔹 `useState` (React Hook)

// Used to track:

// ```js
// const [amount, setAmount] = useState(0)
// const [from, setFrom] = useState("usd")
// const [to, setTo] = useState("inr")
// const [convertedAmount, setConvertedAmount] = useState(0)
// ```

// These are reactive variables. When they change, the UI re-renders.

// ---

// #### 🔹 Custom Hook: `useCurrencyInfo(from)`

// ```js
// const currencyInfo = useCurrencyInfo(from)
// ```

// This fetches live exchange rates from an API. Details below.

// ---

// #### 🔹 `options = Object.keys(currencyInfo)`

// Gets all currency codes from the fetched data to use in the dropdown menus.

// Example:

// ```js
// {
//   inr: 83.12,
//   eur: 0.93,
//   ...
// }
// ```

// `Object.keys()` ➝ `['inr', 'eur', ...]`

// ---

// #### 🔁 Swap Function

// ```js
// const swap = () => {
//   setFrom(to)
//   setTo(from)
//   setConvertedAmount(amount)
//   setAmount(convertedAmount)
// }
// ```

// Swaps source and target currencies, as well as values.

// ---

// #### 🔁 Convert Function

// ```js
// const convert = () => {
//   setConvertedAmount(amount * currencyInfo[to])
// }
// ```

// Performs actual currency conversion using exchange rate from `currencyInfo[to]`.

// ---

// #### 🖼️ JSX & Tailwind Styling

// ```js
// <div className="w-full h-screen flex flex-wrap ...">
// ```

// * Background image applied using inline `style`.
// * Tailwind CSS used for quick, responsive styling.

// ---

// ## 2. 🔌 `useCurrencyInfo.js` – Custom Hook

// ### ✅ Purpose:

// Fetch exchange rates dynamically based on selected currency.

// ---

// ### 🔧 Explanation

// ```js
// const [data, setData] = useState({})
// ```

// Initial state for storing API response.

// ---

// #### 📞 `useEffect` (React Hook)

// ```js
// useEffect(() => {
//   fetch(`https://cdn.jsdelivr.net/.../${currency}.json`)
//     .then((res) => res.json())
//     .then((res) => setData(res[currency]))
// }, [currency])
// ```

// * Runs when `currency` changes.
// * Calls API: [Currency API](https://github.com/fawazahmed0/currency-api)
// * Updates `data` with the currency rates.

// ---

// ### ⚠️ Note:

// Console logs are present inside and outside the `useEffect`, but the outer one won't see updated `data` due to React's async state updates.

// ---

// ## 3. 🧩 `InputBox.jsx` – Reusable Component

// **(Assumed from usage)**

// Used twice:

// 1. To input the amount and select "From" currency
// 2. To show the converted amount in "To" currency

// Props passed:

// * `label`: Label text ("From" / "To")
// * `amount`: Input value
// * `currencyOptions`: Dropdown list
// * `selectCurrency`: Currently selected value
// * `onCurrencyChange`: Updates selected currency
// * `onAmountChange`: Updates entered amount
// * `amountDisable`: Optional prop to disable the amount input

// You can format it like:

// ```js
// const InputBox = ({
//   label,
//   amount,
//   currencyOptions,
//   onCurrencyChange,
//   selectCurrency,
//   onAmountChange,
//   amountDisable
// }) => { ... }
// ```

// ---

// ## 4. 🌐 API Call Explanation

// ### 🔗 API Used:

// ```
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/{currency}.json
// ```

// Example:

// ```
// https://.../usd.json
// ```

// Returns:

// ```json
// {
//   "date": "2025-05-29",
//   "usd": {
//     "inr": 83.12,
//     "eur": 0.93,
//     ...
//   }
// }
// ```

// ### How it works:

// * Fetches latest currency exchange rates for a base currency.
// * Converts entered amount using the formula:

// ```js
// convertedAmount = amount * currencyInfo[to]
// ```

// ---

// ## 🧵 Bonus: React Concepts Summary

// ### 🔹 **Hooks**:

// Functions like `useState`, `useEffect` that let you "hook into" React features from function components.

// * `useState` → Manages local state
// * `useEffect` → Runs side effects like API calls
// * Custom Hooks → Logic reuse (e.g., `useCurrencyInfo`)

// ---

// ## 📌 Final Notes

// * Clean separation of logic (`useCurrencyInfo`) and UI (`InputBox`).
// * Tailwind makes styling responsive and fast.
// * Easy to scale this into a production-grade app with features like:

//   * Currency icons
//   * Historical conversion charts
//   * Form validations

// ---

// If you want, I can turn this into a **Notion page export file** or give you **markdown** to paste directly into Notion with headings, code blocks, and sections. Would you like that?
