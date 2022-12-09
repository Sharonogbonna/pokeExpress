const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
          <link rel="stylesheet" type="text/css" href="../css/style.css"/>
            <h1>Catch a Pokemon</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/pokemon" method="POST">
              Name: <input type="text" name="name" /><br/>
              {/* Image URL: <input type="text" name="img" /><br/> */}
              <br />
              <input type="submit" name="" value="Catch This Pokemon"/>
            </form>
        </div>);
    }
  }


module.exports = New;