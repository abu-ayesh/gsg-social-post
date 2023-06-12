import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Count from './Count';
import Post from './Posts';

const AddPost = () => {

  
    const postImage = {
        src: "https://source.unsplash.com/1600x900/?nature",
        alt: "random unsplash image",
      };
    
      const avatarImage = {
        src: "https://source.unsplash.com/1600x900/?men",
        alt: "random unsplash image",
      };
    
      const getUserName = (event) => {
        setUserName(event.target.value);
      };
    
      const getDescription = (event) => {
        setDescription(event.target.value);
      };
    
      const [userName, setUserName] = useState("");
      const [description, setDescription] = useState("");
    
      const [posts, setPosts] = useState([]);
    
      const addPost = () => {
        const postObject = {
          id: Math.random() * 100,
          username: userName,
          description: description,
          like: 854,
          comment: 541,
          comments: [],
          profile: avatarImage,
          image: postImage,
          date: new Date().toLocaleString(),
        };
    
        setPosts([...posts, postObject]);
      };

      
  return (
    <Container>
    <Row>
      <Col sm={5}>
        <div className="App">
          <div className="post-container">
            <h3>Add New Post</h3>
            <div className="form-outline">
              <label className="form-label">Add Your Name</label>
              <input
                onClick={(e)=>{e.target.value=""}}
                type="text"
                id="typeText"
                className="form-control"
                onChange={getUserName}
              />
            </div>
            <br></br>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                onClick={(e)=>{e.target.value=""}}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={getDescription}
              ></textarea>
            </div>
            <Button onClick={addPost} variant="primary">
              Add New
            </Button>
          </div>
        </div>
      </Col>

      <Col sm={7}>
        <Count posts={posts} />
        <div>
          {posts.map((post, index) => {
            return <Post post={post} posts={posts}  key={index}/>;
          })}
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default AddPost