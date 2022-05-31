const express = require('express');
const router = express.Router();
const gr8 = require('../models/gr8.js');

// I
router.get('/', (req, res) => {
    gr8.find({}, (err, foundGr8) => {
        res.render('index.ejs', {
            gr8: foundGr8,
        });
    });
});

// N
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

// D

// U

// C
router.post('/', (req, res)=> {
    gr8.create(req.body, (error, createdGr8) => {
        res.redirect('/');
    });
});

// E

// S
router.get('/:id', (req, res) => {
    gr8.findById(req.params.id, (err, foundGr8) => {
        res.render('show.ejs', {
            gr8: foundGr8
        });
    });
});

module.exports = router;