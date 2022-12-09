require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')

const Pokemon = require('./models/pokemonSchema.js')
//set up middleware
app.use((req,res, next) => {
    console.log('I run for all routes')
    next()
})
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//set up mongoose
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})
app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
        res.render('Index', {pokemon: allPokemon})
    })
})
app.get('/pokemon/new', (req,res) => {
    res.render('New')
})
app.post('/pokemon', (req,res) => {
    let pokemonBody = req.body
    pokemonBody.img = pokemonBody.name
    Pokemon.create(pokemonBody, (error, createdPokemon) => {
        res.redirect('/pokemon')
    })
})
app.get('/pokemon/:pokemonId', function(req, res){
    Pokemon.findById(req.params.pokemonId, (err, chosenPokemon) => {
    res.render('Show', {Pokemon: chosenPokemon})
    })
})


app.listen(port, function () {
    console.log('Listening...');
  });
