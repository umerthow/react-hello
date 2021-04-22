import React, { Component, Fragment } from 'react';
import './Lifecycle.css';


class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }

    console.log('constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     count: 2
    //   })
    // }, 3000)
    console.log('componentDidMount')

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true

  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  onChangeClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  changeBackground = (e, v) => {
    e.target.style.background = v;
  }

  render() {
    console.log('render')

    return (
      <Fragment>
      <p>LifeCycle</p>
      <hr/>
      <button className="btn" 
      
      onMouseOver={(v)=>this.changeBackground(v, "red")}  
      
      onMouseLeave={(v)=>this.changeBackground(v, "blue")} onClick={this.onChangeClick}> Lifecycle Component - {this.state.count}</button>
      </Fragment>
    )
  }
}

export default Lifecycle