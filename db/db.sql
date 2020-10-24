CREATE DATABASE IF NOT EXISTS documentacionautos;
USE documentacionautos;

CREATE TABLE autos (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(50) NOT NULL,
    año VARCHAR(10) NOT NULL,
    placa VARCHAR(8) not null,
    estado VARCHAR(20) not null
);


DESCRIBE autos;

/*solucion*/
/*ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourRootPassword';
FLUSH PRIVILEGES*/