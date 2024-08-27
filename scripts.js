const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectFrom = document.querySelector(".currency-select-from")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.49
    const euroToday = 6.14
    const libraToday = 7.25
    const realToday = 0.20

    if (currencySelectFrom.value === currencySelect.value) {
        alert("A moeda de origem e a moeda de destino não podem ser a mesma.");
        return;
    }

    if (currencySelectFrom.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToday)
    }

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyValueConverted = document.querySelector(".currency-value")
    

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
        currencyValueConverted.textContent = "$ 0.00"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
        currencyValueConverted.textContent = "€ 0.00"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
        currencyValueConverted.textContent = "£ 0.00"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/real.png"
        currencyValueConverted.textContent = "R$ 0.00"
    }

}

function changeCurrencyFrom() {
    const currencyNam = document.querySelector(".currency")
    const currencyImg = document.querySelector(".img-bandeira")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    document.querySelector(".input-currency").value = "";
    currencyValueToConvert.textContent = "0.00";

    if (currencySelectFrom.value == "dolar") {
        currencyNam.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
        currencyValueToConvert.textContent = "$ 0.00"

    }

    if (currencySelectFrom.value == "euro") {
        currencyNam.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
        currencyValueToConvert.textContent = "€ 0.00"
    }

    if (currencySelectFrom.value == "libra") {
        currencyNam.innerHTML = "Libra Esterlina"
        currencyImg.src = "./assets/libra.png"
        currencyValueToConvert.textContent = "£ 0.00"
    }

    if (currencySelectFrom.value == "real") {
        currencyNam.innerHTML = "Real Brasileiro"
        currencyImg.src = "./assets/real.png"
        currencyValueToConvert.textContent = "R$ 0.00"
    }

}

currencySelectFrom.addEventListener("change", changeCurrencyFrom)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)