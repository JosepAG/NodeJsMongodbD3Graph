const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res )=>{
    res.send('Ingresando a la aplicaci�n')
});

router.get('/users/signup', (req, res) => {
    res.send('Formulario de autenticaci�n')
});

module.exports = router;