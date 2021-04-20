import React from 'react'

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/tech" alt=""></img>
      </div>
      <div className="content"> 
        <p className="title">{props.data.order_no}</p>
        <p >{props.data.soldtoparty_name}</p>
        <hr/>
        <button className="remove" onClick={() => props.remove(props.data.id)}> REMOVE</button>
      </div>
    </div>
  )
}

export default Post