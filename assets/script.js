let dolar = 5.1;

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl");
});

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd");
});

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value);
});

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value);
});

usdInput.value = "1000,00";
convert("usd-to-brl");

// Functions
function formatCurrency(value) {
    let fixedValue = fixValue(value);
    let options = {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    };
    let formatter = new Intl.NumberFormat("pt-BR", options);
    return formatter.format(fixedValue);
}

function fixValue(value) {
    if (typeof value === "string") {
        value = value.replace(",", ".").replace(/[^\d.]/g, ""); // Remove caracteres inválidos
    }
    let floatValue = parseFloat(value);
    return Number.isNaN(floatValue) ? 0 : floatValue;
}

function convert(type) {
    if (type == "usd-to-brl") {
        let fixedValue = fixValue(usdInput.value);
        let result = (fixedValue * dolar).toFixed(2);
        brlInput.value = formatCurrency(result);
    }

    if (type == "brl-to-usd") {
        let fixedValue = fixValue(brlInput.value);
        let result = (fixedValue / dolar).toFixed(2);
        usdInput.value = formatCurrency(result);
    }
}
