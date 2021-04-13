import React, { Component } from 'react';
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
    console.log('componentDidMount')

  }

  shouldComponentUpdate(nextProps, nextState) {

    console.log('shouldComponentUpdate')

  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }



  render() {
    console.log('render')
    return (
      <button className="btn"> Lifecycle Component {this.state.count}</button>
    )
  }
}

export default Lifecycle