import { error } from "../utils/index.js";

const URL = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/`;

export class ConversionService {
    constructor() {}

    async fecthRate(from, to, amount) {
        try {
            const result = await fetch(`${URL}${from}/${to}/${amount}`);
            const data = await result.json();
            const response = this.validateResponse(data);
            if (!response) {
                return;
            }
            const rate = data.conversion_rate;
            const conversion = data.conversion_result;
            return {
                rate,
                conversion
            }
        } catch (err) {
            error(err);
        }
    }

    validateResponse(response) {
        if (response.result === "error") {
            switch (response["error-type"]) {
                case "unsupported-code":
                    error("Suplied currency is not supported");
                    break;
                case "malformed-request":
                    error("Malformed request, please try again");
                    break;
                case "invalid-key":
                    error("Api key is invalid");
                    break;
                case "quota-reached":
                    error("Quota reached, please try again later");
                    break;
                case "inactive-account":
                    error("Inactive account");
                    break;
                default:
                    error("Something went wrong");
            }
            return false
        }
        return response
    }
}
