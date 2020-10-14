import React from 'react';
import './Forum.css';
import RenderPost from '../components/Forum/RenderPost';

function Forum () {
  return (
    <div className="forumPage">
      <RenderPost />
    </div>
  );
}

export default Forum;
