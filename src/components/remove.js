import React, { useState } from 'react'
import axios from 'axios';


function Remove() {
  const [comment, setComment] = useState([]);

  const deleteComment = (id) => {
    axios.delete(`${id}`);
    setComment(
       comment.filter((comment) => {
          return comment.id !== id;
       })
    );
 };

  return (
    <button onClick={deleteComment}>Delete</button>
  )
}

export default Remove