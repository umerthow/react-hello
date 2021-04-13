import React, { Component } from 'react'
import './CardContainer.css'

class CardProduct extends Component {

  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }


  state = {
    order: 4,
    total: 0,
    note: "test"
  }

  hanldeCounterChange = (newOrderValue) => {
    this.props.onCounterChange(newOrderValue)
  }
  handlePlus = () => {
   
    this.setState({
      order: this.state.order + 1
    }, () => {
      this.hanldeCounterChange(this.state.order)
    })

  
  }

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState({
        order: this.state.order - 1
      }, () => {
        this.hanldeCounterChange(this.state.order)
      })
    
    }
  }

  handleInputChange = (event) => {
    this.setState({
      order: event.target.value
    },() => {
      this.hanldeCounterChange(this.state.order)
    })
  }

  render() {
    return ( 
        <div className="card">
          <div className="img-thumb-prod">
          <img src="https://picsum.photos/200/300?grayscale" alt=""></img>
        </div>
            <p className="product-title">Daging Ayam</p>
            <p className="product-price">5000</p>

        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>-</button>
          <input type="number" value={this.state.order} onChange={this.handleInputChange}/>
          <button className="plus" onClick={this.handlePlus}>+</button>
        </div>
      </div>
    );
  }
}

export default CardProduct