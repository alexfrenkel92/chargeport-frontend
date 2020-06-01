import React from 'react';
import './Forum.css';
import RenderPost from '../components/RenderPost';

function Forum () {
  return (
    <div className='forum-page'>
      <RenderPost />
    </div>
  );
}

export default Forum;
