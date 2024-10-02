
const cards = document.getElementById('cards')
const historySection = document.getElementById('history-section')
const history = document.getElementById('history')
const donation = document.getElementById('donation')

history.addEventListener('click', function () {
    cards.classList.add('hidden')
    historySection.classList.remove('hidden')
    history.classList.remove('bg-white', 'border', 'border-gray-300', 'text-gray-600', 'px-6', 'py-2', 'rounded-lg')
    history.classList.add('bg-[#B4F461]', 'font-bold', 'px-6', 'py-2', 'rounded-lg')
    donation.classList.remove('bg-[#B4F461]', 'font-bold', 'px-6', 'py-2', 'rounded-lg')
    donation.classList.add('bg-white', 'border', 'border-gray-300', 'text-gray-600', 'px-6', 'py-2', 'rounded-lg')

})

donation.addEventListener("click", function () {
    cards.classList.remove('hidden')
    historySection.classList.add('hidden')
    history.classList.add('bg-white', 'border', 'border-gray-300', 'text-gray-600', 'px-6', 'py-2', 'rounded-lg')
    history.classList.remove('bg-[#B4F461]', 'font-bold', 'px-6', 'py-2', 'rounded-lg')
    donation.classList.add('bg-[#B4F461]', 'font-bold', 'px-6', 'py-2', 'rounded-lg')
    donation.classList.remove('bg-white', 'border', 'border-gray-300', 'text-gray-600', 'px-6', 'py-2', 'rounded-lg')
})
