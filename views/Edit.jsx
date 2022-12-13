const React = require('react');

class Edit extends React.Component{
  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="../css/style.css"/>
        <h1>Update Pokemon</h1>
        <form action={`/pokemon/${this.props.pokemon._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.pokemon.name}/><br/>
           Image URL: <input type="text" name="img" defaultValue={this.props.pokemon.img} />
           <br />Hint: try changing url to original/(pokemon name)-gen1 <br /><br />
        <input type="submit" name="" value="Edit This Pokemon"/>
            </form>
            <br />
            <a href={`/pokemon`}>Back to Pokedex</a>
      </div>
    )
  }
}
module.exports= Edit;