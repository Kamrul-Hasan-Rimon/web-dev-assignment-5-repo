const totalBDTDisplay1 = document.getElementById('total-bdt');
const donationHistory = document.getElementById('history-container');
let totalBDT = parseInt(totalBDTDisplay1.textContent);

const donationModal = document.getElementById('donation-modal');
const modalCardName = document.getElementById('modal-card-name');
const closeModalBtn = document.getElementById('close-modal');

function handleDonation(donationInputId, donatedAmountId, donateButtonId, cardName) {
    const donationInput = document.getElementById(donationInputId);
    const donateAmount = document.getElementById(donatedAmountId);
    const donateButton = document.getElementById(donateButtonId);

    donateButton.addEventListener('click', function () {
        const donationAmount = parseInt(donationInput.value);

        if (!isNaN(donationAmount) && donationAmount > 0 && donationAmount <= totalBDT) {
            totalBDT -= donationAmount;
            donateAmount.innerHTML = donationInput.value;
            totalBDTDisplay1.textContent = totalBDT;
            addToHistory(donationAmount, cardName);
            showModal(cardName);
            donationInput.value = '';
        } else {
            alert('Please enter a valid donation amount');
        }
    });
}

function addToHistory(donationAmount, cardName) {
    const historyItem = document.createElement('div');
    historyItem.classList.add('bg-white', 'p-6', 'rounded-lg', 'border-2', 'border-slate-500', 'space-y-2');
    const date = new Date();
    historyItem.innerHTML = `<h3 class="text-xl font-semibold">${donationAmount} Taka is Donated for ${cardName}</h3>
                             <p class="text-sm text-gray-500">Date: ${date}</p>`;
    donationHistory.appendChild(historyItem);
}
function showModal(cardName) {
    modalCardName.textContent = cardName;
    donationModal.classList.remove('hidden');
}

closeModalBtn.addEventListener('click', function () {
    donationModal.classList.add('hidden');
});

handleDonation('donation-amount-1', 'donate-amount-1', 'donate-btn-1', 'Flood at Noakhali');
handleDonation('donation-amount-2', 'donate-amount-2', 'donate-btn-2', 'Flood Relief in Feni');
handleDonation('donation-amount-3', 'donate-amount-3', 'donate-btn-3', 'the Quota Movement');


const blogBtn = document.getElementById('blog-btn')
const homeBtn = document.getElementById('home-btn')
const blogHomeBtn = document.getElementById('blog-home-btn')
const cards1 = document.getElementById('cards')
const donationHistortyBtn = document.getElementById('donatin-history-btn')
const QNAsection = document.getElementById('qna')
let change = 0;

blogHomeBtn.addEventListener('click', function () {
    if (change == 0) {
        homeBtn.classList.remove('hidden')
        blogBtn.classList.add('hidden')
        cards1.classList.add('hidden')
        donationHistortyBtn.classList.add('hidden')
        QNAsection.classList.remove('hidden')
        change = 1;
    }
    else {
        homeBtn.classList.add('hidden')
        blogBtn.classList.remove('hidden')
        cards1.classList.remove('hidden')
        donationHistortyBtn.classList.remove('hidden')
        QNAsection.classList.add('hidden')
        change = 0;
    }
})