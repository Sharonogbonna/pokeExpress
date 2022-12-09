const React = require('react')
const myStyle = {
   color: '#ffffff',
   backgroundColor: '#000000',
 };
class Show extends React.Component {
   render () {
      const clickedPokemon = this.props.Pokemon
      return (// you can only return one element but one element can have baby elements so a div etc
        <div>
         <link rel="stylesheet" type="text/css" href="../css/style.css"/>
         <h1>Gotta Catch 'Em All</h1>
         <h2>{clickedPokemon.name.toUpperCase()}</h2>
         <img src={'http://img.pokemondb.net/artwork/' + clickedPokemon.name.toLowerCase() + '.jpg'} alt="picture of pokemon" />
         <br />
         <a href="/pokemon">Back to Pokedex</a> |  <a href={`/pokemon/new`}>Catch New Pokemon</a>
        </div>
        
       )
      }
 }
 module.exports  = Show;