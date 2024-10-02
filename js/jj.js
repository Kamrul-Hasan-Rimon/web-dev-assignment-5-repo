// const totalBDTDisplay = document.getElementById('total-bdt');
// const donationHistory = document.getElementById('history-container');
// let totalBDT = parseInt(totalBDTDisplay.textContent);

// function handleDonation(donationInputId, donatedAmountId, donateButtonId, cardName) {
//     const donationInput = document.getElementById(donationInputId);
//     const donateAmount = document.getElementById(donatedAmountId);
//     const donateButton = document.getElementById(donateButtonId);

//     donateButton.addEventListener('click', function () {
//         const donationAmount = parseFloat(donationInput.value);

//         if (!isNaN(donationAmount) && donationAmount > 0 && donationAmount <= totalBDT) {
//             totalBDT -= donationAmount;
//             donateAmount.innerHTML = donationInput.value
//             totalBDTDisplay.textContent = totalBDT;

//             addToHistory(donationAmount, cardName);

//             donationInput.value = '';

//         } else {
//             alert('Please enter a valid donation amount');
//         }
//     });
// }

// function addToHistory(donationAmount, cardName) {
    // const historyItem = document.createElement('div');
    // historyItem.classList.add('bg-gray-50', 'p-6', 'rounded-lg', 'border-2','border-slate-500', 'space-y-2');

    // const date = new Date();
    // historyItem.innerHTML = `<h3 class="text-xl font-semibold">${donationAmount} Taka is Donated for ${cardName}</h3>
    //                         <p class="text-sm text-gray-500">Date: ${date}</p>`;
    // donationHistory.appendChild(historyItem);
// }

// handleDonation('donation-amount-1', 'donate-amount-1', 'donate-btn-1', 'Flood Relief');
// handleDonation('donation-amount-2', 'donate-amount-2', 'donate-btn-2', 'Education Support');
// handleDonation('donation-amount-3', 'donate-amount-3', 'donate-btn-3', 'Health Aid');