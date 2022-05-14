let Rate = {
    Eur: {
        "ccy": "EUR",
        "base_ccy": "UAH",
        "buy": "19.20000",
        "sale": "20.00000"
    },
    Usd: {
        "ccy": "USD",
        "base_ccy": "UAH",
        "buy": "15.50000",
        "sale": "15.85000"
    }
}

let usd = Rate.Usd.buy;
export let newUsd = Math.floor(usd * 100) / 100;
let eur = Rate.Eur.buy;
export let newEur = Math.floor(eur * 100) / 100;

