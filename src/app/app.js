import {ComponentService} from "../services/component.service.js" ;
import {ErrorService} from "../services/error.service.js";
import {parseInputs} from "../utils/parse-inputs.js";
import {isValidInputs} from "../utils/validate-inputs.js";



export const runApp = () => {
    const errorService = new ErrorService();
    const componentService = new ComponentService();
    errorService.hideError();
    componentService.onClick(() => {
        const inputs = componentService.getInputs();
        const parsedInputs = parseInputs(...inputs);

        console.log(inputs);
        if (isValidInputs(...parsedInputs)) {
            const [price, quantity, shipping] = parsedInputs;

            // ABSTRACT WITH Class : Component Service
            componentService.setTotalPrice(price * quantity + shipping);
        } else {
            console.log('l');

            // ABSTRACT WITH Class : Component Service
            componentService.setTotalPrice('');

            // ABSTRACT WITH Class : Error Service
            errorService.handleCalculationError(inputs, parsedInputs);
        }
    });
};

