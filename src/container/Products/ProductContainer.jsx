import React, { Component, Fragment } from 'react'
import CardProduct from '../Cards/CardContainer'
import './ProductContainer.css'

class Product extends Component {
  state = {
    order: 4,
    total: 0,
    note: "test"
  }
  
  handleCounterChange = (count) => {
    this.setState({
      order: count
    })
  }


  render() {
    return ( 
      <Fragment>
      <p>Product</p>
      <hr/>
      <div className="header">
        <div className="logo">
          <img src="https://picsum.photos/400/10?grayscale" alt=""></img>
        </div>
        <div className="troley">
        <div className="count">{this.state.order}</div>
        </div>
      </div>

      <CardProduct onCounterChange={(count)=>this.handleCounterChange(count)} />
      </Fragment>
    );
  }
}

export default Product