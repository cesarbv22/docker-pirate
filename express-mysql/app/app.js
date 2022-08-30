const express = require("express"); // utilización de dependencias que se instalan en el package.json
const morgan = require("morgan");

const app = express();// declaración de la aplicación y forma de usar API
const router = require("./routes/developers.js");// dependencia que es equivalente a un controlador, permite redireccionar cuando
//alguien haga los request y teniendo en cuenta que se redireccione a servicios, lógica de negocios o así. Es una importación de 
//dependencias relativa, por el

//configuración del puerto. Cuando tenga || quiere decir que está tratando de acceder a la variable de entorno o de lo contrario
//el puerto 3000 
const PORT = process.env.APP_PORT || 3000;

app.disable("etag"); // Disable cache 304 status-code
app.use(morgan("short")); // Log server requests, esto es para hacer monitoreo de las apis 
app.use(express.json()); // Parse JSON bodies (legacy was body-parser)
app.use(router); // Expand routes functionalities with custom router

app.get("/", (req, res) => {
  res.status(200).json({ message: "End of World, Kono Dio Da!" });// mensaje que se coloca para ver si funca
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // aquí se le dice a la aplicación, el puerto por el que va a 
//funcionar 
module.exports = app;
