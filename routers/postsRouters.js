// importiamo express e utlizziamo la parte di routing e il controller
const express = require('express')
const router = express.Router();
const postsController = require('../controllers/postsController')


// rotte di CRUD dei posts

// index
router.get('/', postsController.index);


// show
router.get('/:id', postsController.show);


// store
router.post('/', postsController.store);


// update
router.put('/:id', postsController.update);


// modify
router.patch('/:id', postsController.modify);


// destroy
router.delete('/:id', postsController.destroy);


// esportiamo il modulo del router
module.exports = router;