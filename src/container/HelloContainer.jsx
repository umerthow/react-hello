import React from 'react'
import BlogPost from './BlogPost/BlogPost'
// import YoutubeComponent from '../components/YoutubeComp/YoutubeComponent'
import './HelloContainer.css'
import Lifecycle from './Lifecycle/Lifecycle'
import Product from './Products/ProductContainer'

import { BrowserRouter, Route, Link } from 'react-router-dom'
class StateFullComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showComponent: true
    }
  }


  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false
    //   })
    // }, 14000)
   
  }



  render() {
    return (
      <BrowserRouter>
      {/*
      <div>
      <Lifecycle/>
      
        <div className="wrapper">
          <YoutubeComponent title="image ABC" link="https://picsum.photos/id/237/200/300"/>
          <YoutubeComponent title="image A12" link="https://picsum.photos/200/300?grayscale"/>
          <YoutubeComponent title="image B34" link="https://picsum.photos/200/300/?blur"/>
          <YoutubeComponent title="image C444" />
          <YoutubeComponent title="image D3K" />
        </div>
      </div>

      */}
        <div className='navigation'>
          <Link to='/'> Blog Post</Link>
          <Link to='/product'>Product</Link>
          <Link to='/lifecycle'>Lifecycle</Link>
        </div>
        <Route path='/' exact component={BlogPost}></Route>
        <Route path='/product' component={Product}></Route>
        <Route path='/lifecycle' component={Lifecycle}></Route>
      </BrowserRouter>
    )
  } 
}


export default StateFullComponent