import { error } from "./index.js";

function currenciesAreEqual(from, to) {
    if (from === to) {
        error("Currencies must be different");
        return true;
    }
    return false;
}

function isValidCurrency(currency) {
    if (currency?.length !== 3) {
        error("Currencies must be 3 characters long");
        return false;
    }
    return true;
}

function isValidAmount(amount) {
    if (amount <= 0) {
        error("Amount must be greater than 0");
        return false;
    }
    return true;
}

function shouldTerminate(currency) {
    if (currency === "") {
        return true;
    }
    return false;
}

function isValidOriginCurrency(currency) {
    return shouldTerminate(currency) || isValidCurrency(currency);
}

function isValidTargetCurrency(currency, from) {
    return !currenciesAreEqual(from, currency) && isValidCurrency(currency);
}

export {
    currenciesAreEqual,
    isValidAmount,
    shouldTerminate,
    isValidOriginCurrency,
    isValidTargetCurrency
}
