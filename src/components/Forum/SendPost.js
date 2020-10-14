import React, { useState } from 'react';
import './SendPost.css';
import Button from '../Shared/Button';
import backendUrl from '../../services/backendLink';

function SendPost ({ getPost }) { // will use getPost as param to rerender the RenderPost when new post is sent
  async function sendPost () {
    try {
      const fetchResponse = await fetch(`${backendUrl}/api/post`, {
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

  async function handleSendPost (e) {
    e.preventDefault();
    sendPost();
    await getPost();
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
      <textarea rows="10" cols="45" style={{overflow:"hidden", resize: "none"}} className='send-post title' value={postData.post_title} onChange={handlePostTitle} placeholder='Poszt címe' />
      <textarea className='send-post content' value={postData.post_content} onChange={handlepostData} placeholder='Poszt tartalma' />
      <Button className='send-post-button' textContent='Megosztás' onClick={handleSendPost} />
    </div>
  );
}

export default SendPost;
