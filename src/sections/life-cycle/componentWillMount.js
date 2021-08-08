import React, { Component } from 'react';

class ComponentWillMount extends Component {
  constructor(props) {
    console.log('constructor')
    super(props);
    this.state = { message: 'mensaje inicial' }
  }

  // componentWillMount() { Usar sólo en caso de que el constructor tenga demasiado código
  //   console.log('componentWillMount')
  //   this.setState({ message: 'mensaje modificado' })
  // }

  render() {
    console.log('render')
    return (
      <div>
        <h4>
          Ciclo de montaje: componentWillMount
        </h4>
        <p>
          {this.state.message}
        </p>
      </div>
     );
  }
}

export default ComponentWillMount;