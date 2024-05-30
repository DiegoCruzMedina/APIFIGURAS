const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3002; 

const { getFiguras, getFigurasId } = require("./controllers/getFiguras.js");

// Usa el middleware CORS
app.use(cors());

app.get("/", getFiguras);
app.get("/id/:id", getFigurasId);

app.listen(port, () => {
    console.log(`Corriendo ok en el puerto: ${port}`);
});