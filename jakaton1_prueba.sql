DROP DATABASE IF EXISTS prueba1;
CREATE DATABASE prueba1;

USE prueba1;
CREATE TABLE consultas
(
	ID int auto_increment,
    NOMBRES varchar(80),
    APELLIDOS varchar(80),
    TELEFONO  char(9),
    EMAIL varchar(30),
    MSG varchar(500),
    CONTRASEÑA varchar(30),
    PRIMARY KEY(ID)
);

INSERT INTO consultas
(NOMBRES, APELLIDOS, TELEFONO, EMAIL, MSG, CONTRASEÑA)
values 
('Lizbet Iris','Arias Tinco' ,'930548547', 'lizbet.arias@outlook.com','Deseo saber cuando con las incripciones del plantes para primaria', 'lizbetarias'), 
('Andrea Luciana','Aguirre Meneses' ,'930566011','andrea.meneses@outlook.com','Deseo saber las vacantes de la I.E.P', 'andreamailof');

SELECT * FROM consultas;
