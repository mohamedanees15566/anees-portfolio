// script.js
document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the default way
    
    // Get form input values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let cardNumber = document.getElementById('cardNumber').value;
    let expiryDate = document.getElementById('expiryDate').value;
    let cvv = document.getElementById('cvv').value;
    let amount = document.getElementById('amount').value;

    // Simple client-side validation
    if (!name || !email || !cardNumber || !expiryDate || !cvv || !amount) {
        alert('Please fill in all fields!');
        return;
    }

    // Check if the card number length is correct
    if (cardNumber.length !== 19) {
        alert('Please enter a valid credit card number (XXXX XXXX XXXX XXXX).');
        return;
    }

    // Check if the CVV is correct length (typically 3 digits)
    if (cvv.length !== 3) {
        alert('Please enter a valid CVV code.');
        return;
    }

    // Check if amount is positive
    if (parseFloat(amount) <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    // Submit the form (if all fields are valid)
    this.submit();
});

function paymentsubmit(){
    alert('Your order CONFIRMED')
}