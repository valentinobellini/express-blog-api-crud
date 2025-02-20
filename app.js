// importa il modulo express
const express = require('express')
// crea l'istanza dell'applicazione express
const app = express()
// definisci la porta da utilizzare
const port = 3000



// importa cors
const cors = require("cors")

// usa cors per garantire accesso alla porta usata dal front end
app.use(cors({ origin: ["http://localhost:5173"] }))



//importa middleware notFound
const notFound = require('./middlewares/notFound')

//importa middleware handleErrors
const handleErrors = require('./middlewares/errorHandlers')


// importa il router per l'entita post
const postsRouter = require('./routers/postsRouters');

// definisci l'uso del body-parser express per "application/JSON"
app.use(express.json());

// definisci l'uso di una cartella per i file statici
app.use(express.static('public'));

// utilizza la rotta dei posts andando a definire la parte iniziale delle rotte
app.use("/posts", postsRouter)

// utilizza middleware handleErrors
app.use(handleErrors);

// utilizza middlewares notFOund
app.use(notFound);


// avvia l server e mettilo in ascolto sulla porta selezionata
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})