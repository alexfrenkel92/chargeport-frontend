import React, { useState } from 'react';
import './SendPost.css';
import Button from '../components/Button';

function SendPost ({ getPost }) { // will use getPost as param to rerender the RenderPost when new post is sent
  async function sendPost () {
    console.log(postData);
    try {
      const fetchResponse = await fetch('http://localhost:8080/api/post', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(postData)
      });
      const data = await fetchResponse.json();
      if (postData.post_title === '') {
        alert('Kérlek adj címet a posztodnak');
        return false;
      }
      if (postData.post_content === '') {
        alert('Kérlek fejtsd ki bővebben');
        return false;
      }
      setPostData({ post_title: '', post_content: '' });
      return data;
    } catch (error) {
      return error;
    }
  }

  function handleSendPost (e) {
    e.preventDefault();
    sendPost(); // sends the post
    getPost(); // than rerenders the getPost component
  }

  const [postData, setPostData] = useState({ post_title: '', post_content: '' });

  const handlePostTitle = (e) => {
    setPostData({ post_title: e.target.value, post_content: postData.post_content });
  };

  const handlepostData = (e) => {
    setPostData({ post_title: postData.post_title, post_content: e.target.value });
  };

  return (
    <div>
      <textarea className='send-post title' value={postData.post_title} onChange={handlePostTitle} placeholder='Poszt címe' />
      <textarea className='send-post content' value={postData.post_content} onChange={handlepostData} placeholder='Poszt tartalma' />
      <Button className='send-post-button' textContent='Megosztás' onClick={handleSendPost} />
    </div>
  );
}

export default SendPost;
