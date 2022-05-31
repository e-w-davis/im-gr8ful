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
router.delete("/:id", (req, res) => {
    gr8.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/')
    });
});

// U
router.put("/:id", (req, res) => {
    gr8.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedGr8) => {
            res.redirect(`/${req.params.id}`)
        }
    )
})

// C
router.post('/', (req, res)=> {
    gr8.create(req.body, (error, createdGr8) => {
        res.redirect('/');
    });
});

// E
router.get("/:id/edit", (req, res) => {
    gr8.findById(req.params.id, (error, foundGr8) => {
        res.render("edit.ejs", {
            gr8: foundGr8,
        });
    });
});

// S
router.get('/:id', (req, res) => {
    gr8.findById(req.params.id, (err, foundGr8) => {
        res.render('show.ejs', {
            gr8: foundGr8,
        });
    });
});

module.exports = router;