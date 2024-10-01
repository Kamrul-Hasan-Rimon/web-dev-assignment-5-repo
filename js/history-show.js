
const cards = document.getElementById('cards')
const historySection = document.getElementById('history-section')
const history = document.getElementById('history')
const donation = document.getElementById('donation')

history.addEventListener('click', function () {
    cards.classList.add('hidden')
    historySection.classList.remove('hidden')
})

donation.addEventListener("click", function () {
    cards.classList.remove('hidden')
    historySection.classList.add('hidden')
})
