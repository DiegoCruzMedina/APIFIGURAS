const { request, response } = require("express");
const { figuras, figuras } = require("../figuras.js");

const getFiguras = (req, res) => {
    res.json(figuras);
};

const getFigurasId = (req, res) => {
    const id = req.params.id;
    const figuras = figuras.find(p => p.id === id);
    if (figuras) {
        res.json(figuras);
    } else {
        res.status(404).send("Producto no encontrado");
    }
};

module.exports = {
    getFiguras,
    getFigurasId,
};