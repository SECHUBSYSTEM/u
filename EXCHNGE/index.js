const currencyOne = document.querySelector('#currency1')
const amountOne = document.querySelector('#amount1')
const currencyTwo = document.querySelector('#currency2')
const amountTwo = document.querySelector('#amount2')

const rate = document.querySelector('#rate')
const swap = document.querySelector('#swapbtn')


function calculate() {
    const currency1 = currencyOne.value
    const currency2 = currencyTwo.value

    fetch(`https://v6.exchangerate-api.com/v6/e4e3538946b862a50c66104f/latest/${currency1}`)
        .then(res => res.json())
        .then(data => {
            const ratE = data.conversion_rates[currency2]
            rate.innerText = `1 ${currency1} = ${ratE} ${currency2}`

            amountTwo.value = (amountOne.value * ratE).toFixed(1)
        })
}


currencyOne.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
currencyTwo.addEventListener('change', calculate)
amountTwo.addEventListener('input', calculate)


swap.addEventListener('click', () => {
    const temp = currencyOne.value
    currencyOne.value = currencyTwo.value
    currencyTwo.value = temp
    calculate()
})
calculate()