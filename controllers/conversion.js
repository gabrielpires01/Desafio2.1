import { loopValidation } from "../utils/index.js";
import { isValidAmount, isValidOriginCurrency, isValidTargetCurrency } from "../utils/validations.js";

export class ConversionController {
    constructor() {}

    async convertCurrency(view, conversionService) {
        const from = loopValidation(() => view.inputOrigin(), isValidOriginCurrency);
        if (from === "") {
            view.exit();
            return 1;
        }
        const to = loopValidation(() => view.inputTarget(), isValidTargetCurrency);
        const amount = loopValidation(() => view.inputAmount(), isValidAmount);

        const data = await conversionService.fecthRate(from, to, amount);
        if (data === undefined) {
            return 0;
        }
        const { rate, conversion } = data;

        view.displayConversion(from, to, amount, conversion);
        view.displayRate(rate);
        return 0;
    }

}
