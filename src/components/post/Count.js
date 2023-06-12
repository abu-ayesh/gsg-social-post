import "./style.css";
import React from 'react'

const Count = ({posts}) => {
  return (
    <div className="post-container">
    <h5 className="post-count"> You have {posts.length} Posts Today </h5>
        </div>
  )
}

export default Count