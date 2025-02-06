// importiamo express e utlizziamo la parte di routing
const express = require('express')
const router = express.Router();
const posts = require('../data/posts');


// rotte di CRUD dei posts
// index
router.get('/', function (req, res) {
    
    res.json(posts);
});


// show
router.get('/:id', function (req, res) {
    // Converti id in numero
    const postId = parseInt(req.params.id);
    // Trova il post corrispondente
    const post = posts.find(p => p.id === postId); 

    if (!post) {
        return res.status(404).json({ error: 'Post non trovato' });
    }

    res.json(post);
});


// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});


// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
});


// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});


// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});


// esportiamo il modulo del router
module.exports = router;