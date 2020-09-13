const express = require('express');
const authMiddleWare = require('../middlewares/auth');
const router = express.Router();
const Register = require('../models/registers');

router.use(authMiddleWare);

router.get('/' , (req, res) => {
    res.send({ok: true, user: req.userId});
});

// cadastrar disponíveis para adoção
router.post('/' , async (req, res) => {
    try {
        const register = await Register.create(req.body);
        return res.send({ register });
    } catch(err) {
        return res.status(400).send({ error: err.message});
    }  
});

module.exports = app => app.use('/registers', router);
