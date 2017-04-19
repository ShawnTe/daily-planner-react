var React = require('react');
var Brainjuice = require('./Brainjuice');
var Projects = require('./Projects');

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Brainjuice />
        <Projects />
      </div>
    )
  }
}

module.exports = App;
