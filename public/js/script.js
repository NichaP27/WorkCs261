function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}



function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = (
        'http://localhost:8080/hello?' +
        new URLSearchParams({ myName: username, lastName: password}).toString()
      );
    
    fetch(url)
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}
const username = document.getElementById('username');
const password = document.getElementById('password');
const role = document.getElementById('role');
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const togglePassword = document.getElementById('togglePassword');

// Enable or disable login button based on form completion
document.getElementById('loginForm').addEventListener('input', () => {
    if (username.value && password.value && role.value) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
});

// Toggle password visibility
togglePassword.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        togglePassword.textContent = 'Hide';
    } else {
        password.type = 'password';
        togglePassword.textContent = 'Show';
    }
});

// Login button action
loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Login Successful!');
});

// Logout button action
logoutButton.addEventListener('click', () => {
    username.value = '';
    password.value = '';
    role.value = '';
    loginButton.disabled = true;
    alert('You have been logged out.');
});
