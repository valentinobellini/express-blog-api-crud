// importiamo il modulo contenente l'array di oggetti (posts)
const posts = require('../data/posts');

// definiamo le logiche per ciascuna rotta

// index
function index(req, res) {


    // inizialmente il menu filtrato corrisponde a quello originale
    let filteredPosts = posts;
    // se la richiesta http contiene una query "tags"...
    if (req.query.tags) {
        // ... filtra e crea un nuovo array...
        filteredPosts = posts.filter(
            // ... con solo i post che contengono il valore "tags" specificato
            post => post.tags.includes(req.query.tags)
        );
    }
    // restituiamo la variabile filteredPosts
    res.json(filteredPosts);
};


// show
function show(req, res) {
    // converti id in numero
    const postId = parseInt(req.params.id);
    // trova il post corrispondente
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: 'Post non trovato' });
    }

    res.json(post);
};


// store
function store(req, res) {
    res.send('Creazione nuovo post');
};


// update
function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
};


// modify
function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
};


// destroy
function destroy(req, res) {
    // converti id in numero
    const postId = parseInt(req.params.id);
    // trova il post corrispondente
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: 'Post non trovato' });
    }


    // rimuovi il post dall'elenco di posts
    posts.splice(posts.indexOf(post), 1);

    //logga array modificato per debug
    console.log(posts);


    // restituisci lo stato di avvenuta cancellazione
    res.sendStatus(204)
};


// esportiamo il modulo del router
module.exports = { index, show, store, update, modify, destroy }