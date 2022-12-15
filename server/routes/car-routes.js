const express = require('express');
const app = express();
const router = express.Router();

// create data
router.app.post('/create', (req, res) => {
    res.send('Create')
})

// read all data 
router.app.get('/all', (req, res) => {
    res.send('Get all')
})

// read one 
router.app.get('/:id', (req, res) => {
    res.send('Get one')
})

// update data
router.app.put('/update/:id', (req, res) => {
    res.send('Update one')
})

// delete data
router.app.delete('/delete/:id', (req, res) => {
    res.send('Delete one')
})

module.exports = router;