const vegetables = [
    { name: "Acelga", img: "imagenes/acelga.jpg", price: "Desde $" },
    { name: "Ahuyama", img: "imagenes/ahuyama.jpg", price: "Desde $" },
    { name: "Ahuyama Peruana", img: "imagenes/ahuyama_peruana.jpg", price: "Desde $" },
    { name: "Alcachofa", img: "imagenes/alcachofa.jpg", price: "Desde $" },
    { name: "Alfalfa", img: "imagenes/alfalfa.jpg", price: "Desde $" },
    { name: "Apio", img: "imagenes/apio.jpg", price: "Desde $" },
    { name: "Arracacha", img: "imagenes/arracacha.jpg", price: "Desde $" },
    { name: "Arverja Cascara", img: "imagenes/arveja_cascara.jpg", price: "Desde $" },
    { name: "Arveja Desgranada", img: "imagenes/arveja_desgranada.jpg", price: "Desde $" },
    { name: "Batata", img: "imagenes/batata.jpg", price: "Desde $" },
    { name: "Berenjena", img: "imagenes/berenjena.jpg", price: "Desde $" },
    { name: "Brócoli", img: "imagenes/brocoli.jpg", price: "Desde $" },
    { name: "Calabacín", img: "imagenes/calabacin.jpg", price: "Desde $" },
    { name: "Calabaza", img: "imagenes/calabaza.jpg", price: "Desde $" },
    { name: "Cebolla Cabezona", img: "imagenes/cebolla_cabezona_blanca.jpg", price: "Desde $" },
    { name: "Cebolla Cabezona Roja", img: "imagenes/cebolla_cabezona_roja.jpg", price: "Desde $" },
    { name: "Cebolla Larga", img: "imagenes/cebolla_larga.jpg", price: "Desde $" },
    { name: "Cebollín", img: "imagenes/cebollin.jpg", price: "Desde $" },
    { name: "Champinones", img: "imagenes/champinones.jpg", price: "Desde $" },
    { name: "Champinones Tajados", img: "imagenes/champinones_tajados.jpg", price: "Desde $" }
]; 
const fruits = [
    { name: "Agraz", img: "imagenes/agraz.jpg", price: "Desde $" },
    { name: "Aguacate", img: "imagenes/aguacate.jpg", price: "Desde $" },
    { name: "Aguacate Hass", img: "imagenes/aguacate_hass.jpg", price: "Desde $" },
    { name: "Anon", img: "imagenes/anon.jpg", price: "Desde $" },
    { name: "Arandanos", img: "imagenes/arandanos.jpg", price: "Desde $" },
    { name: "Fresa Jumbo", img: "imagenes/fresa_jumbo.jpg", price: "Desde $" },
    { name: "Fresa Pareja", img: "imagenes/fresa_pareja.jpg", price: "Desde $" },
    { name: "Guanabana", img: "imagenes/guanabana.jpg", price: "Desde $" },
    { name: "Mango de Azucar", img: "imagenes/mango_azucar.jpg", price: "Desde $" },
    { name: "Mango Comun", img: "imagenes/mango_comun.jpg", price: "Desde $" },
    { name: "Mango Tommy", img: "imagenes/mango_tommy.jpg", price: "Desde $" }
];
const herbs = [
    { name: "Albacon", img: "imagenes/albacon.jpg", price: "Desde $" },
    { name: "Albahaca", img: "imagenes/albahaca.jpg", price: "Desde $" },
    { name: "Hojas Aromáticas", img: "imagenes/aromaticas_hojas.jpg", price: "Desde $" },
    { name: "Cilantro", img: "imagenes/cilantro.jpg", price: "Desde $" },
    { name: "Guascas", img: "imagenes/guascas.jpg", price: "Desde $" },
    { name: "Laurel", img: "imagenes/laurel.jpg", price: "Desde $" },
    { name: "Fresa Pareja", img: "imagenes/fresa_pareja.jpg", price: "Desde $" },
    { name: "Manzanilla", img: "imagenes/manzanilla.jpg", price: "Desde $" },
    { name: "Perejil Crespo", img: "imagenes/perejil_crespo.jpg", price: "Desde $" },
    { name: "Poleo", img: "imagenes/poleo.jpg", price: "Desde $" },
    { name: "Ruda", img: "imagenes/ruda.jpg", price: "Desde $" }
];

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
        generateVegetableCards(); // Generar tarjetas de verduras
    } else if (screen === 'saleOfFruits') {
        saleOfFruitsScreen.style.display = 'block'; 
        generateFruitCards(); // Generar tarjetas de frutas
    } else if (screen === 'saleOfHerbs') {
        saleOfHerbsScreen.style.display = 'block'; 
        generateHerbsCards();
    }  else if (screen === 'saleOther') {
        saleOther.style.display = 'block'; 
    }
}

function generateVegetableCards() {
    const vegetableContainer = document.getElementById('vegetableContainer');
    vegetableContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas tarjetas

    vegetables.forEach(vegetable => {
        const article = document.createElement('article');
        article.classList.add('cards');
        article.innerHTML = `
            <img src="${vegetable.img}" alt="${vegetable.name}">
            <h3>${vegetable.name}</h3>
            <p>${vegetable.price}</p>
            <button>Agregar al carrito</button>
        `;
        vegetableContainer.appendChild(article);
    });
}

function generateFruitCards() {
    const fruitContainer = document.getElementById('containerFruits');
    fruitContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas tarjetas

    fruits.forEach(fruit => {
        const article = document.createElement('article');
        article.classList.add('cards');
        article.innerHTML = `
            <img src="${fruit.img}" alt="${fruit.name}">
            <h3>${fruit.name}</h3>
            <p>${fruit.price}</p>
            <button>Agregar al carrito</button>
        `;
        fruitContainer.appendChild(article);
    });
}
function generateHerbsCards() {
    const herbsContainer = document.getElementById('containerHerbs');
    herbsContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas tarjetas

    herbs.forEach(herbs => {
        const article = document.createElement('article');
        article.classList.add('cards');
        article.innerHTML = `
            <img src="${herbs.img}" alt="${herbs.name}">
            <h3>${herbs.name}</h3>
            <p>${herbs.price}</p>
            <button>Agregar al carrito</button>
        `;
        herbsContainer.appendChild(article);
    });
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