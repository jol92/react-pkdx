import { Component } from 'react';

class Render extends Component {
  constructor(props) {
    super(props);
    this.state = { mensaje: 'mensaje inicial' }
  }
  render() {
    console.log('render')
    return (
      this.state.mensaje === 'mensaje inicial' ? 'sip' : null
     );
  }
}

export default Render;