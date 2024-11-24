import PromptSync from "prompt-sync";

const prompt = PromptSync({
    sigint: true,
});

function input(message) {
    return prompt(message);
}

function display(message) {
    console.log(message);
}

function error(message) {
    console.error("Error: " + message);
}

function loopValidation(callback, validator) {
    let value;
    while (value === undefined || !validator(value)) {
        value = callback();
    }
    return value;
}

export {
    input,
    display,
    loopValidation,
    error
}
