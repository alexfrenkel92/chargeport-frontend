import React, { useState, useEffect } from 'react';
import './RenderPost.css';
import RenderPostData from './RenderPostData';
import SendPost from './SendPost';
import backendUrl from '../../services/backendLink';

function RenderPost() {
  const [renderedPost, setRenderedPost] = useState([]);
  async function getPost() {
    try {
      const fetchResponse = await fetch(`${backendUrl}/api/post`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
      });
      const data = await fetchResponse.json();
      setRenderedPost(data);
      return;
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <SendPost getPost={getPost} />
        </div>
      </div>
      <h2 className='render-post-data-header'>
        A legutóbbi bejegyzések
      </h2>
      <div className="row">
        <div className="col-sm">
          {renderedPost.map(post =>
            <RenderPostData
              getPost={getPost}
              key={post.id}
              id={post.id}
              post_title={post.post_title}
              post_content={post.post_content}
              score={post.score}
            />)}
        </div>
      </div>
    </div>
  );
}

export default RenderPost;
