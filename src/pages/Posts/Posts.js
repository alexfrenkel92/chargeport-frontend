import React from 'react';
import './Posts.css';
import RenderPost from '../../components/Forum/RenderPost';

function Forum () {
  return (
    <div className="forumPage">
      <RenderPost />
    </div>
  );
}

export default Forum;
