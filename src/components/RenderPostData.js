import React from 'react';
import './RenderPostData.css';
import Button from './Button';

function renderPostData({ id, post_title, post_content, post_timestamp, score, getPost }) {

    async function upVote () {
        try {
            await fetch(`http://localhost:8080/api/post/upvote/${id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' }
            })            
            return;
        } catch (error) {
            return error;
        }
    }

    async function downVote () {
        try {
            await fetch(`http://localhost:8080/api/post/downvote/${id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' }
            })            
            return;
        } catch (error) {
            return error;
        }
    }

    function handleUpVote(e) {
        e.preventDefault();
        upVote();
        getPost();
    }

    function handleDownVote(e) {
        e.preventDefault();
        downVote();
        getPost();
    }

    return (
        <div className='render-post-data'>
            <h3 className='render-post-title'>
                {post_title}
            </h3>
            <p className='render-post-content'>
                {post_content}
            </p>
            <div className='post-score-wrapper'>
                <img className='up vote' src={require('../img/like.png')} onClick={handleUpVote} />
                <img className='down vote' src={require('../img/dislike.png')} onClick={handleDownVote} />
                <p className='render-post-score'>
                    {score}
                </p>
                <Button className='modify post-button' textContent='Módosítás' />
                <Button className='delete post-button' textContent='Törlés' />
            </div>
            {post_timestamp}
        </div>
    )
}

export default renderPostData;
