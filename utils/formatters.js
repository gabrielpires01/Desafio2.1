function formatDisplayNumber(number) {
    return new Intl.NumberFormat('pt-BR').format(number);
}

function formatAmount(amount) {
    return formatDisplayNumber(parseFloat(amount).toFixed(2));
}

function formatRate(rate) {
    return formatDisplayNumber(parseFloat(rate).toFixed(6));
}

export {
    formatAmount,
    formatRate
}
