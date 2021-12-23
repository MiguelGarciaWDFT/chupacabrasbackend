# Backend de la Aplicación Chupacabras Fanzine

Se inicio el proyecto creando una carpeta principal
que contendra dos carpetas importantes, la de server
y la de client, en server instalamos las dependencias:

* bcryptjs
* cors
* dotenv
* express
* jsonwebtoken
* mongoose

En este Backend podemos encontrar el CRUD (Create, Read, Update y Delete) de los modelos.

Contamos con los modelos de:
* Usuarios 
* Revistas

Trabajaremos con POSTMAN que nos ayudara a gestionar las APIS de nuestro proyecto, de momento sustituye a nuestro navegador, aqui se realizan pruebras de POST, GET, PUT Y DELETE. 

Iniciamos creando el "Index.js" que es donde se hace la conexión a la base de datos de MongoDB, en la cual utilizaremos la base de Producción, así mismo se crea la conexión al servidor, se establecen los Middlewares y se inician las rutas. 

Posteriormente en la carpeta de "routes" creamos las rutas para el CRUD de cada uno de los modelos, que tendrán sus controllers en la carpeta de "controllers".

Para trabajar de forma correcta sobre el userController debemos instalar 2 librerias, sobre nuestra terminal de server: npm install bcryptjs y npm install jsonwebtoken, ademas deberemos asignar un string a secret en nuestro archivo .env 

## Modelo Usuario - User. 

Cuenta con las propiedades de:

* type User - String, obligatorio, cuenta con una validacion en el frontend
* nombre - String.
* Country - String.
* email - String, cuenta con validación en el frontend
* Password - String,


Este modelo tiene tres rutas:

* Creación de usuario. 
Para su creación se utilizó el modelo de User, la dependencia de "bcryptjs" para encriptar el password y la creación de un token que fue firmado con la dependencia de "JsonWebToken"

* Iniciar sesión de usuario.
Para la sesión se obtiene el email y el password del formulario por medio del "req.body", usando un try/catch de encuentra el usuario en la base de datos, al encontrarlo compara la contraseña encriptada con "bcryptjs", establece un payload y nuevamente "jsonwebtoken" firma el token.

* Verificación de Token del usuario.
Se usó un try/catch para encontrar el ID del usuario loggeado en la base de datos.
Usa la autorización de "jsonwebtoken" para capturar el token, guardarlo en una variable, si hay token permite al usuario seguir, si no hay no puede seguir viendo la página.

## Modelo de Revistas  

Cuenta con las propiedades de:

* urlPdf - String,
* imagen - String,
* nombre - String,
* edicion - String,
* descripcion - String,
* likes - String,
* views - String,

Las rutas son dos: 

* Lectura de todos las revistas. 

* Lectura de una revista.

## 🛠 Construido con 🛠

* NodeJS
* Express
* Mongoose
* JavaScript - Funciones CRUD
* MongoDB - Base de datos
* Heroku - Despliegue

# Dependencias

* bcryptjs
* cors
* dotenv
* jsonwebtoken
