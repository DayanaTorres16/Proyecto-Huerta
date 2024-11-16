// Importar dependencias
const express = require('express');
const mysql = require('mysql2');

// Crear una instancia de Express
const app = express();

// Configurar el servidor para que acepte datos JSON
app.use(express.json());

// Configurar la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: '123456', 
  database: 'HuertaSebastian',
  port: 3307
});

// Verificar si la conexión a la base de datos fue exitosa
db.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
    } else {
      console.log('Conectado a la base de datos');
    }
  });

  // Ruta de ejemplo para verificar si el servidor está funcionando
app.get('/', (req, res) => {
    res.send('El servidor funciona');
  });

  // Ruta de login
app.post('/login', (req, res) => {
    const { correo_administrador, contraseña_administrador } = req.body;
    
    const query = 'SELECT * FROM Administrador WHERE correo_administrador = ? AND contraseña_administrador = ?';
    
    db.query(query, [correo_administrador, contraseña_administrador], (err, results) => {
      if (err) {
        res.status(500).send('Error en la consulta');
        return;
      }
      
      if (results.length > 0) {
        res.send('Login exitoso');
      } else {
        res.status(400).send('Credenciales incorrectas');
      }
    });
  });
  
  // Ruta de registro
  app.post('/register', (req, res) => {
    const { nombre_administrador, correo_administrador, contraseña_administrador } = req.body;
  
    const query = 'INSERT INTO Administrador (nombre_administrador, correo_administrador, contraseña_administrador) VALUES (?, ?, ?)';
    
    db.query(query, [nombre_administrador, correo_administrador, contraseña_administrador], (err, results) => {
      if (err) {
        res.status(500).send('Error al registrar usuario');
        return;
      }
      res.send('Registro exitoso');
    });
  });
  
  // Configurar el puerto del servidor
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
