// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {result: 0, total: 0, heads: 0, tails: 0}

  btn = () => {
    const result1 = Math.floor(Math.random() * 2)

    if (result1 === 0) {
      this.setState(p => ({heads: p.heads + 1}))
    } else {
      this.setState(p => ({tails: p.tails + 1}))
    }

    this.setState({result: result1})
    this.setState(p => ({total: p.total + 1}))
  }

  render() {
    const {result, total, heads, tails} = this.state

    return (
      <div className="greet1">
        <div className="greet2">
          <h1 className="para1">Coin toss game</h1>
          <p>heads or tails</p>

          {result === 0 ? (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="avatar"
            />
          ) : (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="avatar"
            />
          )}

          <button className="button" type="button" onClick={this.btn}>
            coin toss
          </button>
          <div className="greet3">
            <p className="para">total:{total}</p>
            <p className="para"> heads:{heads}</p>
            <p className="para">tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
