const { Router } = require('express');
const router = new Router();


const Data = require('../ejemplo.json');

router.get('/', (req, res, next) => {
    res.json(Data);
    next();
});

router.post('/', (req, res) => {
    const id = Data.length + 1;
    const { name, lastname, telephone} = req.body;
    const newData = { ...req.body, id };
    if (id && name && lastname && telephone) {
        Data.push(newData);
        res.json(Data);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

module.exports = router;