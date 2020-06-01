import React, { useState, useEffect } from 'react';
import './RenderPost.css';
import RenderPostData from './RenderPostData';
import SendPost from './SendPost';

function RenderPost() {

    const [renderedPost, setRenderedPost] = useState([]);
    async function getPost() {
        try {
            const fetchResponse = await fetch('http://localhost:8080/api/post', {
                method: 'GET',
                headers: { 'Content-type': 'application/json' }
            })
            const data = await fetchResponse.json();
            setRenderedPost(data);
            return;
        } catch (error) {
            return error;
        }
    }

    useEffect(() => {
        getPost()
    }, []);

    return (
        <div className='post-wrapper'>
            <div className='send-post-wrapper'>
                <SendPost getPost={getPost} />
            </div>
            <div className='render-post-wrapper'>
                <h2 className='render-post-data-header'>
                    A legrisebb bejegyzések
                </h2>
                {renderedPost.map(post =>
                    <RenderPostData
                        key={post.id}
                        post_title={post.post_title}
                        post_content={post.post_content}
                        score={post.score}
                    />)}
            </div>
        </div>
    )
}

export default RenderPost;
