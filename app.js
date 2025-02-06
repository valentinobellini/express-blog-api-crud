const express = require('express')
const app = express()
const port = 3000

// importiamo il router per l'entita post
const postsRouter = require('./routers/posts');



// definiamo l'uso di una cartella per i file statici
app.use(express.static('public'));


// utilizziamo la rotta delle pizze andando a definire la parte iniziale delle rotte
app.use("/posts", postsRouter)

// definiamo la rotta home
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})