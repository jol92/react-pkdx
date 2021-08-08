import React, { Component } from 'react';

class FetchExample extends Component {
  state = { bpi: {} }
  componentDidMount() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(data => {
        const {bpi} = data
        this.setState({ bpi })
      })

    // Con async await (hay que añadir async al método)
    // const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    // const currencies = await res.json()
    // const {bpi} = currencies
    // this.setState({bpi})
  }
  _renderCurrencies() {
    const { bpi } = this.state
    const currencies = Object.keys(bpi) // ['EUR', GBP, USD]
    return currencies.map(currency => (
        <div key={currency}>
          1 BTC is {bpi[currency].rate}
          <span>{currency}</span>
        </div>
    ))
  }
  render() {
    return (
      <div>
        <h1>Fetch Example</h1>
        {this._renderCurrencies()}
      </div>
      );
  }
}

export default FetchExample;