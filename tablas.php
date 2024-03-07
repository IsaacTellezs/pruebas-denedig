<?php
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "nombre_de_tu_base_de_datos";

//Crear conexion
$conn = new mysqli($servername, $username, $password, $dbname);

//verificar conexcion
if ($conn->connect_error) {
    die("conexion fallida: " . $conn->connect_error);
}

//consulta sql para crear la tabla de estradas del blog
$sql_entradas = "CREATE TABLE entradas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    contenido TEXT NOT NULL,
    fecha_publicacion TIMESTAMP DEFAULT
    CURRENT_TIMESTAMP
)";

if ($conn->query($sql_entradas) === TRUE)
{
    echo "Tabla 'entradas' creada
    exitosamente<br>";
} else {
    echo "Error al crear la tabla
    'entradas': " . $conn->error . "<br>";
}

//consulta de sql para crear la tabla de usuarios
$sql_usuarios = "CREATE TABLE USUARIOS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL,
    contraseña VARCHAR(255) NOT NULL
    )";

if ($conn->query($sql_usuarios) === TRUE)
{
    echo "Tabla 'usuarios' creada
    exitosamente<br>";
} else {
    echo "Error al crear la tabla
    'usuarios': " . $conn->error . "<br>";
} 

//consulta sql para crear la tabla de comentarios
$sql_comentarios = "CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_entrada INT NOT NULL,
    id_usuario INT NOT NULL,
    comentario TEXT NOT NULL,
    fecha_comentario TIMESTAMP DEFAULT
    CURRENT_TIMESTAMP,
    FOREING KEY (id_entrada) REFERENCES
    entradas(id),
    FOREING KEY (id_usuario) REFERENCES
    usuarios(id)
    )";

if ($conn->query($sql_comentarios) === TRUE)
{
    echo "Tabla 'comentarios' creada
    exitosamente<br>";
} else {
    echo "Error al crear la tabla
    'comentarios': " . $conn->error . "<br>";
} 

$conn->close();

