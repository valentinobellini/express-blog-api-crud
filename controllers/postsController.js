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
    // crea nuovo id incrementando l'ultimo id presente in array
    const newId = posts[posts.length -1].id + 1;

    // crea il nuovo oggetto 
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    // pusha il nuovo post nell'array "posts"
    posts.push(newPost);

    // logga "posts" per debug
    console.log(posts);

    // restituisci lo status corretto e il nuovo post
    res.status(201);
    res.json(newPost);
    
};


// update
function update(req, res) {
    // converti id in numero
    const postId = parseInt(req.params.id);
    // trova il post corrispondente
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: 'Post non trovato' });
    }
    
    // aggiorna il post selezionato
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    // logga posts per debug
    console.log(posts);
    
    // restituisci il post aggiornato
    res.json(post);
};


// modify
function modify(req, res) {
        // converti id in numero
    const postId = parseInt(req.params.id);
    // trova il post corrispondente
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: 'Post non trovato' });
    }
    
    // aggiorna il post selezionato
    post.title = req.body.title ? req.body.title : post.title ;
    post.content = req.body.content ? req.body.content : post.content ;
    post.image = req.body.image ? req.body.image : post.image ;
    post.tags = req.body.tags ? req.body.tags : post.tags ;


    // logga posts per debug
    console.log(posts);
    
    // restituisci il post aggiornato
    res.json(post);
    
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