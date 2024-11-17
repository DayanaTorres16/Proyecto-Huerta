function showScreen(screen) {
    const mainScreen = document.getElementById('mainScreen');
    const loginScreen = document.getElementById('loginScreen');
    const registerScreen = document.getElementById('registerScreen');

    mainScreen.style.display = 'none';
    loginScreen.style.display = 'none';
    registerScreen.style.display = 'none';

    if (screen === 'main') {
        mainScreen.style.display = 'flex';
    } else if (screen === 'login') {
        loginScreen.style.display = 'block';
    } else if (screen === 'register') {
        registerScreen.style.display = 'block';
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    if (username && password) {
        alert(`Iniciando sesión como ${username}`);
        // Aquí puedes agregar la lógica de autenticación
    } else {
        alert('Por favor, completa todos los campos de inicio de sesión.');
    }
}

function register() {
    const firstName = document.getElementById('registerFirstName').value;
    const lastName = document.getElementById('registerLastName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const address = document.getElementById('registerAddress').value;  // Solo para Cliente
    const phone = document.getElementById('registerPhone').value;  // Solo para Cliente
    const userType = document.getElementById('userType').value; // Obtener el tipo de usuario

    if (firstName && lastName && email && password && confirmPassword) {
        if (password === confirmPassword) {
            alert(`Registrando ${userType}: ${firstName} ${lastName}`);
            // Aquí puedes agregar la lógica de registro

            fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName, lastName, email, password, address, phone, userType })
            })
            .then(response => response.json())
            .then(data => alert(data.message))
            .catch(error => alert('Error al registrar el usuario'));
        } else {
            alert('Las contraseñas no coinciden.');
        }
    } else {
        alert('Por favor, completa todos los campos de registro.');
    }
}