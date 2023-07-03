// Importar librerias


import express, { json } from "express";
import { createConnection } from "mysql";
var app = express();
import cors from "cors";


// Configuraciones


app.use(json());
app.use(cors());


var conexion = createConnection(
    {
        host: "localhost",
        user: "root",
        password: "admin",
        database: "prueba1"
    }
);


conexion.connect(
    function (error) {
        if (error) {
            throw error;
        } else {
            console.log("Conexion Exitosa");
        }
    }
);


const port = process.env.PUERTO || 3000;


app.listen(
    port, function () {
        console.log("Servidor funcionando en puerto: " + port)
    }
);


// localhost: 3000
app.post(
    "/api/consultas", (req, res) => {
        let data = {
            NOMBRES: req.body.NOMBRES,
            APELLIDOS: req.body.APELLIDOS,
            TELEFONO: req.body.TELEFONO,
            EMAIL: req.body.EMAIL,
            MSG: req.body.MSG,
            CONTRASEÑA: req.body.CONTRASEÑA
           
        }
        let sql = "INSERT INTO consultas SET ?";
        conexion.query(
            sql, data, function (error, resultados) {
                if (error) {
                    throw error;
                } else {
                    console.log(data),
                    res.send(data)
                }
            }
        );
    }
);