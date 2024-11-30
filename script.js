const vegetables = [
    { name: "Acelga", img: "imagenes/acelga.jpg", price: "Desde $1.000" },
    { name: "Ahuyama", img: "imagenes/ahuyama.jpg", price: "Desde $2.000" },
    { name: "Ahuyama Peruana", img: "imagenes/ahuyama_peruana.jpg", price: "Desde $3.000" },
    { name: "Alcachofa", img: "imagenes/alcachofa.jpg", price: "Desde $5.000" },
    { name: "Alfalfa", img: "imagenes/alfalfa.jpg", price: "Desde $6.000" },
    { name: "Apio", img: "imagenes/apio.jpg", price: "Desde $2.000" },
    { name: "Arracacha", img: "imagenes/arracacha.jpg", price: "Desde $1.000" },
    { name: "Arverja Cascara", img: "imagenes/arveja_cascara.jpg", price: "Desde $8.000" },
    { name: "Arveja Desgranada", img: "imagenes/arveja_desgranada.jpg", price: "Desde $5.600" },
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
let cart = []; // Array para almacenar los productos en el carrito


function showScreen(screen) {
    const homeScreen = document.getElementById('homeScreen');
    const loginScreen = document.getElementById('loginScreen');
    const registerScreen = document.getElementById('registerScreen');
    const mainScreen = document.getElementById('mainScreen');
    const informationScreen = document.getElementById('information');
    const saleOfVegetablesScreen = document.getElementById('saleOfVegetables');
    const saleOfFruitsScreen = document.getElementById('saleOfFruits');
    const saleOfHerbsScreen = document.getElementById('saleOfHerbs');
    const saleOtherScreen = document.getElementById('saleOther'); // Pantalla de otras ventas
    const cartScreen = document.getElementById('cart');
    const paymenScreen = document.getElementById('paymentScreen');
    

    // Oculta todas las pantallas
    homeScreen.style.display = 'none';
    loginScreen.style.display = 'none';
    registerScreen.style.display = 'none';
    mainScreen.style.display = 'none';
    informationScreen.style.display = 'none';
    saleOfVegetablesScreen.style.display = 'none';
    saleOfFruitsScreen.style.display = 'none';
    saleOfHerbsScreen.style.display = 'none';
    saleOtherScreen.style.display = 'none'; // Asegúrate de ocultar esta pantalla
    cartScreen.style.display = 'none';
    paymenScreen.style.display = 'none';

    // Muestra la pantalla correspondiente
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
        generateVegetableCards(); 
    } else if (screen === 'saleOfFruits') {
        saleOfFruitsScreen.style.display = 'block'; 
        generateFruitCards(); 
    } else if (screen === 'saleOfHerbs') {
        saleOfHerbsScreen.style.display = 'block'; 
        generateHerbsCards();
    } else if (screen === 'saleOther') { // Asegúrate de manejar esta opción
        saleOtherScreen.style.display = 'block'; 
    } else if (screen === 'cart') {
        cartScreen.style.display = 'block'; 
    }else if (screen === 'paymentScreen') {
        paymenScreen.style.display = 'block';
    }
}

function addToCart(product) {
    const existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
        existingProduct.quantity += 1; // Aumentar la cantidad si ya existe
    } else {
        product.quantity = 1; // Establecer cantidad inicial
        cart.push(product);
    }
    updateCartDisplay();
}


function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Limpiar el contenedor del carrito
    let total = 0;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="cart-item-img">
            <span>${item.name}</span>
            <span>${item.price}</span>
            <span>Cantidad: ${item.quantity}</span>
            <button onclick='removeFromCart("${item.name}")'>Eliminar</button>
            <button onclick='increaseQuantity("${item.name}")'>+</button>
            <button onclick='decreaseQuantity("${item.name}")'>-</button>
        `;
        cartItemsContainer.appendChild(div);
        total += parseFloat(item.price.replace('Desde $', '').trim()) * item.quantity;
    });

    document.getElementById('cart-total').innerText = `Total: $${total.toFixed(2)}`;

    // Agregar el botón de pagar
    const payButton = document.createElement('button');
    payButton.textContent = 'Pagar';
    payButton.onclick = showPaymentScreen;
    cartItemsContainer.appendChild(payButton);

    document.getElementById('cart').style.display = 'block'; // Mostrar el carrito
}

function showPaymentScreen() {
    // Ocultar la pantalla del carrito
    document.getElementById('cart').style.display = 'none';

    // Mostrar la pantalla de pago
    const paymentScreen = document.getElementById('paymentScreen');
    paymentScreen.style.display = 'block';

    // Llenar los campos de la pantalla de pago
    document.getElementById('deliveryAddress').value = 'Calle Ficticia 123, Ciudad, País';

    // Configurar el calendario de fecha de entrega
    const deliveryDateInput = document.getElementById('deliveryDate');
    deliveryDateInput.type = 'date';
    deliveryDateInput.min = new Date().toISOString().split('T')[0]; // Establecer la fecha mínima como la fecha actual
}

function processPayment() {
    // Obtener los valores de los campos de pago
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const cvv = document.getElementById('cvv').value;

    // Validar los campos de pago
    if (!paymentMethod || !cardNumber || !expirationDate || !cvv) {
        alert('Por favor, completa todos los campos de pago.');
        return;
    }

    // Procesar el pago
    if (paymentMethod === 'card') {
        // Lógica para procesar el pago con tarjeta de crédito
        processCardPayment(cardNumber, expirationDate, cvv);
    } else if (paymentMethod === 'pse') {
        // Lógica para procesar el pago con PSE
        processPSEPayment();
    }

    // Limpiar el carrito y volver a la pantalla principal
    cart = [];
    updateCartDisplay();
    showScreen('main');
}

function processCardPayment(cardNumber, expirationDate, cvv) {
    // Aquí deberías implementar la lógica para procesar el pago con una pasarela de pago real
    console.log('Procesando pago con tarjeta de crédito:');
    console.log('Número de tarjeta:', cardNumber);
    console.log('Fecha de expiración:', expirationDate);
    console.log('CVV:', cvv);
    alert('Pago con tarjeta de crédito procesado exitosamente.');
}

function processPSEPayment() {
    // Aquí deberías implementar la lógica para procesar el pago con PSE
    console.log('Procesando pago con PSE');
    alert('Pago con PSE procesado exitosamente.');
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
            <button onclick='addToCart({ name: "${vegetable.name}", img: "${vegetable.img}", price: "${vegetable.price}" })'>Agregar al carrito</button>
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
            <button onclick='addToCart({ name: "${fruit.name}", img: "${fruit.img}", price: "${fruit.price}" })'>Agregar al carrito</button>
        `;
        fruitContainer.appendChild(article);
    });
}

function generateHerbsCards() {
    const herbsContainer = document.getElementById('containerHerbs');
    herbsContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas tarjetas

    herbs.forEach(herb => {
        const article = document.createElement('article');
        article.classList.add('cards');
        article.innerHTML = `
            <img src="${herb.img}" alt="${herb.name}">
            <h3>${herb.name}</h3>
            <p>${herb.price}</p>
            <button onclick='addToCart({ name: "${herb.name}", img: "${herb.img}", price: "${herb.price}" })'>Agregar al carrito</button>
        `;
        herbsContainer.appendChild(article);
    });
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCartDisplay();
}

function increaseQuantity(productName) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity += 1;
        updateCartDisplay();
    }
}

function decreaseQuantity(productName) {
    const product = cart.find(item => item.name === productName);
    if (product && product.quantity > 1) {
        product.quantity -= 1;
        updateCartDisplay();
    } else if (product) {
        removeFromCart(productName); // Eliminar si la cantidad es 1
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