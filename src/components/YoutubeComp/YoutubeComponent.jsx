import React from 'react'
import './YoutubeComponent.css'

const YoutubeComponent = (props) => {
  return (
    <div className="gallery">
    <p>{props.title}</p>
        <div className="image-wrapper">
            <img src={props.link} alt=""></img>
        </div>
    </div>
  )
}

YoutubeComponent.defaultProps = {
  link: "https://picsum.photos/536/354"
}

export default YoutubeComponent