const express = require('express')
const app = express()
const port = 3000

// importiamo il router per l'entita post
const postsRouter = require('./routers/postsRouters');

// definiamo l'uso del body-parser express per "application/JSON"
app.use(express.json());

// definiamo l'uso di una cartella per i file statici
app.use(express.static('public'));


// utilizziamo la rotta dei posts andando a definire la parte iniziale delle rotte
app.use("/posts", postsRouter)

// definiamo la rotta home
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})