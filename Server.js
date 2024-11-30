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
  
// Ruta para registrar un nuevo usuario (Cliente o Administrador)
app.post('/register', (req, res) => {
  const { firstName, lastName, email, password, address, phone, userType } = req.body;

  if (userType === 'cliente') {
      // Registrar como Cliente
      const queryCheck = 'SELECT * FROM Cliente WHERE correo_cliente = ?';
      db.query(queryCheck, [email], (err, results) => {
          if (err) {
              return res.status(500).json({ success: false, message: 'Error en la consulta' });
          }
          if (results.length > 0) {
              return res.status(400).json({ success: false, message: 'El correo ya está registrado como cliente' });
          }

          // Insertar el cliente en la base de datos
          const queryInsert = 'INSERT INTO Cliente (nombre_cliente, correo_cliente, contraseña_cliente, direccion_cliente, num_telefonoCliente) VALUES (?, ?, ?, ?, ?)';
          db.query(queryInsert, [firstName, lastName, email, password, address, phone], (err, results) => {
              if (err) {
                  return res.status(500).json({ success: false, message: 'Error al registrar el cliente' });
              }
              res.status(200).json({ success: true, message: 'Cliente registrado exitosamente' });
          });
      });

  } else if (userType === 'administrador') {
      // Registrar como Administrador
      const queryCheck = 'SELECT * FROM Administrador WHERE correo_administrador = ?';
      db.query(queryCheck, [email], (err, results) => {
          if (err) {
              return res.status(500).json({ success: false, message: 'Error en la consulta' });
          }
          if (results.length > 0) {
              return res.status(400).json({ success: false, message: 'El correo ya está registrado como administrador' });
          }

          // Insertar el administrador en la base de datos
          const queryInsert = 'INSERT INTO Administrador (nombre_administrador, correo_administrador, contraseña_administrador) VALUES (?, ?, ?)';
          db.query(queryInsert, [firstName, lastName, email, password], (err, results) => {
              if (err) {
                  return res.status(500).json({ success: false, message: 'Error al registrar el administrador' });
              }
              res.status(200).json({ success: true, message: 'Administrador registrado exitosamente' });
          });
      });
  } else {
      return res.status(400).json({ success: false, message: 'Tipo de usuario no válido' });
  }
});

//  Gestión de Productos 

// Obtener todos los productos
app.get('/productos', (req, res) => {
  const query = 'SELECT * FROM Producto';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener los productos');
    } else {
      res.status(200).json(results);
    }
  });
});