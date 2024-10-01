function addToHistory(donationAmount, cardName) {
    // Remove the 'No donations have been made yet.' message if it's there
    // if (donationHistory.children.length === 1 && donationHistory.children[0].textContent === 'No donations have been made yet.') {
    //     donationHistory.innerHTML = '';
    // }

    // Create a new list item for the donation
    const newHistoryItem = document.createElement('li');
    const date = new Date().toLocaleString();
    newHistoryItem.textContent = `${donationAmount} BDT donated for ${cardName} on ${date}`;

    // Append the new donation record to the history list
    donationHistory.appendChild(newHistoryItem);
}

// Set up donation handling for each card
handleDonation('donation-amount-1', 'donate-amount-1', 'donate-btn-1', 'Flood Relief');
handleDonation('donation-amount-2', 'donate-amount-2', 'donate-btn-2', 'Education Support');
handleDonation('donation-amount-3', 'donate-amount-3', 'donate-btn-3', 'Health Aid');