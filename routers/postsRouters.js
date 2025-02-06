// importiamo express e utlizziamo la parte di routing
const express = require('express')
const router = express.Router();
// const posts = require('../data/posts');


// rotte di CRUD dei posts
// index
router.get('/', function (req, res) {
});


// show
router.get('/:id', function (req, res) {
});


// store
router.post('/', function (req, res) {
});


// update
router.put('/:id', function (req, res) {
});


// modify
router.patch('/:id', function (req, res) {
});


// destroy
router.delete('/:id', function (req, res) {
});


// esportiamo il modulo del router
module.exports = router;