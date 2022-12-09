const React = require('react')
// const myStyle = {
//    color: '#ffffff',
//    backgroundColor: '#000000',
//  };
class Index extends React.Component {
   render () {
   const { pokemon } = this.props
   console.log(this.props)
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="../css/style.css"/>
         <a href={`/pokemon/new`}>Catch a New Pokemon</a>
      <h1>Pokedex</h1>
      <ul>
          {pokemon.map((pokemon, i) => {
            return (
              <li>
               <a href={`/pokemon/${pokemon.id}`}>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</a> 
              </li>
            );
          })}
        </ul>
      </div>
     );
    }
 }
 module.exports  = Index;