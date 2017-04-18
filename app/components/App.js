var React = require('react');
var Brainjuice = require('./Brainjuice');

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Brainjuice />
      </div>
    )
  }
}

module.exports = App;
