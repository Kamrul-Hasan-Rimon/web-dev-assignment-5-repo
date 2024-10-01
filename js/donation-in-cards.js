const totalBDTDisplay = document.getElementById('total-bdt');
let totalBDT = parseInt(totalBDTDisplay.textContent);
const donationAmount = document.getElementById('donation-amount-1')
function handleDonation(donationInputId, donatedAmountId, donateButtonId) {
    const donationInput = document.getElementById(donationInputId);
    const donateAmount = document.getElementById(donatedAmountId);
    const donateButton = document.getElementById(donateButtonId);

    donateButton.addEventListener('click', function() {
        const donationAmount = parseInt(donationInput.value);

        if (!isNaN(donationAmount) && donationAmount > 0 && donationAmount <= totalBDT) {
            totalBDT -= donationAmount;
            donateAmount.innerHTML = donationInput.value;

            totalBDTDisplay.textContent = totalBDT;
            
            donationInput.value = '';
            // const donationHistory = document.getElementById('history-container');
            // donationHistory.innerHTML = `${donationAmount} BDT donated for ${} on ${date}`;
        } else {
            alert('Please enter a valid donation amount');
        }
    });
}

handleDonation('donation-amount-1', 'donate-amount-1', 'donate-btn-1');
handleDonation('donation-amount-2', 'donate-amount-2', 'donate-btn-2');
handleDonation('donation-amount-3', 'donate-amount-3', 'donate-btn-3');