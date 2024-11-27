function showScreen(screen) {
    const homeScreen = document.getElementById('homeScreen');
    const loginScreen = document.getElementById('loginScreen');
    const registerScreen = document.getElementById('registerScreen');
    const mainScreen = document.getElementById('mainScreen');
    const informationScreen = document.getElementById('information');
    const saleOfVegetablesScreen = document.getElementById('saleOfVegetables');
    const saleOfFruitsScreen = document.getElementById('saleOfFruits');
    const saleOfHerbsScreen = document.getElementById('saleOfHerbs');
    const saleOtherScreen = document.getElementById('saleOther');

    // Ocultar todas las pantallas
    homeScreen.style.display = 'none';
    loginScreen.style.display = 'none';
    registerScreen.style.display = 'none';
    mainScreen.style.display = 'none';
    informationScreen.style.display = 'none';
    saleOfVegetablesScreen.style.display = 'none';
    saleOfFruitsScreen.style.display = 'none';
    saleOfHerbsScreen.style.display = 'none';
    saleOtherScreen.style.display = 'none';
   

    // Mostrar la pantalla seleccionada
    if (screen === 'home') {
        homeScreen.style.display = 'flex';
    } else if (screen === 'login') {
        loginScreen.style.display = 'flex';
    } else if (screen === 'register') {
        registerScreen.style.display = 'flex';
    } else if (screen === 'main') {
        mainScreen.style.display = 'block'; 
    } else if (screen === 'information') {
        informationScreen.style.display = 'block'; 
    } else if (screen === 'saleOfVegetables') {
        saleOfVegetablesScreen.style.display = 'block'; 
    } else if (screen === 'saleOfFruits') {
        saleOfFruitsScreen.style.display = 'block'; 
    } else if (screen === 'saleOfHerbs') {
        saleOfHerbsScreen.style.display = 'block'; 
    } else if (screen === 'saleOther') {
        saleOtherScreen.style.display = 'block'; 
    }
}

function login() {
    showScreen('main');

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
    showScreen('main');
    
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

const images = ['imagenes/huerta1.jpg', 'imagenes/huerta2.jpg', 'imagenes/huerta3.jpg'];
let index = 0;

function changeImage() {
    const imgElement = document.querySelector('.animated-image');
    imgElement.classList.add('fade-out'); // Añade la clase de salida
    setTimeout(() => {
        index = (index + 1) % images.length; // Cambia el índice
        imgElement.src = images[index]; // Cambia la fuente de la imagen
        imgElement.classList.remove('fade-out'); // Elimina la clase de salida
    }, 1000); // Tiempo de la animación de salida
}

// Cambia la imagen cada 5 segundos
setInterval(changeImage, 5000);
const buttons = document.querySelectorAll('.benefit button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});