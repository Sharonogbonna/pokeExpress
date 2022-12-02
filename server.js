const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js')


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})
app.get('/pokemon', (req, res) => {
    res.render('Index', {allPokemon: pokemon})
})
app.get('/pokemon/:pokemonId', function(req, res){
    res.render('Show', { //second param must be an object
        chosenPokemon: pokemon[req.params.pokemonId]
    })
})





app.listen(port, function () {
    console.log('Listening...');
  });
