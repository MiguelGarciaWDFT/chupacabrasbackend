---Creacion de la pagina chupacabrasfanzine---

Se inicio el proyecto creando una carpeta principal
que contendra dos carpetas importantes, la de server
y la de client, en server se trabajan las instalaciones
de express, mongoose y dotenv para poder levantar un servidor. En la carpeta client se trabaja haciendo 
una instalacion basica de React: npx create-react-app .

---SERVER---
Debemos de crear un archivo .env sobre la carpeta server la cual tendra el puerto a conectar y el string con el nombre de la base de datos.

En la carpeta de server crearemos un archivo index.js que nos serviara durante todo el proyecto para gestionar la conexion a base de datos y el enlace a nuestras subrutas
constantemente actualizaremos importaciones, middlewares, rutas y el servidor.

Recordemos que en nuestro package.json configuraremos nuestros scrips:
 "dev": "nodemon index.js",
 "start": "node index.js"

En la carpeta server se crea la siguiente carpeta y archivo:
config > db.js > tendra nuestro patron modular de la base de datos

si todo es correcto podemos usar el comando npm run dev
para verificar que estamos conectados a nuestra base de datos

En la carpeta server se crea la siguiente carpeta y archivos:
models>User.js
      >Revista.js tendra nuestro esquema de la revista
Actualizaremos nuestro index.js con la subruta de nuestra revista que se conecta a nuestra rutas

A continuacion en la carpeta server se crea la siguiente carpeta y archivos:
routes> guitar.js > para realizar el proceso de ruta: importaciones, ruteo y exportaciones las cuales se estaran
actualizando y gestionando los controllers

A continuacion en la carpeta server se crea la siguiente carpeta y archivos:
controllers>revistaController.js que enviara las funciones de los controladores
-----
Trabajaremos con POSTMAN que nos ayudara a gestionar las APIS de nuestro proyecto, de momento sustituye a nuestro navegador, aqui se realizan pruebras de POST, GET, PUT Y DELETE. y tambien gestiona los deploys. Se crea un workspace, una coleccion y un folder, en dicho folder se trabajan las APIs.
-----

Trabajaremos constantemente creando nuevas funciones sobre nuestro controller que nos permita crear, leer, editar y borrar nuestras revistas, de igual forma anexaremos rutas a nuestra ruta raiz para que funcione nuestro CRUD y verificaremos cada accion en POSTMAN.

Crearemos un archivo dentro de server llamado .gitignore
con:
node_modules/
.env
package-lock.json

Subiremos nuestro backend a Github, en la terminal de nuestra carpeta usaremos los siguientes comandos server
git init
git add -A
git commit - "Servidor inicial"


Cuando tengamos listo nuestro CRUD haremos un deploy de nuestro backend en HEROKU creando una nueva APP con el nombre de nuestra pagina.











