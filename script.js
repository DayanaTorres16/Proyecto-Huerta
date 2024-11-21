function showScreen(screen) {
    const mainScreen = document.getElementById('mainScreen');
    const loginScreen = document.getElementById('loginScreen');
    const registerScreen = document.getElementById('registerScreen');
    const normalizacionScreen = document.getElementById('normalizacion');
    const verdurasScreen = document.getElementById('verduras');
    const frutasScreen = document.getElementById('frutas');
    const hierbasScreen = document.getElementById('hierbas');

    // Ocultar todas las pantallas
    mainScreen.style.display = 'none';
    loginScreen.style.display = 'none';
    registerScreen.style.display = 'none';
    normalizacionScreen.style.display = 'none';
    verdurasScreen.style.display = 'none';
    frutasScreen.style.display = 'none';
    hierbasScreen.style.display = 'none';

    // Mostrar la pantalla seleccionada
    if (screen === 'main') {
        mainScreen.style.display = 'flex';
    } else if (screen === 'login') {
        loginScreen.style.display = 'flex';
    } else if (screen === 'register') {
        registerScreen.style.display = 'flex';
    } else if (screen === 'normalizacion') {
        normalizacionScreen.style.display = 'block'; // Muestra la pantalla de normalización
    } else if (screen === 'verduras') {
        verdurasScreen.style.display = 'block'; // Muestra la pantalla de verduras
    } else if (screen === 'frutas') {
        frutasScreen.style.display = 'block'; // Muestra la pantalla de frutas
    } else if (screen === 'hierbas') {
        hierbasScreen.style.display = 'block'; // Muestra la pantalla de hierbas
    }
}

function login() {
    showScreen('normalizacion');

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
    showScreen('normalizacion');
    
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

            // Validar que todos los campos estén completos y que las contraseñas coincidan
    if (!firstName || !lastName || !email || !password || !confirmPassword || !userType) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Crear un objeto con los datos para enviar al servidor
    const userData = {
        firstName,
        lastName,
        email,
        password,
        userType
    };
            fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })

            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if (data.success) {
                    // Redirigir o limpiar el formulario si el registro fue exitoso
                    showScreen('login'); // Redirigir a la pantalla de login si el registro fue exitoso
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al registrar el usuario');
            });
            
        } else {
            alert('Las contraseñas no coinciden.');
        }
    } else {
        alert('Por favor, completa todos los campos de registro.');
    }
}
 
function navigateTo(page) {
    window.location.href = page; // Redirige a la página especificada
}
