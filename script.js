const correctPassword = "THEBESTPERSONTOEXISTISSIEM"; // Set your password here
const passwordContainer = document.getElementById('passwordContainer');
const letter = document.getElementById('letter');
const error = document.getElementById('error');

function openLetter() {
    const passwordInput = document.getElementById('password').value;
    if (passwordInput === correctPassword) {
        passwordContainer.style.display = 'none';
        letter.style.display = 'block';
        error.textContent = '';
    } else {
        error.textContent = 'Incorrect password. Please try again.';
    }
}
