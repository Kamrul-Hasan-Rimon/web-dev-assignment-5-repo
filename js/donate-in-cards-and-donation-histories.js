const totalBDTDisplay1 = document.getElementById('total-bdt');
const donationHistory = document.getElementById('history-container');
let totalBDT = parseInt(totalBDTDisplay1.textContent);

// Modal Elements
const donationModal = document.getElementById('donation-modal');
const modalCardName = document.getElementById('modal-card-name');
const closeModalButton = document.getElementById('close-modal');

// Function to handle donation logic
function handleDonation(donationInputId, donatedAmountId, donateButtonId, cardName) {
    const donationInput = document.getElementById(donationInputId);
    const donateAmount = document.getElementById(donatedAmountId);
    const donateButton = document.getElementById(donateButtonId);

    donateButton.addEventListener('click', function() {
        const donationAmount = parseInt(donationInput.value);

        // Check if the input is a valid number and greater than 0
        if (!isNaN(donationAmount) && donationAmount > 0 && donationAmount <= totalBDT) {
            // Subtract the donation amount from total BDT
            totalBDT -= donationAmount;
            donateAmount.innerHTML = donationInput.value;

            // Update the total BDT display
            totalBDTDisplay1.textContent = totalBDT;

            // Add donation to the history
            addToHistory(donationAmount, cardName);

            // Show the modal
            showModal(cardName);

            // Clear the input field
            donationInput.value = '';
        } else {
            alert('Please enter a valid donation amount');
        }
    });
}

// Function to add a donation record to the history
function addToHistory(donationAmount, cardName) {
    
    const historyItem = document.createElement('div');
    historyItem.classList.add('bg-gray-50', 'p-6', 'rounded-lg', 'border-2','border-slate-500', 'space-y-2');

    const date = new Date();
    historyItem.innerHTML = `<h3 class="text-xl font-semibold">${donationAmount} Taka is Donated for ${cardName}</h3>
                             <p class="text-sm text-gray-500">Date: ${date}</p>`;
    donationHistory.appendChild(historyItem);
}

// Function to show the modal
function showModal(cardName) {
    modalCardName.textContent = cardName; // Set the card name in the modal
    donationModal.classList.remove('hidden'); // Show the modal
}

// Event to close the modal
closeModalButton.addEventListener('click', function() {
    donationModal.classList.add('hidden'); // Hide the modal
});

// Set up donation handling for each card
handleDonation('donation-amount-1', 'donate-amount-1', 'donate-btn-1', 'Flood at Noakhali');
handleDonation('donation-amount-2', 'donate-amount-2', 'donate-btn-2', 'Flood Relief in Feni');
handleDonation('donation-amount-3', 'donate-amount-3', 'donate-btn-3', 'the Quota Movement');
