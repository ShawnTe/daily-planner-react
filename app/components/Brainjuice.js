var React = require('react');

class Brainjuice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBJ: 'All',
    };

    this.updateBJ = this.updateBJ.bind(this);
  }
  updateBJ(bj) {
    this.setState(function () {
      return {
        selectedBJ: bj,
      }
    });
  }
  render() {
    var brainjuices = ['All', 'Focus', 'Creative', 'Busywork'];

    return (
      <div>
        <ul className='brainjuices'>
          {brainjuices.map(function (bj) {
            return (
              <li
                style={bj === this.state.selectedBJ ? {color: '#d0021b'} : null}
                onClick={this.updateBJ.bind(null, bj)}
                key={bj}>
                  {bj}
              </li>
            )
          }, this)}
        </ul>
      </div>
    )
  }
}

module.exports = Brainjuice;
