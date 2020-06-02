import React, { useState } from 'react';
import './RenderPostData.css';
import Button from './Button';
import ModifyPost from './ModifyPost';

function RenderPostData ({ id, post_title, post_content, score, getPost }) {
  async function upVote () {
    try {
      await fetch(`http://localhost:8080/api/post/upvote/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' }
      });
      getPost();
      return;
    } catch (error) {
      return error;
    }
  }

  function handleUpVote (e) {
    e.preventDefault();
    upVote();
  }

  async function downVote () {
    try {
      await fetch(`http://localhost:8080/api/post/downvote/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' }
      });
      getPost();
      return;
    } catch (error) {
      return error;
    }
  }

  function handleDownVote (e) {
    e.preventDefault();
    downVote();
  }

  async function deletePost () {
    try {
      await fetch(`http://localhost:8080/api/post/delete/${id}`, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' }
      });
      getPost();
      return;
    } catch (error) {
      return error;
    }
  }

  function handleDeleteClick (e) {
    e.preventDefault();
    deletePost();
  }

  // responsible to modify a post
  const [view, setView] = useState({ normalView: true, postTitle: post_title, postContent: post_content });
  const settingTheView = (post_title, post_content) => {
    setView({ normalView: true, postTitle: post_title, postContent: post_content });
  };

  const handleModifyClick = (e) => {
    e.preventDefault();
    setView({ normalView: false, postTitle: post_title, postContent: post_content });
  };

  return (
    view.normalView
      ? <div className='render-post-data'>
        <h3 className='render-post-title'>
          {post_title}
        </h3>
        <p className='render-post-content'>
          {post_content}
        </p>
        <div className='post-score-wrapper'>
          <img className='up vote' src={require('../img/like.png')} onClick={handleUpVote} alt='Upvote' />
          <img className='down vote' src={require('../img/dislike.png')} onClick={handleDownVote} alt='Downvote' />
          <p className='render-post-score'>
            {score}
          </p>
          <Button className='modify post-button' textContent='Módosítás' onClick={handleModifyClick} />
          <Button className='delete post-button' textContent='Törlés' onClick={handleDeleteClick} />
        </div>
      </div>
      : <div>
        <ModifyPost id={id} postTitle={post_title} postContent={post_content} settingTheView={settingTheView} getPost={getPost} />
      </div>
  );
}

export default RenderPostData;
