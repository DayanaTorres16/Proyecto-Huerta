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

// Agregar un nuevo producto
app.post('/productos', (req, res) => {
  const { nombre, precio, stock } = req.body;
  const query = 'INSERT INTO Producto (nombre_producto, precio_producto, stock_producto) VALUES (?, ?, ?)';
  db.query(query, [nombre, precio, stock], (err, results) => {
    if (err) {
      res.status(500).send('Error al agregar el producto');
    } else {
      res.status(201).send('Producto agregado exitosamente');
    }
  });
});

// Actualizar un producto
app.put('/productos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, precio, stock } = req.body;
  const query = 'UPDATE Producto SET nombre_producto = ?, precio_producto = ?, stock_producto = ? WHERE id_producto = ?';
  db.query(query, [nombre, precio, stock, id], (err) => {
    if (err) {
      res.status(500).send('Error al actualizar el producto');
    } else {
      res.status(200).send('Producto actualizado exitosamente');
    }
  });
});

// Eliminar un producto
app.delete('/productos/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM Producto WHERE id_producto = ?';
  db.query(query, [id], (err) => {
    if (err) {
      res.status(500).send('Error al eliminar el producto');
    } else {
      res.status(200).send('Producto eliminado exitosamente');
    }
  });
});

//  Gestión del Carrito 

// Obtener los productos del carrito de un cliente
app.get('/carrito/:clienteId', (req, res) => {
  const { clienteId } = req.params;
  const query = 'SELECT * FROM Carrito WHERE id_cliente = ?';
  db.query(query, [clienteId], (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener el carrito');
    } else {
      res.status(200).json(results);
    }
  });
});

// Agregar un producto al carrito
app.post('/carrito', (req, res) => {
  const { clienteId, productoId, cantidad } = req.body;
  const query = 'INSERT INTO Carrito (id_cliente, id_producto, cantidad) VALUES (?, ?, ?)';
  db.query(query, [clienteId, productoId, cantidad], (err) => {
    if (err) {
      res.status(500).send('Error al agregar el producto al carrito');
    } else {
      res.status(201).send('Producto agregado al carrito');
    }
  });
});

// Eliminar un producto del carrito
app.delete('/carrito/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM Carrito WHERE id_carrito = ?';
  db.query(query, [id], (err) => {
    if (err) {
      res.status(500).send('Error al eliminar el producto del carrito');
    } else {
      res.status(200).send('Producto eliminado del carrito');
    }
  });
});

//  Gestión de Pedidos 

// Realizar un pedido
app.post('/pedidos', (req, res) => {
  const { clienteId, productos } = req.body;

  const queryPedido = 'INSERT INTO Pedido (id_cliente, fecha_pedido) VALUES (?, NOW())';
  db.query(queryPedido, [clienteId], (err, results) => {
    if (err) {
      res.status(500).send('Error al crear el pedido');
      return;
    }

    const pedidoId = results.insertId;

    const queryDetalle = 'INSERT INTO DetallePedido (id_pedido, id_producto, cantidad) VALUES (?, ?, ?)';
    productos.forEach((producto) => {
      db.query(queryDetalle, [pedidoId, producto.id, producto.cantidad], (err) => {
        if (err) {
          res.status(500).send('Error al agregar detalle del pedido');
        }
      });
    });

    res.status(201).send('Pedido realizado exitosamente');
  });
});

// Obtener pedidos de un cliente
app.get('/pedidos/:clienteId', (req, res) => {
  const { clienteId } = req.params;
  const query = 'SELECT * FROM Pedido WHERE id_cliente = ?';
  db.query(query, [clienteId], (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener los pedidos');
    } else {
      res.status(200).json(results);
    }
  });
});

// Gestion del pago

// Ruta para procesar el pago
app.post('/procesar-pago', (req, res) => {
  const { clienteId, metodoPago, numeroTarjeta, fechaExpiracion, cvv, monto } = req.body;

  // Validar los datos básicos
  if (!clienteId || !metodoPago || !monto) {
    return res.status(400).json({ success: false, message: 'Datos insuficientes para procesar el pago' });
  }

  // Guardar el pago en la base de datos
  const query = `
    INSERT INTO Pago (id_cliente, metodo_pago, numero_tarjeta, fecha_expiracion, cvv, monto) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(
    query,
    [clienteId, metodoPago, numeroTarjeta || null, fechaExpiracion || null, cvv || null, monto],
    (err, results) => {
      if (err) {
        console.error('Error al procesar el pago:', err);
        return res.status(500).json({ success: false, message: 'Error al procesar el pago' });
      }

      res.status(201).json({ success: true, message: 'Pago procesado exitosamente', pagoId: results.insertId });
    }
  );
});

// Barra de busqueda

// Ruta para buscar productos
app.get('/search', (req, res) => {
  const searchTerm = req.query.q;
  if (!searchTerm) {
    return res.status(400).json({ error: 'Se requiere un término de búsqueda' });
  }

  // Consulta SQL para buscar productos por nombre
  const query = `SELECT * FROM Producto WHERE nombre_producto LIKE ?`;
  connection.query(query, [`%${searchTerm}%`], (error, results) => {
    if (error) {
      console.error('Error en la consulta:', error);
      return res.status(500).json({ error: 'Error al realizar la búsqueda' });
    }

    res.json(results);
  });
});

// Configuración para escuchar en el puerto
const PORT = 4000; 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.use(express.static('public'));
