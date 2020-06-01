import React from 'react';
import './RenderPostData.css';

function renderPostData({ post_title, post_content, post_timestamp, score }) {
    return (
        <div className='render-post-data'>
            <h3 className='render-post-title'>
                {post_title}
            </h3>
            <p className='render-post-content'>
                {post_content}
            </p>
            <div className='post-score-wrapper'>
                    <img className='up vote' src={require('../img/like.png')} />
                    <img className='down vote' src={require('../img/dislike.png')} />
                <p className='render-post-score'>
                    {score}
                </p>
            </div>
            {post_timestamp}
        </div>
    )
}

export default renderPostData;
