import React from "react";

const Comments = ({comment,post}) => {


  return <>
        <div className="post-container comments-post">
        <div className="display-comments">
          <div>
            <img className="post-avatar" src={post.profile.src} alt="Avatar" />
          </div>
          <div className="comment-form">
            <h4>{comment.text}</h4>
          </div>
        </div>
      </div> 
  </>;
};

export default Comments;
