import React from 'react'

class LoginButton extends React.Component {
  render () {
    return <button>Iniciar Sesión</button>
  }
}

class LogoutButton extends React.Component {
  handleClick (e) {
    console.log(e)
    console.log(e.nativeEvent)
  }
  render () {
    return (
      <div>
        <p>Bienvenido, Usuario!</p>
        <button onClick={this.handleClick}>Cerrar sesión</button>
      </div>
    )
  }
}

export default class ConditionalSection extends React.Component {
  constructor() {
    super()
    this.state = { isUserLogged: true }
  }

  render () {
    return (
      <div>
        <h4>Conditional Rendering</h4>
        {this.state.isUserLogged ? <LogoutButton/> : <LoginButton/>}
      </div>
    )
  }
}