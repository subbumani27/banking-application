let currentUser = null;
let balance = 1000;

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('error-message');

    // Simulating authentication, replace with actual authentication logic
    if (username === 'user' && password === 'password') {
        currentUser = username;
        document.getElementById('login').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
        document.getElementById('user').textContent = currentUser;
        updateBalance();
    } else {
        errorMessage.classList.remove('hidden');
    }
}


function deposit() {
    let amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
    } else {
        alert("Invalid amount!");
    }
}

function withdraw() {
    let amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
    } else {
        alert("Invalid amount or insufficient balance!");
    }
}

function updateBalance() {
    document.getElementById('balance').innerText = `Balance: Rs.${balance.toFixed(2)}`;
}

function logout() {
    currentUser = null;
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('balance').innerText = 'Balance: Rs.0.00';
}


