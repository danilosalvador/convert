const USD = 5.47
const EUR = 5.87
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById("amount");
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

function convertCurrency(amount, price, symbol) {
     try {
        description.textContent = `${symbol} 1 - ${formatCurrencyBRL(price)}`;

        let total = amount * price

        if (isNaN(total)) {
            alert("Digite um valor válido para a conversão.")
            return
        }

        result.textContent = `${formatNumberBRL(total)} Reais`
        
        footer.classList.add("show-result")
     } catch (error) {
        console.log(error)
        footer.classList.remove("show-result")
        alert("Ocorreu um erro ao tentar realizar a conversão de moedas.")
     }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}

function formatNumberBRL(value) {
    return Number(value).toLocaleString("pt-BR")
}