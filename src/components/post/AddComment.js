import React, { useState } from "react";
import Comments from "./Comments";

const Comment = ({ post }) => {
  const getCommentText = (event) => {
    setCommentText(event.target.value);
  };

  const [commentText, setCommentText] = useState("");

  const [comments, setComments] = useState([]);

  const addComment = () => {
    const comment = {
      text: commentText,
    };

    setComments([...comments, comment]);
  };

  return (
    <>
      <div className="post-container">
        <h5 className="post-count"> You have {comments.length} Comments </h5>
      </div>
      {comments.map((comment, index) => {
        return <Comments comment={comment} key={index} post={post} />;
      })}

      <div className="post-container comment-post">
        <div>
          <img className="post-avatar" src={post.profile.src} alt="Avatar" />
        </div>
        <div className="comment-form">
          <input
            onClick={(e) => (e.target.value = "")}
            className="comment-input"
            type="text"
            placeholder="Write a comment..."
            onChange={getCommentText}
          />
          <button className="comment-button" type="button" onClick={addComment}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Comment;
