var React = require('react');

class Projects extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedProject: 'All',
    };

    this.updateProject = this.updateProject.bind(this);
  }
  updateProject(project) {
    this.setState(function () {
      return {
        selectedProject: project,
      }
    });
  }
  render () {
    var projects = ['All', 'Get job', 'Learn JS', 'FuzzyHat'];

    return (
      <div>
        <ul className='projectsxxx brainjuices'>
          {projects.map(function (proj) {
            return (
              <li
              style={proj === this.state.selectedProject ? {color: '#d0021b'} : null}
              onClick={this.updateProject.bind(null, proj)}
              key={proj}>
                {proj}
              </li>
            )
          }, this)}
        </ul>
      </div>
    )
  }

}

module.exports = Projects;
