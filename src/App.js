import logo from './logo.svg';
import './App.css';
import React from 'react';
import ConditionalSection from './sections/conditional';
import cars from './data/cars.json';
import Forms from './sections/forms';
import PropTypes from 'prop-types';
import ComponentWillMount from './sections/life-cycle/componentWillMount'
import Render from './sections/life-cycle/render'
import ComponentDidMount from './sections/life-cycle/componentDidMount'
import FetchExample from './sections/fetch-example'
import EjemploDeCicloDeActualizacion from './sections/life-cycle/ejemploDeCicloDeActualizacion'
import ComponentWillUnmount from './sections/life-cycle/componentWillUnmount'
import ComponentDidCatch from './sections/life-cycle/componentDidCatch'
import ContainerComponent from './sections/container-component'

// const TextWithNumber = (props) =>
//   <div>
//     <p>{props.text}</p>
//     <p>{props.number}</p>
//     <p>{props.boolean}</p>
//   </div>

// class Button extends React.PureComponent {
//   render() {
//     return (
//       <div>
//         <h3>Buenas Prácticas 1 - Composición vs herencia</h3>
//         <button style={{ borderColor: this.props.borderColor, display: 'block', margin: 50 }}>
//           {this.props.label}
//         </button>
//       </div>
//      )
//   }
// }

const Button = ({ borderColor = 'red', label }) => ( // Cuando un componente no tiene states se puede pasar a función y crear un componente Stateless
  <button style={{ borderColor, display: 'block', margin: 50 }}>
    {label}
  </button>
)

Button.propTypes = {
  borderColor: PropTypes.string,
  label: PropTypes.string.isRequired
}

class DangerButton extends React.Component {
  render () {
    return (
      <Button borderColor='red' label={this.props.label}></Button>
    )
  }
}

class ButtonWithLegend extends React.Component {
  render() {
    return (
      <div>
        <Button label={this.props.label} borderColor={this.props.borderColor}></Button>
        <small>{this.props.legend}</small>
      </div>
     )
  }
}

class Box extends React.Component {
    render() {
      return (
        <div style={{border: '1px solid white', margin: 5, padding: 10}}>
          {this.props.children}
        </div>
       );
    }
  }

  // class Article extends React.Component {
  //   static propTypes= {
  //     author: PropTypes.string.isRequired
  //   }
  //   state = {  }
  //   render() {
  //     const { author, children, date, title } = this.props
  //     return (
  //       <section>
  //         <h2>{title}</h2>
  //         {author && <p><em>Escrito por {author}</em></p>}
  //         <Box>{date}</Box>
  //         <article>
  //           {children}
  //         </article>
  //       </section>
  //      )
  //   }
  // }

  function Article (props) { // Cuando un componente no tiene states se puede pasar a función y crear un componente Stateless
    return (
      <section>
        <h2>{props.title}</h2>
        <p><em>Escrito por {props.author}</em></p>
        <Box>{props.date}</Box>
        <article>
          {props.children}
        </article>
      </section>
    )
  }

  Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    children: PropTypes.any
  }

  class TestingComponent extends React.Component {
    render () {
      const {
        arrayOfNumbers,
        isActivated,
        multiply, objectWithInfo,
        number,
        text,
        title
      } = this.props
      const textByBool = isActivated ? 'cierto' : 'falso'
      const mappedNumbers = arrayOfNumbers.map(multiply)

      return (
        <div>
          {title}
          <p>{mappedNumbers}</p>
          <p>{objectWithInfo.key2}</p>
          <p>{text}</p>
          <p>{number}</p>
          <p>{textByBool}</p>
        </div>
      )
    }
  }

  class Counter extends React.Component {
    constructor(props) {
      super(props)
      this.state = { contador: this.props.initialCounter }
      setInterval(() => {
        this.setState({ contador: this.state.contador + 1 })
      }, 1000)
    }

    render () {
      return <CounterNumber number={this.state.contador}/>
    }
  }

  Counter.defaultProps = {
    initialCounter: 0
  }

  class CounterNumber extends React.Component {
    render () {
      return <span>{this.props.number}</span>
    }
  }

  const Subtitle = (props) => <h2>{props.subtitle}</h2>

  class CarItem extends React.Component {
    render () {
      const { car } = this.props

      return (
        <li>
          <p><strong>Nombre: </strong>{car.name}</p>
          <p><strong>Marca: </strong>{car.company}</p>
        </li>
      )
    }
  }

  class CicloMontajeConstructor extends React.Component {
    constructor(props) {
      super(props) // este método llama al constructor de Component
      // Iniciliazamos el state de nuestro componente
      this.state = { mensajeInicial: 'mensaje inicial' }
    }
    handleClick = () => {
      this.setState({ mensajeInicial: 'mensaje cambiado' })
    }
    render() {
      return (
        <div>
          <h4>Ciclo de montajer: constructor</h4>
          <p>{ this.state.mensajeInicial }</p>
          <button onClick={this.handleClick}>
            Cambiar mensaje
          </button>
        </div>

       );
    }
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ConditionalSection/>
        <TestingComponent
          arrayOfNumbers={[2, 3, 10]}
          isActivated
          multiply={(number) => number * 4}
          number={3}
          objectWithInfo={{key: 'value', key2: 'value2'}}
          text='Probando texto'
          title={<h1>Título de la app</h1>}
        />
        <Subtitle subtitle='Contador con state'/>
        <Counter initialCounter={100}/>
        <h4>Trabajando con listas de objetos</h4>
        <ul>
          {
            cars.map(car => {
              return <CarItem key={car.id} car={car} />
            })
          }
        </ul>
        <Forms/>
        <h4>Children Props</h4>
        <Article
          author='yo'
          date={new Date().toLocaleDateString()}
          title='Artículo sobre la pop children'
        >
          <p>El contenido del no se que blabla blibli</p>
          <strong>Etiqueta Strong dentro del propio componente artículo</strong>
        </Article>
        <CicloMontajeConstructor></CicloMontajeConstructor>
        <ComponentWillMount></ComponentWillMount>
        <Render></Render>
        <ComponentDidMount></ComponentDidMount>
        <FetchExample></FetchExample>
        <EjemploDeCicloDeActualizacion></EjemploDeCicloDeActualizacion>
        <ComponentWillUnmount></ComponentWillUnmount>
        <ComponentDidCatch></ComponentDidCatch>
        <Button label='Componente button'></Button>
        <DangerButton label='Danger button!'></DangerButton>
        <ButtonWithLegend label='Button with legend' legend='leyenda'></ButtonWithLegend>
        <ContainerComponent></ContainerComponent>
      </header>
    </div>
  );
}

export default App;
