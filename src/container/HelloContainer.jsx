import React from 'react'
import YoutubeComponent from '../components/YoutubeComp/YoutubeComponent'
import './HelloContainer.css'
class StateFullComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
      <YoutubeComponent title="image ABC" link="https://picsum.photos/id/237/200/300"/>
      <YoutubeComponent title="image A12" link="https://picsum.photos/200/300?grayscale"/>
      <YoutubeComponent title="image B34" link="https://picsum.photos/200/300/?blur"/>
      <YoutubeComponent title="image C444" />
      <YoutubeComponent title="image D3K" />
      </div>
     
    )
  } 
}


export default StateFullComponent