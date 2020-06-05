import React, { useState } from 'react';
import './SendPost.css';
import Button from './Button';

function ModifyPost ({ id, postTitle, postContent, settingTheView, getPost }) {
  async function editPost () {
    try {
      const url = 'https://chargeport-backend.herokuapp.com' || 'http://localhost:8080';
      const fetchResponse = await fetch(`${url}/api/post/modify/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(postData)
      });
      const data = await fetchResponse.json();
      settingTheView(postTitle.post_title, postContent.post_content);
      return data;
    } catch (error) {
      return (error);
    }
  }

  const [postData, setData] = useState({ post_title: postTitle, post_content: postContent });

  const handleTitleChange = (e) => {
    setData({ post_title: e.target.value, post_content: postData.post_content });
  };

  const handleContentChange = (e) => {
    setData({ post_title: postData.post_title, post_content: e.target.value });
  };

  function handleModifyClick (e) {
    e.preventDefault();
    editPost();
    getPost();
  }

  return (
    <div className='modify-post-wrapper'>
      <textarea className='send-post title' value={postData.post_title} onChange={handleTitleChange} placeholder='Poszt címe' />
      <textarea className='send-post content' value={postData.post_content} onChange={handleContentChange} placeholder='Poszt tartalma' />
      <Button className='send-post-button' textContent='Mentés' onClick={handleModifyClick} />
    </div>
  );
}

export default ModifyPost;
