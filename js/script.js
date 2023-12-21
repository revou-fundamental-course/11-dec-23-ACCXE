document.addEventListener('DOMContentLoaded', function () {
    var name = prompt("Please enter your name:");
    var welcomeMessage = document.getElementById('welcomeMessage');
    if (name) {
        welcomeMessage.textContent = `Hi ${name}, Welcome To the Website`;
    } else {
        welcomeMessage.textContent = 'Hi there!';
    }
});

function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    var resultTextArea = document.getElementById('resultTextArea');
    resultTextArea.value = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    console.log("Submitted Values:", { name, email, message });
}
