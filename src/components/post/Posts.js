import { Button } from "react-bootstrap";
import Comment from "./AddComment";
import Likes from "./Likes";
import "./style.css";
import React, { useState } from "react";

const Post = ({ post, posts }) => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <div className="post-container">
        <div className="post-header">
          <img className="post-avatar" src={post.profile.src} alt="Avatar" />
          <div>
            <div className="post-author">{post.username}</div>
            <div className="post-date">{post.date}</div>
          </div>
        </div>
        <div className="post-content">{post.description}</div>
        <div className="post-image-container">
          <img className="post-image" src={post.image.src} alt="Post" />
        </div>
        <div className="post-actions">
          <Likes />
          <Button variant="outline-success" onClick={handleClick}>
            Comments
          </Button>
        </div>
      </div>

      <div>{isShown && <Comment posts={posts} post={post} />}</div>
    </>
  );
};

export default Post;
