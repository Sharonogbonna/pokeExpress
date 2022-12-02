const React = require('react')
class Show extends React.Component {
   render () {
      const clickedPokemon = this.props.chosenPokemon
      return (// you can only return one element but one element can have baby elements so a div etc
        <div>
         <link rel="stylesheet" type="text/css" href="css/style.css"/>
         <h1>Gotta Catch 'Em All</h1>
         <h2>{clickedPokemon.name.toUpperCase()}</h2>
         <img src={clickedPokemon.img + '.jpg'} alt="picture of pokemon" />
         <br />
         <a href="/pokemon">back</a>
        </div>
        
       )
      }
 }
 module.exports  = Show;