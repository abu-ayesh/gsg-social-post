import React, { useState } from 'react'
import { Button } from 'react-bootstrap';


const Likes = () => {

    const [like,setLike] = useState(0);

  return (
    <Button variant="outline-success" onClick={()=>setLike(like+1)}>Like : {like}</Button>

    
  )
}

export default Likes