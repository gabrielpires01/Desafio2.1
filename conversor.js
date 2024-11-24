import { ConversionController } from "./controllers/conversion.js";
import { ConversionService } from "./services/conversion.js";
import { ConversionView } from "./views/view.js";

async function main() {
    const conversionController = new ConversionController();
    const view = new ConversionView();
    const conversionService = new ConversionService();

    let exit = 0;
    while (!exit) {
        exit = await conversionController.convertCurrency(view, conversionService);
    }
}

main();
