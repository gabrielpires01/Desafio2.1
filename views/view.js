import { display, input } from "../utils/index.js";
import { formatAmount, formatRate } from "../utils/formatters.js";

export class ConversionView {
    constructor() {}

    inputOrigin() {
        return input("Moeda origem: ").trim().toUpperCase();
    }

    inputTarget() {
        return input("Moeda destino: ").trim().toUpperCase();
    }

    inputAmount() {
        const amount = input("Valor: ");
        display("");
        return parseFloat(amount);

    }

    displayRate(rate) {
        display(`Taxa: ${formatRate(rate)}\n`);
    }

    displayConversion(currencyFrom, currencyTo, amount, conversion) {
        display(`${currencyFrom} ${formatAmount(amount)} => ${currencyTo} ${formatAmount(conversion)}`);
    }

    exit() {
        display("Saindo...");
    }
}
