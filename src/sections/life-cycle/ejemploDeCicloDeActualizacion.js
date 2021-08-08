import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
  panda: 'https://media.istockphoto.com/photos/cute-panda-bear-climbing-in-tree-picture-id523761634?k=6&m=523761634&s=612x612&w=0&h=0L2VZTQvcOVkSmj0ZLL9ntIw2FXqJwZ70fz2Qmq6D-c=',
  cat: 'data:image/jpeg;base64,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',
  dolphin: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5d9208eb5cafe81a0f3c986a/delfin0_0.jpg'
}
const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends Component {
  state = { src: ANIMAL_IMAGES[this.props.animal] }

  componentWillReceiveProps (nextProps) {
    // console.clear()
    console.log('1. componentWillReceiveProps', nextProps)
    this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })
  }

  shouldComponentUpdate (nextProps) {
    console.log('2. shouldComponentUpdate', nextProps)
    return this.props.animal !== nextProps.animal
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('3. componentWillUpdate', nextProps, nextState)
    const img = document.querySelector('img')
    console.log('from img element', { alt: img.alt })
    // web animations api
    img.animate([ {
      filter: 'blur(0px)'
    }, {
      filter: 'blur(2px)'
    }], {
      duration: 500,
      easing: 'ease'
    })
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('4. componentDidUpdate')
    const img = document.querySelector('img')
    img.animate([
      {
        filter: 'blur(2px)'
      },
      {
        filter: 'blur(0px)'
      }
    ], {
      duration: 1500,
      easing: 'ease'
    })
    console.log('from img element', { alt: img.alt })
  }

  render () {
    console.log('-> render')
    return (
      <div>
        <p>Selected {this.props.animal}</p>
        <img
          alt={this.props.animal}
          src={this.state.src}
          width='250'
        />
      </div>
    )
  }
}

AnimalImage.propTypes = {
  animal: PropTypes.oneOf(ANIMALS)
}

class EjemploDeCicloDeActualizacion extends Component {
  state = { animal: 'panda' }

  _renderAnimalButton = (animal) => {
    return (
      <button
        // disabled={animal === this.state.animal}
        key={animal}
        onClick={() => this.setState({ animal })}>
        {animal}
      </button>
    )
  }

  render () {
    return (
      <div>
        <h4>Ciclo de Actualización, Ejemplo de: ComponentDidUpdate</h4>
        {ANIMALS.map(this._renderAnimalButton)}
        <AnimalImage animal={this.state.animal}/>
      </div>
    )
  }
}

export default EjemploDeCicloDeActualizacion