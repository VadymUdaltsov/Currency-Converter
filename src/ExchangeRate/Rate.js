let Rate = {
    Usd: {
        "ccy": "USD",
        "base_ccy": "UAH",
        "buy": "29.5049"
    },
    Eur: {
        "ccy": "EUR",
        "base_ccy": "UAH",
        "buy": "30.7268"
    }
}

let usd = Rate.Usd.buy;
export let newUsd = Math.floor(usd * 100) / 100;
let eur = Rate.Eur.buy;
export let newEur = Math.floor(eur * 100) / 100;
